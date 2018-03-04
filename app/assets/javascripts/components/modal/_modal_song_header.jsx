
var ModalSongHeader = React.createClass({
  render() {
    var singer_name = this.props.song.singer ? this.props.song.singer.singer_name : "Unknown singer"
    
    return(
    	<div>
        <div className={"singer-bg"} style ={ { backgroundImage: "url(" + this.props.song.singer.picture +")"} } />
        <div className="welcome-text">{this.props.song.title}</div>
        <div className="site-name">{singer_name} </div>
    	</div>

    )
  }
});


