var ActionButton = React.createClass({

	handleClick() {
		if (this.props.current_user) {
			this.props.handleAction();
		}else{
			console.log(' - shouldnot come here and LOGIN REQUIRED')
		}		
	},
	updateCurrentUser(user){
		this.props.updateCurrentUser(user);
	},
	render() {
		
		var button = null;						
		var loginModal = null;

		if (this.props.current_user == null) {
			
			button = <div type="button" className={this.props.classList} data-toggle="modal" data-target="#exampleModal"></div>
			

		}else{
			button = <i className={this.props.classList} onClick={this.handleClick} aria-hidden="true"></i>
			var loginModal = null;
		}		
		loginModal = <LoginModal updateCurrentUser={this.updateCurrentUser} />
        return (
            <i>
            	{button}
            	{loginModal}            	

            </i>
        )
	}
});

