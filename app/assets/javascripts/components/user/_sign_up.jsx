var SignUp = React.createClass({
 handleClick(e) {
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
   url: "/users",
   dataType: 'json',
   data: userInfo,
   success: function (res) {
    console.log("user sign in success")
    that.props.changePage("edit")  
    that.props.updateCurrentUser(res)
   },
   error: function (error) {
    console.log("there is error in SingUp")
   },   
  })
 },

render: function() {
  return (
   <div>
    <h2>Sign up</h2>
    <form>
     <input id="email" placeholder="email"/>
     <input id="password" placeholder="password"/>
     <button onClick={this.handleClick}>Submit</button>
    </form>    
   </div>              
  )
 }
});