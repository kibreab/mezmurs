var LoginModal = React.createClass({
    updateCurrentUser(user){
    	this.props.updateCurrentUser(user);
    },
    render() {    	
    	var member_check = this.props.current_user ? this.props.current_user.name : "Are you a member already?"
        return(
			
			<div className="modal fade" id="logiModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      
			      <div className="modal-header">			        
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span className="fa fa-times"aria-hidden="true"></span>
			        </button>
			      </div>

			      <div className="modal-body">
			      	<div className="welcome-text">WELCOME</div>
			      	<div className="site-name">M E Z M U R S . C O M </div>

			      	<div className="member-qn">{member_check}</div>
			      	<User modal={true} updateCurrentUser={this.updateCurrentUser} current_user={this.props.current_user} />

			      	<div className="benefits-pack-holder">
			      		<div className="benefits-holder">
			      			<div className="pull-left fa fa-check"></div>
			      			<div className="pull-left">Create playlist and collect your songs</div>
			      		</div>
			      		<div className="benefits-holder">
			      			<div className="pull-left fa fa-check"></div>
			      			<div className="pull-left">Edit songs and contribute</div>
			      		</div>
			      		<div className="benefits-holder">
			      			<div className="pull-left fa fa-check"></div>
			      			<div className="pull-left">Add singers and singer profiles</div>
			      		</div>
			      		<div className="benefits-holder">
			      			<div className="pull-left fa fa-check"></div>
			      			<div className="pull-left">And a lot more to enjoy with sign-in</div>
			      		</div>			      					      					      		
			      	</div>
			      </div>			      
			    </div>
			  </div>
			</div>
        )
    }
});