var Playlist = React.createClass({
    getInitialState() {return {editable: false}},    
    
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(singer) {
        this.props.onUpdate(playlist);
    },
    render() {

        var playlist_songs = this.props.playlist.songs.map((song) => { 
            return (                               
                <div className="playlist_song-item-holder">
                    <PlaylistSong song={song}
                          handleDelete={this.handleDelete.bind(this, song.id)}
                          handleUpdate={this.onUpdate}
                          current_user={this.props.current_user} />
                </div>
            )
        });
        
        var playlistAndSongs =  null;
        playlistAndSongs = 
            <div>
                <div>
                    <i className="fa fa-chevron-down site-toggle-buttons" type="" data-toggle="collapse" data-target={"#" + this.props.playlist.id + (this.props.dataFor ? this.props.dataFor : "") } aria-expanded="false" aria-controls="collapseSongs"></i>
                    
                    <div className="playlist-trash-icon-container pull-right">                    
                        <i className="fa fa-trash song-action-buttons" onClick={this.handleDelete} aria-hidden="true"></i>
                    </div>                    
                    <div className="pull-right">{this.props.playlist.title}</div>
                </div>
                <div className="playlist-length-container">{this.props.playlist.songs.length}</div>
                
                <div className="collapse" id={this.props.playlist.id + (this.props.dataFor ? this.props.dataFor : "")}>
                    <div className="card card-block">
                        <div className="">
                            {playlist_songs}
                        </div>
                    </div>
                </div>
            </div>    
  
        return(
            <div className="pull-left playlist-listing-container"> 
                <div className="pull-left">                    
                    {playlistAndSongs}                
                </div>              

            </div>
        )
    }
});