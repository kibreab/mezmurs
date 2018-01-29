var Song = React.createClass({
    getInitialState() {
        return {
            editable: false
        }
    },
    componentDidMount(){
      //this.audioPlayer();
      var currentSong = 0;
      $("#audioPlayer")[0].addEventListener("ended", function(e){
         currentSong++;
         if(currentSong == $("#playlist div").length)
             currentSong = 0;
         //$("#playlist div:eq("+currentSong+")").addClass("current-song").addClass("highlighted");
         $("#audioPlayer")[0].src = $("#playlist div a")[currentSong].href;
         //$("#playlist div").addClass("active")
         $("#audioPlayer")[0].play();
      });       
    },
    
    //audioPlayer(){
    //    var self = this;
    //    var currentSong = 0;
    //    //$("#audioPlayer")[0].src = $("#playlist div a")[0];
    //    //$("#audioPlayer")[0].play();
    //    $("#playlist div a").click(function(e){
    //       e.preventDefault();
    //       $("#audioPlayer")[0].src = this;
    //       //$("#audioPlayer")[0].play();
    //       $(".song-title > a").removeClass("active");
    //        currentSong = $(this).parent().index();
    //        //$(this).parents().find(".list-group-item").addClass("active");
    //        $(this).addClass("active");
    //        console.log(currentSongID);
    //        
    //    });
    //    
    //    $("#audioPlayer")[0].addEventListener("ended", function(){
    //       currentSong++;
    //        if(currentSong == $("#playlist div a").length)
    //            currentSong = 0;
    //        $(".list-group-item").removeClass("active");
    //        //$("#playlist div:eq("+currentSong+")").addClass("current-song").addClass("highlighted");
    //        $("#audioPlayer")[0].src = $("#playlist div a")[currentSong].href;
    //        $("#audioPlayer")[0].play();
    //    });  
    //},

    handlePlaySong(e){
        e.preventDefault();
        var src = "assets/" + this.props.song.filename;
        $("#audioPlayer")[0].src = src;
        $("#audioPlayer")[0].play();
        $(".song-title").find("a").removeClass("active");
        $(e.currentTarget).find("a").addClass("active");
        this.updateCurrentSong(this.props.song);
    },

    updateCurrentSong(song){
        this.props.updateCurrentSong(song);
    },
    handleEdit() {
        if(this.state.editable) {
            var title = this.refs.title.value;
            var id = this.refs.id.value;
            var description = this.refs.description.value;
            var song = {id: id , title: title , description: description};
            this.props.handleUpdate(song);

        }
        this.setState({ editable: !this.state.editable })
    },
    handleCancel() {
        this.setState({ editable: !this.state.editable })
    },    
    handleAmharicInputKeyUp() {
        transcrire();
    },
    render() {
        var singer_name = this.props.song.singer ? this.props.song.singer.singer_name : " - "
        var singer_picture = this.props.song.singer ? this.props.song.singer.singer_name : " - "        
        //<input type='text' ref='description' defaultValue={this.props.song.description} />
        var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.song.title} /> : this.props.song.title;
        var idField = <input type='hidden' ref='id' defaultValue={this.props.song.id} />;
        var description = this.state.editable ? 
            <div className="midcol">
                <div className="app">
                    <form name="conversion" method="get" action="" target="">
                        <textarea defaultValue={this.props.song.description} ref='description' id="saisie" onKeyUp={this.handleAmharicInputKeyUp} className="editor"  placeholder="መጻፍ ይጀምሩ..."></textarea>
                    </form>
                </div>
            </div> : <div className="song-description">{this.props.song.description}</div>;


        var cancelButton = this.state.editable ? <i className="fa fa-reply song-action-buttons" onClick={this.handleCancel} aria-hidden="true"></i> : '';
        var editSubmitButton = <ActionButton editable={this.state.editable} current_user={this.props.current_user} handleEdit={this.handleEdit} />
         
        var deleteButton = <i className="fa fa-trash song-action-buttons" onClick={this.props.handleDelete} aria-hidden="true"></i>
        
        return (
            <div className="container">
                <div className="list-group-item ">

                    <div className="media">
                      <div className="media-left media-bottom">
                        <a href="#">
                          <img className="pull-left media-object singer-cover-listing" src="https://pbs.twimg.com/profile_images/1107421561/demo-hot-girl1_400x400.jpg" alt="..." />
                        </a>
                      
                        <div className="media-body pull-left">
                          <div id="playlist">
                                <div className="song-title" onClick={this.handlePlaySong}>
                                    <a href={"assets/" + this.props.song.filename} className="fa fa-play" aria-hidden="true"><span className="song-title-span">{title}</span></a>
                                </div>
                          </div>
                          <div className="singer-name-listing">{singer_name}</div>
                          {description}
                          {idField}
                        </div>

                        <div className="pull-right">
                            {cancelButton}                            
                            {editSubmitButton}
                            {deleteButton}
                        </div>
                      </div>
                    </div>
 
                     
                </div>
           
            </div>
        )
    }
});