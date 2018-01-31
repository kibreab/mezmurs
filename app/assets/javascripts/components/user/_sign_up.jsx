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
  return (
   <div>
    <Title titleBig="Register" titleSmall="በቀላሉ ይመዝገቡ" />

    <div className="side-content-container">
      <form>
       <input id="email" placeholder="email"/>
       <input id="password" placeholder="password"/>
       <button className="mz-btns" onClick={this.handleClick}>Register</button>
      </form>
    </div>    
   </div>              
  )
 }
});