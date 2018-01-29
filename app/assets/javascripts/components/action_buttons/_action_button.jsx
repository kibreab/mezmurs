var ActionButton = React.createClass({

	render() {
		var button = null;
		if (this.props.current_user) {
			button = this.props.editable ? 
				<i className="fa fa-paper-plane song-action-buttons" onClick={this.props.handleEdit} aria-hidden="true"></i> : 
				<i className="fa fa-pencil-square-o song-action-buttons" onClick={this.props.handleEdit} aria-hidden="true"></i>		
		};
        return (
            <i>
            	{button}
            </i>
        )
	}
});

