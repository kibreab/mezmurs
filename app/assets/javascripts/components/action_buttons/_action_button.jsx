var ActionButton = React.createClass({
	handleClick() {
		if (this.props.current_user) {
			this.props.handleAction();
		}else{
			console.log(' -*- -*-  **  LOGIN REQUIRED !  **  -*- -*- ')
		}
		
	},
	render() {
		var button = null;
		if (true) {
			button = this.props.editable ? 
				<i className={"fa song-action-buttons " + "fa-paper-plane"} onClick={this.handleClick} aria-hidden="true"></i> : 
				<i className="fa fa-pencil-square-o song-action-buttons" onClick={this.handleClick} aria-hidden="true"></i>		
		};
        return (
            <i>
            	{button}
            </i>
        )
	}
});

