var Main = React.createClass({
    getInitialState() {
        return { current_user: this.props.current_user}
    },

	updateCurrentUser(user) {
    	this.setState({
    	  current_user: user
    	})		
		window.current_user = user;
	},
    render() {
    	if (this.props.current_user)
    		window.current_user = this.props.current_user

        return (
            <div className="page">            
                <Header current_user={this.state.current_user} />
                <Body 
                    updateCurrentUser={this.updateCurrentUser} 
                    current_user={this.state.current_user}  
                    currentSong={this.props.currentSong}
                    />
            </div>
        )
    }
});