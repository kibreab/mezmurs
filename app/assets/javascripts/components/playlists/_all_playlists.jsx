var AllPlaylists = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    handleSubmit(singer){
        this.props.handlePlaylistSubmit(singer)
    },
    onUpdate(song) {
        //this.props.onSingersUpdate(song);
    },

    render() {
        var playlists = null;

        if (this.props.current_user && this.props.current_user.playlists.length) {
            var sorted_playlists = _.sortBy(this.props.current_user.playlists, 'title');
            var playlists= sorted_playlists.map((playlist) => {
                return (
                    <div key={playlist.id+"-playlist"}>
                        <Playlist playlist={playlist}
                              handleDelete={this.handleDelete.bind(this, playlist.id)}
                              handleUpdate={this.onUpdate}
                              handleAddSongToPlaylist={this.props.handleAddSongToPlaylist}
                              current_user={this.props.current_user} />
                    </div>
                )
            });        
        }else{
            var playlists = <div>Please add playlists to see them here</div>
        }

        return(
            <div className="pull-left mid-navigation ">                
                <div className="all-playlists-container">                    
                    {playlists}                    
                </div>
            </div>
        )
    }
});