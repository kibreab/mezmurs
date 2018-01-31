var Title = React.createClass({
    render() {	
        return (
        	<div className="title-container">
            	<div className=" big-title">{this.props.titleBig}</div>
            	<div className="amharic small-title">{this.props.titleSmall}</div>        	
        	</div>

        )
    }
});                