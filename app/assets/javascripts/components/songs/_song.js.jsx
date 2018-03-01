var Song = React.createClass({
    getInitialState() {
        return {
            editable: false
        }
    },
    componentDidMount(){        
      //this.audioPlayer();
      var currentSong = 0;
      if ($("#audioPlayer")[0]) {
        $("#audioPlayer")[0].addEventListener("ended", function(e){
           currentSong++;
           if(currentSong == $("#playlist div").length)
               currentSong = 0;
           //$("#playlist div:eq("+currentSong+")").addClass("current-song").addClass("highlighted");
           $("#audioPlayer")[0].src = $("#playlist div a")[currentSong].href;
           //$("#playlist div").addClass("active")
           $("#audioPlayer")[0].play();
        });
      }
      this.popOver();   

    },
    
    popOver(){
      /// Popover
      $('.popover-dismiss').popover({
          trigger: 'focus'
      })
      
      $("[data-toggle=popover]").popover({
          html : true,
          content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
          },
          title: function() {
            var title = $(this).attr("data-popover-content");
            return $(title).children(".popover-heading").html();
          }
      });
      //$( "#" + this.props.song.id + "-add-song-to-playlists" ).click(function() {
      //});
        
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
        var src = "assets/all_old_emezmurs/" + this.props.song.filename;
        $("#audioPlayer")[0].src = src;
        $("#audioPlayer")[0].play();
        $(".song-title").find("a").removeClass("active");
        $(e.currentTarget).find("a").addClass("active");
        this.updateCurrentSong(this.props.song);
    },

    updateCurrentSong(song){
        this.props.updateCurrentSong(song);
    },
    updateCurrentUser(user){
        this.props.updateCurrentUser(user);
    },
    handleEdit() {
        if(this.state.editable) {
            var title = this.refs.title.value;
            var id = this.refs.id.value;
            var lyrics = this.refs.lyrics.value;
            var singer = $("#singer-select").val(); //this.refs.singer.value;
            var song = {id: id , title: title , lyrics: lyrics , singer_id: singer};
            this.props.handleUpdate(song);

        }
        this.setState({ editable: !this.state.editable })
    },
    handleCancel() {
        this.setState({ editable: !this.state.editable })
    },
    handlePlaylistDelete(){

    },
    handleAmharicInputKeyUp() {
        transcrire();
    },
    handleAddSongToPlaylists(e) {
    },
    handleSongLike() {
        this.props.handleSongLike(this.props.song.id)
    },    
    render() {
        var self = this;
        var singer_name = this.props.song.singer ? this.props.song.singer.singer_name : ""
        var singer_picture = this.props.song.singer ? this.props.song.singer.picture : "/assets/original/missing.png" 
        var nowPlaying = (this.props.currentSong && this.props.currentSong.id == this.props.song.id);
        //<input type='text' ref='lyrics' defaultValue={this.props.song.lyrics} />
        
        var idField = <input type='hidden' ref='id' defaultValue={this.props.song.id} />;
       

        var lyricsButtonField =  
            <div>
                <button className="mz-btns btns-small" type="button" data-toggle="collapse" data-target={"#lyrics-of-" + this.props.song.id} aria-expanded="false" aria-controls="collapseExample">
                    <span className="fa fa-eye" />   <span>See lyrics</span>
                </button>
                <div className="collapse" id={"lyrics-of-"+this.props.song.id}>
                    <div className="card card-block">
                        <div className="song-lyrics" dangerouslySetInnerHTML={{__html: this.props.song.lyrics}} />
                    </div>
                </div>
            </div>

        var addLyrics = <button className="mz-btns btns-small" type="button" >
                            <span>Add lyrics</span>  
                            <span className="fa fa-plus" />
                        </button>

        var lyrics = this.state.editable ? 
            <div className="midcol">
                <div className="app">
                    <form name="conversion" method="get" action="" target="">
                        <textarea defaultValue={this.props.song.lyrics} ref='lyrics' id="saisie" onKeyUp={this.handleAmharicInputKeyUp} className="editor"  placeholder="መጻፍ ይጀምሩ..."></textarea>
                    </form>
                </div>
            </div> : 

            (
                this.props.song.lyrics ? lyricsButtonField : addLyrics 
                )
        
        var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.song.title} /> : this.props.song.title;
        var singers = this.state.editable ? <SingersSelectList song={this.props.song} singers={this.props.singers} />          
            : <div className="singer-name-listing">{singer_name}</div>;

        


        var cancelButton = this.state.editable ? <i className="fa fa-reply song-action-buttons" onClick={this.handleCancel} aria-hidden="true"></i> : '';
        var editSubmitButton = <ActionButton  
                                    current_user={this.props.current_user}
                                    updateCurrentUser={this.updateCurrentUser}
                                    classList={"fa edit-song-icon " + (this.state.editable ? " fa-paper-plane" : " fa-pencil-square-o")}
                                    handleAction={this.handleEdit} />

        var user_liked_this_song = false;
        if (this.props.current_user && (this.props.current_user.user_likes && this.props.song.song_likes)) {
            user_liked_this_song = this.props.current_user.user_likes.filter((like) => { return like.song_id == this.props.song.id;});
            user_liked_this_song = user_liked_this_song.length > 0;
        }
        
        var likesCount = this.props.song.song_likes.length;
        var likeButton = <ActionButton
                            current_user={this.props.current_user}
                            classList={"fa fa-heart " + ( (user_liked_this_song && nowPlaying) ? " now-playing-highlighted " : ((user_liked_this_song) ? " highlighted " : "")) + (nowPlaying ? "action-icon-active" : "action-icon")}
                            handleAction={this.handleSongLike} />

         
        var deleteButton = <i className="fa fa-trash song-action-buttons" onClick={this.props.handleDelete} aria-hidden="true"></i>


        return (
            <div className={"song-holder pull-left " + (nowPlaying ? "active-song-holder " : "")}>

                <div className="song-item">
                    <div className="singer-bg" style ={ { backgroundImage: "url("+""+")" } }>
                        <div id="playlist" className="play-button-area">
                            <div className={this.state.editable ? "play-button-editable" : (nowPlaying ? "play-button-active" : "play-button")} onClick={this.handlePlaySong}>  
                                <span className={this.state.editable ? (nowPlaying ? "p-button-editable fa fa-music " : "p-button-editable fa fa-play " ) : (nowPlaying ? "p-button-active fa fa-music" : "fa fa-play p-button")}></span>
                            </div>
                        </div>
                    </div>

                    <div className="song-content-area">
                        

                        <div className="song-title-container">
                            {title}
                        </div>
                        <div className="song-singer-container">
                            {singers}
                        </div>

                        <div className="see-lyrics-area">
                            <div className="lyrics-button">
                                {lyrics}    
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
               
                <div className={nowPlaying ? "song-activity-button-area-active" : "song-activity-button-area"}>
                    
                    <div className="pull-left">
                        <ShareSong song={this.props.song} nowPlaying={nowPlaying} />
                    </div>

                    <div className="pull-left">
                        <div>{likeButton} <span className={nowPlaying ? "likes-count-active" : "likes-count"}>{likesCount}</span></div>
                    </div>
                                                               
                    <AddSongToPlaylistButton song={this.props.song} nowPlaying={nowPlaying} current_user={this.props.current_user} />

                    <div className="edit-song-area">
                        <div className="edit-button">
                            {editSubmitButton}
                            {cancelButton}
                        </div>                    
                    </div>

                </div>

                <AddSongToPlaylistModal
                    nowPlaying={nowPlaying}
                    song={this.props.song}
                    handleAddSongToPlaylist={this.props.handleAddSongToPlaylist}
                    current_user={this.props.current_user} />
           
            </div>
        )
    }
});