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
		if (this.props.current_user == null) {
			button = <div className={this.props.classList} data-toggle="modal" data-target="#logiModal">{this.props.buttonText}</div>
		}else{
			button = <div className={this.props.classList} onClick={this.handleClick} aria-hidden="true">{this.props.buttonText}</div>			
		}		
		
        return (
            <div>
            	{button}
            </div>
        )
	}
});

