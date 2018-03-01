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
                        <div className="pull-left">
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

                                <div className="sort-icon-container">                                    
                                    <span className="user-likes-button-descripton">
                                        Play all
                                    </span> 
                                    <i className="sort-icons fa fa-play action-icon likes-icons"></i>
                                    <span className="user-likes-button-descripton">
                                        View all 
                                    </span>
                                    <i className="sort-icons fa fa-eye action-icon likes-icons"></i>
                                </div>

                            </div>
                        </div>
                        <div className="pull-left">
                            <div className="count-total-likes">
                                {likesCount}
                            </div>                            
                        </div>
    				</div>

    			</div >					               
            </div>
        )
    }
});