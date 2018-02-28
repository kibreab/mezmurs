var PlaylistSong = React.createClass({
    getInitialState() {return {editable: false}},    
    
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(singer) {
        this.props.onUpdate(singer);
    },
    render() {
        return(
            <div className="playlist-songs-list">                
                <div className="playlist-song-title pull-left" >{this.props.song.title}</div>
                <div className="delete-button pull-right">
                    <i className="fa fa-minus-circle song-action-buttons" onClick={this.handleDelete} aria-hidden="true"></i>
                </div>
            </div>
        )
    }
});