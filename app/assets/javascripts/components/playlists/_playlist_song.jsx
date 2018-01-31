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
            <div className="">                
                <div className="pull-left" >{this.props.song.title}</div>
                <div className="pull-right">
                    <i className="fa fa-trash song-action-buttons" onClick={this.handleDelete} aria-hidden="true"></i>
                </div>
            </div>
        )
    }
});