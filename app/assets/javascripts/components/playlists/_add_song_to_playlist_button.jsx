var AddSongToPlaylistButton = React.createClass({

    render() {
      
      var targetId = this.props.current_user ? "#playlistModal-"+this.props.song.id : "#logiModal"      
      return(    

        <div className="pull-right">
            <i className={this.props.nowPlaying ? "fa fa-plus action-icon-active" : "fa fa-plus action-icon"} data-toggle="modal" data-target={targetId}></i>
        </div>           
      )
    }
  }
)