var SignUp = React.createClass({
 handleClick(e) {
  e.preventDefault()
  var that = this

  var email_val = this.props.modal ? $("#email-modal").val() : $("#email").val();
  var pass_val = this.props.modal ? $("#password-modal").val() : $("#password").val();
  var name_val = this.props.modal ? $("#name-modal").val() : $("#name").val();



  var userInfo = {
   user: {
    email: email_val,
    name: name_val,
    password: pass_val
   }
  }
  $.ajax({
   type: "POST",
   url: "/users",
   dataType: 'json',
   data: userInfo,
   success: function (user) {
    console.log("user sign in success")
    that.props.changePage("edit")  
    that.props.updateCurrentUser(user)
   },
   error: function (error) {
    console.log("there is error in SingUp")
   },   
  })
 },

render: function() {
  var email_id = this.props.modal ? "email-modal" : "email";
  var password_id = this.props.modal ? "password-modal" : "password";
  var name_id = this.props.modal ? "name-modal" : "name"; 
  return (
   <div>
    <Title titleBig="Register" titleSmall="በቀላሉ ይመዝገቡ" />

    <div className="side-content-container">
      <form>
        <div className="side-input-container">
          <input id={name_id} placeholder="name"/>
          <input id={email_id} placeholder="email"/>
          <input id={password_id} placeholder="password"/>
        </div> 
        <div>
          <button className="main-side-button" onClick={this.handleClick}>Register</button>        
        </div>

          
      </form>
    </div>


    <div className="sign-up-area">
      <Title titleBig="Or login" titleSmall="ይገቡ" />
      <div className="side-content-container">
        <button className="main-side-button" onClick={()=>this.props.changePage("login")}>Login</button>    
      </div >     
    </div>    



   </div>              
  )
 }
});