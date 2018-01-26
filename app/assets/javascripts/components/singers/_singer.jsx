var Singer = React.createClass({
    getInitialState() {return {editable: false}},    
    
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(song) {
        this.props.onUpdate(song);
    },
    render() {
        var deleteButton = <i className="fa fa-trash song-action-buttons" onClick={this.handleDelete} aria-hidden="true"></i>
        return(
            <div className="singer-container">                
                {this.props.singer.singer_name}
                {deleteButton}


            </div>

        )
    }
});