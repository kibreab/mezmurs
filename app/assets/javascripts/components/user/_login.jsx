var Login = React.createClass({
 handleLogin(e) {
  e.preventDefault()
  var that = this
  var userInfo = {
   user: {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
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
    <h2>Login</h2>
    <form>
     <input id="email" placeholder="email"/>
     <input id="password" placeholder="password"/>
     <button onClick={this.handleLogin}>Log in</button>
    </form>
    <button onClick={()=>this.props.changePage("signup")}>Sign Up!</button>
   </div>              
  )
 }
});