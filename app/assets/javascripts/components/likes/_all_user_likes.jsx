var AllUserLikes = React.createClass({

    handleClick() {
        console.log("clicked the liked")

    },

    render() {
    	var likesCount = this.props.current_user ? this.props.current_user.user_likes.length : 0;
        return(
            <div className="pull-left">

    			<div className="sort-items-holder pull-left">
    				<div className="sort-item">
            			<div className="pull-left sort-icon-description">
            				<i className="description-icon fa fa-heart action-icon"></i>
            			</div>              				
    					<div className="pull-left text-area">
    						<div className="english-text">
    							Play your Liked songs
    						</div>
    						<div className="amharic amharic-text">
    							የወደዱዋቸውን መዝሙሮች ያጫውቱ
    						</div>

    						<div className="sort-icon-container count-number">
    							{likesCount}
    						</div>

    					</div>
 

    				</div>

    			</div >					               
            </div>
        )
    }
});