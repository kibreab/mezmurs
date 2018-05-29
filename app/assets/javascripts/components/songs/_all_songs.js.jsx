var Allsongs = React.createClass({
  getInitialState() {
      return { 
        maxOneTimeFetch: 0,        
        page: 1
       }
  },
  componentDidMount() {
    var per_page = this.node.clientWidth/96;
    this.setState({
      per_page: per_page
    });       
  },

  handleShowMore: function() {
    this.setState({per_page: this.state.per_page + this.state.maxOneTimeFetch, page: this.state.page + 1}, function() {
      this._fetchMore();
    });
  },
  handlePrevious: function() {
    this.setState({page: this.state.page - 1}, function() {
      this._fetchMore();
    });
  },  

  _fetchMore: function() {
    var data = {"per_page": this.state.per_page, "page": this.state.page}
    this.props.fetchSongs(data)
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
      var sortBy = "title"
      var s_songs = this.state.songs ? this.state.songs : this.props.songs; //;
      var songs= _.sortBy(s_songs, sortBy).map((song) => {
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
              <div className="pull-left previous-items" onClick={this.handlePrevious}><span className="fa fa-angle-left"></span></div>  
              <div className="all-song-items-container pull-left" ref={node => (this.node = node)}> 
                {songs}                
              </div>
              <div className="pull-left next-items" onClick={this.handleShowMore}><span className="fa fa-angle-right"></span></div>                
          </div>
    );
  }
});