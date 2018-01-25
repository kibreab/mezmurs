var Song = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    componentDidMount(){
      this.audioPlayer();
    },
    audioPlayer(){
        var currentSong = 0;
        $("#audioPlayer")[0].src = $("#playlist div a")[0];
        $("#audioPlayer")[0].play();
        $("#playlist div a").click(function(e){
           e.preventDefault(); 
           $("#audioPlayer")[0].src = this;
           $("#audioPlayer")[0].play();
           $("#playlist div").removeClass("current-song");
            currentSong = $(this).parent().index();
            $(this).parent().addClass("current-song");
        });
        
        $("#audioPlayer")[0].addEventListener("ended", function(){
           currentSong++;
            if(currentSong == $("#playlist div a").length)
                currentSong = 0;
            $("#playlist div").removeClass("current-song");
            $("#playlist div:eq("+currentSong+")").addClass("current-song").addClass("highlighted");
            $("#audioPlayer")[0].src = $("#playlist div a")[currentSong].href;
            $("#audioPlayer")[0].play();
        });  
    },
    handleEdit() {
        if(this.state.editable) {
            var title = this.refs.title.value;
            var id = this.props.song.id;
            var description = this.refs.description.value;
            var song = {id: id , title: title , description: description};
            this.props.handleUpdate(song);

        }
        this.setState({ editable: !this.state.editable })
    },
    handleCancel() {
        this.setState({ editable: !this.state.editable })
    },    
    handleLoginKeyUp() {
        transcrire();
    },
    render() {
        //<input type='text' ref='description' defaultValue={this.props.song.description} />
        var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.song.title} /> : <h3>{this.props.song.title}</h3>;
        var description = this.state.editable ? 
            <div className="midcol">
                <div className="app">
                    <form name="conversion" method="get" action="" target="">
                        <textarea defaultValue={this.props.song.description} ref='description' id="saisie" onKeyUp={this.handleLoginKeyUp} className="editor"  placeholder="መጻፍ ይጀምሩ..."></textarea>
                    </form>
                </div>
            </div> : <p>{this.props.song.description}</p>;
        var cancelButton = this.state.editable ? <button onClick={this.handleCancel} >Cancel</button>: '';
        return (
            <div className="current-song">
                
                <div id="playlist">
                    <div><a href={"assets/" + this.props.song.filename}>{title}</a></div>
                </div>                
                
                <div>{this.props.song.singer}</div>            
                {description}
                {cancelButton}
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
                <button onClick={this.props.handleDelete} >Delete</button>             
            </div>
        )
    }
});