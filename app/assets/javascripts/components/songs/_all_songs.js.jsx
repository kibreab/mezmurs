var Allsongs = React.createClass({
    getInitialState() {
        return { currentSong: null }
    },


    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(song) {
        this.props.onUpdate(song);
    },

    updateCurrentSong(song){
        this.setState({ currentSong: song });
    },

    render() {
        var songs= this.props.songs.map((song) => {
            return (
                <div key={song.id}>
                    <Song song={song}
                          handleDelete={this.handleDelete.bind(this, song.id)}
                          updateCurrentSong={this.updateCurrentSong}
                          current_user={this.props.current_user}
                          handleUpdate={this.onUpdate}/>
                </div>
            )
        });

        return(

            <div className="songs-holder">
                <AudioHeader currentSong={this.state.currentSong} />
                {songs}
            </div>
        )
    }
});