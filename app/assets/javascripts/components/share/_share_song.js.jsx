//function(d, s, id) {
//  var js, fjs = d.getElementsByTagName(s)[0];
//  if (d.getElementById(id)) return;
//  js = d.createElement(s); js.id = id;
//  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
//  fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));

var ShareSong = React.createClass({
    render() {
        var targetId = "#modalShareSong-"+this.props.song.id
        return(
            <div className=""> 
                <i className={this.props.nowPlaying ? "fa fa-share-alt action-icon-active" : "fa fa-share-alt action-icon"} data-toggle="modal" data-target={targetId}></i>                
                    
                <ShareSongContent song={this.props.song} />

            </div>

        )
    }
});

var ShareSongContent = React.createClass({  
  
  render() {
    var base_url = "mezmurs.herokuapp.com"
    var songUrl = base_url+"/api/v1/songs/"+this.props.song.id;
    return(
    
      <div className="modal fade" id={"modalShareSong-"+this.props.song.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <span>Share this song to social media </span>
              </div>
              
              <div className="modal-media-icons-container">
                <div className="modal-fb-container pull-left">


                    <div data-href={songUrl} data-layout="button_count" data-size="large" data-mobile-iframe="true">
                        <a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F"+songUrl+"%2F&amp;src=sdkpreparse"} className="fb-xfbml-parse-ignore">                            
                            <div className="share-media-icon fa fa-facebook-square"></div>
                        </a>
                    </div>

                </div>
                <div className="modal-twitter-container pull-left">
                    <a target="_blank" href={"http://www.twitter.com/intent/tweet?url="+songUrl}>
                        <div className="share-media-icon fa fa-twitter"></div>                                        
                    </a>

                </div>

              </div>              
            </div>

          </div>
        </div>
      </div>
    )
  }
});