var Edit = React.createClass({

render: function() {
  return (
    <div>
      <Title titleBig={"Welcome " + ""} titleSmall="ሻሎም" />      
      <div className="side-content-container">
        {window.current_user ? window.current_user.email : ""}  
      </div>  
    </div>    
  )
 }
});