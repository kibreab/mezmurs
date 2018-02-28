var AddSongToPlaylistButton = React.createClass({

    render() {
      return(    
        <div className="pull-right">
            <i className={this.props.nowPlaying ? "fa fa-plus action-icon-active" : "fa fa-plus action-icon"} data-toggle="modal" data-target="#playlistModal"></i>
        </div>           
      )
    }
  }
)