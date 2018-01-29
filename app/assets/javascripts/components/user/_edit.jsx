var Edit = React.createClass({

render: function() {
  return (
   <div>
    <div>Welcome !</div> 
    <div>{window.current_user ? window.current_user.email : "email .."}</div>  
   </div>      
  )
 }
});