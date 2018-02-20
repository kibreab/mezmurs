var LoginModal = React.createClass({
    updateCurrentUser(user){
    	this.props.updateCurrentUser(user);
    },
    render() {    	
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
			      	<Title titleBig="WWW ontribute or sth" titleSmall="በቀላሉ ይመዝገቡ" />
			      	
			      </div>
			      
			      <div className="modal-footer">   			        
			      </div>

			    </div>
			  </div>
			</div>
        )
    }
});