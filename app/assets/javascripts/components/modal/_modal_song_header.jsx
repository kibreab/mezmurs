
var ModalSongHeader = React.createClass({
  render() {
    var singer_name = this.props.song.singer ? this.props.song.singer.singer_name : "Unknown singer"
    var singer_picture = this.props.song.singer && this.props.song.singer.picture ? this.props.song.singer.picture : "/assets/original/missing.png" 
    return(
    	<div>
        <div className={"singer-bg"} style ={ { backgroundImage: "url(" + singer_picture +")"} } />
        <div className="welcome-text">{this.props.song.title}</div>
        <div className="site-name">{singer_name} </div>
    	</div>

    )
  }
});


