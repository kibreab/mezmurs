var Allsongs = React.createClass({

    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(song) {
        this.props.onUpdate(song);
    },

    updateCurrentSong(song){
        this.props.updateCurrentSong(song)      
    },

    render() {
        var songs= this.props.songs.map((song) => {
            return (
                <div key={song.id}>
                    <Song song={song}
                          handleDelete={this.handleDelete.bind(this, song.id)}
                          updateCurrentSong={this.updateCurrentSong}
                          singers={this.props.singers}
                          current_user={this.props.current_user}
                          currentSong={this.props.currentSong}
                          handleSongLike={this.props.handleSongLike}
                          handleUpdate={this.onUpdate}/>
                </div>
            )
        });

        return(

            <div className="songs-holder">
                <AudioHeader currentSong={this.props.currentSong} />
                <SearchArea />
                {songs}
            </div>
        )
    }
});