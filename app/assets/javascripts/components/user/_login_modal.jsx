
var LoginModal = React.createClass({
    updateCurrentUser(user){
    	this.props.updateCurrentUser(user);
    },
    render() {
        return(
			
			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">			        
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span className="fa fa-times"aria-hidden="true"></span>
			        </button>
			      </div>

			      <div className="modal-body">
			      	<Title titleBig="WWW ontribute or sth" titleSmall="በቀላሉ ይመዝገቡ" />
			      	<User updateCurrentUser={this.updateCurrentUser} />
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary">Send message</button>
			      </div>
			    </div>
			  </div>
			</div>        	

        )
    }
});



