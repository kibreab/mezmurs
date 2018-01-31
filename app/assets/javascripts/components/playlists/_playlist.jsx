var Playlist = React.createClass({
    getInitialState() {return {editable: false}},    
    
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(singer) {
        this.props.onUpdate(playlist);
    },
    render() {
        return(
            <div className="side-listing-container"> 
                <div className="pull-left">{this.props.playlist.title}</div>
                <div className="pull-right">                    
                    <i className="fa fa-trash song-action-buttons" onClick={this.handleDelete} aria-hidden="true"></i>
                </div>
            </div>
        )
    }
});