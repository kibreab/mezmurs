var AddSongToPlaylistModal = React.createClass({

    render() {  

      var playlists = null;
      if (this.props.current_user && this.props.current_user.playlists) {

          playlists = this.props.current_user.playlists.map((playlist) => {
              return (
                  <div key={playlist.id}>                      
                    {playlist.title}
                  </div>
              )
          });
      }

      return(
      
        <div className="modal fade" id="playlistModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                <div className="member-qn">{"Your playlists"}</div>
                {playlists}

              </div>            
            </div>
          </div>
        </div>
      )
    }
});