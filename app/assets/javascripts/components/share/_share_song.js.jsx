var ShareSong = React.createClass({
    getInitialState() {return {editable: false}},

    render() {
        return(
            <div className=""> 
                <i className={this.props.nowPlaying ? "fa fa-share-alt action-icon-active" : "fa fa-share-alt action-icon"} tabIndex="0" data-toggle="popover" data-popover-content={"#share-"+this.props.song.id} data-placement="right"></i>
                    
                <ShareSongContent song={this.props.song} />

            </div>



        )
    }
});

var ShareSongContent = React.createClass({
    
    handleShare(){
    	console.log(' -*- -*-  **  handle Share  **  -*- -*- ')
    },
    render() {
        return(
            <div id={"share-"+ this.props.song.id} className="hidden">
                <div className="popover-heading">SHARE THIS SONG TO..</div>
                  <div className="popover-body">
                      Share share
                      <button id={this.props.song.id + "-add-song-to-playlists"} className="mz-btns btns-small" onClick={self.handleShare} >Add </button>
                  </div>
            </div> 



        )
    }
});