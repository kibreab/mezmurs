var Login = React.createClass({
 handleLogin(e) {
  e.preventDefault()
  var that = this

  var email_val = this.props.modal ? $("#email-modal").val() : $("#email").val();
  var pass_val = this.props.modal ? $("#password-modal").val() : $("#password").val();

  var userInfo = {
   user: {
    email: email_val,
    password: pass_val
   }
  }

  $.ajax({
   type: "POST",
   url: "/users/sign_in",
   dataType: 'json',
   data: userInfo,
   success: function (user) {
    console.log("user sign in success");
    that.props.changePage("edit");
    that.props.updateCurrentUser(user);
   },
   error: function (error) {
    console.log("there is error in sign in ");
    console.log(error)
   },   
  })
 },
render: function() {
  var email_id = this.props.modal ? "email-modal" : "email";
  var password_id = this.props.modal ? "password-modal" : "password";
  return (
   <div>
    <Title titleBig="login" titleSmall="ይግቡ" />
    <div className="side-content-container">
      <form>
        <div className="side-input-container">             
          <input id={email_id} placeholder="Email"/>       
          <input id={password_id} placeholder="Password"/>        
        </div>
        <div className="">
          <button className="main-side-button" onClick={this.handleLogin}>Log in</button>
        </div>
       
      </form>
    </div>


    <div className="sign-up-area">
      <Title titleBig="Or Register" titleSmall="በቀላሉ ይመዝገቡ" />
      <div className="side-content-container">
        <button className="main-side-button" onClick={()=>this.props.changePage("signup")}>Sign Up!</button>    
      </div >     
    </div>    

   </div>              
  )
 }
});