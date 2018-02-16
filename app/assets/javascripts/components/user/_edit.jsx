var Edit = React.createClass({

render: function() {
  return (
    <div>
      <Title titleBig={"Welcome " + ""} titleSmall="ሻሎም" />      
      <div className="side-listing-container">        
        
        <div className="pull-left user-content-container">
          <div>
            {this.props.current_user ? this.props.current_user.name : ""}   
          </div>

          <div>
            {this.props.current_user ? this.props.current_user.email : ""}
          </div>

        </div>

        <div className="pull-left user-pic-container">
          <i className="fa fa-user" />
        </div>


      </div>
        
    </div>    
  )
 }
});