var AudioHeader = React.createClass({
    getInitialState() {
        return {
            editable: false  
        }
    },    
    handleSingerEdit() {
        if(this.state.editable) {            
            var id = this.refs.id.value;            
            var song = {id: id, singer_id: $("#singer-select").val()};
            this.props.onUpdate(song);
        }
        this.setState({ editable: !this.state.editable })
    },
    updateCurrentUser(user){
        this.props.updateCurrentUser(user);
    },
    render() {
        var current_song = this.props.currentSong;
        console.log(current_song);
        var current_song_title = current_song ? current_song.title : "";                
        var current_song_singer = this.state.editable ? <SingersSelectList song={current_song} singers={this.props.singers} />
            : (current_song ? (current_song.singer ? current_song.singer.singer_name : "UNKNOWN SINGER- please edit") : "");

        var idField = <input type='hidden' ref='id' defaultValue={current_song ? current_song.id : ""} />;
        var editSubmitButton = <ActionButton
                                    current_user={this.props.current_user}
                                    updateCurrentUser={this.updateCurrentUser}
                                    classList={"fa edit-song-icon " + (this.state.editable ? " fa-paper-plane" : " fa-pencil-square-o")}
                                    handleAction={this.handleSingerEdit} />

        return(
            <div className="pull-left mid-navigation audio-header">
                <div className="current-singer-name">
                    <span>{current_song_singer}</span>
                    {current_song ? editSubmitButton : "Selct song to play.."}
                    {idField}
                </div>
                <div className="current-song-title">{current_song_title}</div>           
                <audio src="" controls id="audioPlayer">
                </audio>
            </div>            
        )
    }
});