var AddSongToPlaylistModal = React.createClass({
  
  handleChange(e) {
    var playlist_id = $(e.currentTarget).val();
    this.props.handleAddSongToPlaylist(this.props.song.id, playlist_id);        
  },

  render() {

    var playlists = null;
    if (this.props.current_user && this.props.current_user.playlists) {

      
      playlists = this.props.current_user.playlists.map((playlist) => {              
        var thisSongIsInThisPlaylistAlready = false;
        if (playlist.songs.length > 0) {
          theSongInPlaylist = playlist.songs.filter((song) => {
            return this.props.song.id == song.id;
          });
          if (theSongInPlaylist.length > 0) {
            thisSongIsInThisPlaylistAlready = true;
          }
        }
        return (
            <div className="modal-playlist-item-container" key={playlist.id}>
              <div className="">
                <InputSwitch inputID={"playlist-"+playlist.id+"-song-"+this.props.song.id} inputName="playlist" inputState={thisSongIsInThisPlaylistAlready} label={playlist.title} value={playlist.id} onChange={this.handleChange} />                  
              </div>
            </div>
        )
      });
    }

    return(
    
      <div className="modal fade" id={"playlistModal-"+this.props.song.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            
            <div className="modal-header">              
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="fa fa-times"aria-hidden="true"></span>
              </button>
            </div>

            <div className="modal-body">
              <div className="welcome-text">{this.props.song.title}</div>
              <div className="site-name">M E Z M U R S . C O M </div>

              <div className="member-qn">
                <span>{"Your playlists "}</span>
                <span className="modal-playlists-counter">{this.props.current_user ? this.props.current_user.playlists.length : ""}</span>
              </div>
              
              <div className="modal-all-playlists-container">
                {playlists}                
              </div>              
            </div>

          </div>
        </div>
      </div>
    )
  }
});