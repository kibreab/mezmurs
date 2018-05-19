//import VirtualList from 'react-tiny-virtual-list';

var Allsongs = React.createClass({
  getInitialState() {
      return { 
        maxOneTimeFetch: 30,
        per_page: 30,
        page: 1
       }
  },
  componentDidMount() {
  },

  handleShowMore: function() {
    this.setState({per_page: this.state.per_page + this.state.maxOneTimeFetch, page: this.state.page}, function() {
      this._fetchMore();
    });
  },

  _fetchMore: function() {

    var data = {"per_page": this.state.per_page, "page": this.state.page}

    this.props.fetchSongs(data)

   //$.ajax({
   //  url: "api/v1/songs",
   //  dataType: "json",
   //  data: data,
   //  type: "GET",
   //  xhrFields: {
   //    withCredentials: true
   //  },
   //  success: function(result) {
   //    console.log (result);
   //    this.setState({
   //      songs: result,                    
   //    });
   //  }.bind(this),
   //  error: function(event, status, throwError) {
   //    console.log("I have error searching from library");
   //  }
   //});
  },


  handleDelete(id) {
      this.props.handleDelete(id);
  },

  onUpdate(song) {
      this.props.onUpdate(song);
  },

  updateCurrentSong(song){
      this.props.updateCurrentSong(song);      
  },
  updateCurrentUser(user){
      this.props.updateCurrentUser(user);
  },
  render() {

      var sorted_songs = this.state.songs ? this.state.songs : this.props.songs; //_.sortBy(this.props.songs, 'title');
      var songs= sorted_songs.map((song) => {
          return (
              <div key={song.id}>
                  <Song song={song}
                        handleDelete={this.handleDelete.bind(this, song.id)}
                        updateCurrentSong={this.updateCurrentSong}
                        updateCurrentUser={this.updateCurrentUser}
                        handleSingerSubmit={this.props.handleSingerSubmit}
                        singers={this.props.singers}
                        current_user={this.props.current_user}
                        currentSong={this.props.currentSong}
                        handleAddSongToPlaylist={this.props.handleAddSongToPlaylist}
                        handleSongLike={this.props.handleSongLike}
                        handleUpdate={this.onUpdate} />
              </div>
          )
      });

      return(
          <div>
              <div className="all-song-items-container" >
                {songs}
                <div className="pull-left" onClick={this.handleShowMore}>Show more</div>  
              </div>
          </div>
    );
  }
});