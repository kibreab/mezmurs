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
        var self = this;
        var songs= this.props.songs.map((song) => {
            return (
                <div key={song.id}>
                    <Song song={song}
                          handleDelete={this.handleDelete.bind(this, song.id)}
                          updateCurrentSong={this.updateCurrentSong}
                          handleUpdate={this.onUpdate}/>
                </div>
            )
        });

        return(

            <div className="container songs-holder">
                <AudioHeader currentSong={self.state.currentSong} />
                {songs}
            </div>
        )
    }
});