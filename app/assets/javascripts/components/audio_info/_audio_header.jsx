var AudioHeader = React.createClass({

    render() {
        var current_song = this.props.currentSong;
        var current_song_title = current_song ? current_song.title : "";
        var current_song_singer = current_song ? (current_song.singer ? current_song.singer.singer_name : "-") : "";
        return(
            <div className="container audio-header">
                <div className="current-singer-name">{current_song_singer}</div>
                <div className="current-song-title">{current_song_title}</div>           
                <audio src="" controls id="audioPlayer">
                </audio>
            </div>            
        )
    }
});