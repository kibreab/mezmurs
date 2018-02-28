var Allsongs = React.createClass({

    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(song) {
        this.props.onUpdate(song);
    },

    updateCurrentSong(song){
        this.props.updateCurrentSong(song);      
    },
    updateCurrentUser(user){
        this.props.updateCurrentUser(user);
    },
    render() {
        var songs= this.props.songs.map((song) => {
            return (
                <div key={song.id}>
                    <Song song={song}
                          handleDelete={this.handleDelete.bind(this, song.id)}
                          updateCurrentSong={this.updateCurrentSong}
                          updateCurrentUser={this.updateCurrentUser}
                          singers={this.props.singers}
                          current_user={this.props.current_user}
                          currentSong={this.props.currentSong}
                          handleAddSongToPlaylist={this.props.handleAddSongToPlaylist}
                          handleSongLike={this.props.handleSongLike}
                          handleUpdate={this.onUpdate} />
                </div>
            )
        });

        return(

            <div className="">
                <div className="all-song-items-container">
                    {songs}
                </div>
                
            </div>
        )
    }
});