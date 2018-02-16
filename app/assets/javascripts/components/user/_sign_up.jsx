var SignUp = React.createClass({
 handleClick(e) {
  e.preventDefault()
  var that = this
  var userInfo = {
   user: {
    email: document.getElementById("email").value,
    name: document.getElementById("name").value,
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
        <div className="side-input-container">
          <input id="name" placeholder="name"/>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
        </div> 
        <div>
          <button className="main-side-button" onClick={this.handleClick}>Register</button>        
        </div>

          
      </form>
    </div>    
   </div>              
  )
 }
});