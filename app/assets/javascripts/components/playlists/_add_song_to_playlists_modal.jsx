var AddSongToPlaylistModal = React.createClass({
  
  handleChange(songInPlaylist, e) {
    var playlist_id = $(e.currentTarget).val();
    this.props.handleAddSongToPlaylist(this.props.song, playlist_id, songInPlaylist);        
  },

  render() {

    var playlists = null;
    if (this.props.current_user && this.props.current_user.playlists) {

      var sorted_playlists = _.sortBy(this.props.current_user.playlists, 'title');
      playlists = sorted_playlists.map((playlist) => {              
        var thisSongIsInThisPlaylistAlready = false;
        if (playlist.songs.length > 0) {
          theSongInPlaylist = playlist.songs.filter((song) => {
            return this.props.song.id == song.id;
          });
          if (theSongInPlaylist.length > 0) {
            thisSongIsInThisPlaylistAlready = true;
          }
        }


        var playlist_songs = playlist.songs.map((song) => { 
            return (                               
                <div className="playlist_song-item-holder" key={song.id+"p-modal"+playlist.id}>
                    <PlaylistSong song={song}                        
                        playlist={playlist}
                        handleAddSongToPlaylist={this.props.handleAddSongToPlaylist}
                        current_user={this.props.current_user} />
                </div>
            )
        });

        return (
            <div className="modal-playlist-item-container" key={playlist.id+"-modal-"}>
              <div className="pull-left">
                <InputSwitch inputID={"playlist-"+playlist.id+"-song-"+this.props.song.id} inputName="playlist" inputState={thisSongIsInThisPlaylistAlready} label={playlist.title} value={playlist.id} onChange={(e) => this.handleChange(thisSongIsInThisPlaylistAlready, e)} />
              </div>

              <div className="pull-right"><i className={"modal-toggle-open-icon " + (playlist.songs.length > 0 ? "fa fa-chevron-down" : "")} type="" data-toggle="collapse" data-target={"#songs-of-" + playlist.id } aria-expanded="false" aria-controls="collapseModalSongs"></i></div>
              <div className="pull-right modal-playlist-songs-counter">{playlist.songs.length ? playlist.songs.length : ""}</div>

              <div className="collapse" id={"songs-of-" + playlist.id}>
                  <div className="card card-block">
                      <div className="">
                          {playlist_songs}
                      </div>
                  </div>
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