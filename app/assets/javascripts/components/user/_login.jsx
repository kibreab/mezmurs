var Login = React.createClass({
 handleLogin(e) {
  e.preventDefault()
  var that = this
  var userInfo = {
   user: {
    email: $("#email").val(),
    password: $("#password").val()
   }
  }
  $.ajax({
   type: "POST",
   url: "/users/sign_in",
   dataType: 'json',
   data: userInfo,
   success: function (user) {
    console.log("user sign in success")
    that.props.changePage("edit");
    that.props.updateCurrentUser(user);
   },
   error: function (error) {
    console.log("there is error in sign in");
   },   
  })
 },
render: function() {
  return (
   <div>
    <Title titleBig="login" titleSmall="ይግቡ" />
    <div className="side-content-container">
      <form>
        <div className="side-input-container">
          <input id="email" placeholder="email"/>       
          <input id="password" placeholder="password"/>        
        </div>
        <div className="">
          <button className="main-side-button" onClick={this.handleLogin}>Log in</button>
        </div>
       
      </form>
    </div>

    <Title titleBig="Register" titleSmall="በቀላሉ ይመዝገቡ" />
    <div className="side-content-container">
      <button className="mz-btns" onClick={()=>this.props.changePage("signup")}>Sign Up!</button>    
    </div >
    

   </div>              
  )
 }
});