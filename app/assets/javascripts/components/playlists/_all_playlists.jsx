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

        if (this.props.current_user && this.props.current_user.playlists) {

            var playlists= this.props.current_user.playlists.map((playlist) => {
                return (
                    <div key={playlist.id}>
                        <Playlist playlist={playlist}
                              handleDelete={this.handleDelete.bind(this, playlist.id)}
                              handleUpdate={this.onUpdate}
                              current_user={this.props.current_user} />
                    </div>
                )
            });
        }

        return(
            <div className="">                
                <div className="all-playlists-container">                    
                    {playlists}                    
                </div>
            </div>
        )
    }
});