var Allsongs = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(song) {
        this.props.onUpdate(song);
    },

    render() {
            var songs= this.props.songs.map((song) => {
                return (
                    <div key={song.id}>
                        <Song song={song}
                              handleDelete={this.handleDelete.bind(this, song.id)}
                              handleUpdate={this.onUpdate}/>
                    </div>
                )
            });

        return(

            <div>
                <audio src="" controls id="audioPlayer">
                </audio>
                {songs}
            </div>
        )
    }
});