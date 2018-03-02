var AddLyricsModal = React.createClass({  

  handleAmharicInputKeyUp() {
    this.props.handleAmharicInputKeyUp();
  },  
  render() {
    
    
    return(
    
      <div className="modal fade" id={"add-lyrics-modal-"+this.props.song.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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