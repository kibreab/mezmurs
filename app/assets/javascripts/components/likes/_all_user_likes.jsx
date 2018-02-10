var AllUserLikes = React.createClass({

    handleClick() {
        console.log("clicked the liked")

    },

    render() {
    	var likesCount = this.props.current_user ? this.props.current_user.user_likes.length : 0;
        return(
            <div className="">
                <Title titleBig="Liked songs" titleSmall="የወደዋቸው መዝሙሮች" /> 
    			<div className="side-content-container">
    			  <button onClick={this.handleClick} className="mz-btns">{"Play only liked (" + likesCount })</button>    
    			</div >					               
            </div>
        )
    }
});