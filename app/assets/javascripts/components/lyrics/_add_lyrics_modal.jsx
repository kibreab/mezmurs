var AddLyricsModal = React.createClass({  

  handleAmharicInputKeyUp() {
    this.props.handleAmharicInputKeyUp();
  },  
  render() {
    var singer_name = this.props.song.singer ? this.props.song.singer.singer_name : "Unknown singer"
    
    return(
    
      <div className="modal fade" id={"add-lyrics-modal-"+this.props.song.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            
            <ModalHeader />

            <div className="modal-body">
              <ModalSongHeader song={this.props.song} />

              <div className="member-qn">
                <span>Lyrics addiition in progress </span>
              </div>
              <AmharicKeyboard />
            </div>

          </div>
        </div>
      </div>
    )
  }
});