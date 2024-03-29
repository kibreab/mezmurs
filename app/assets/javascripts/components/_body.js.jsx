var Body = React.createClass({
    getInitialState() {
        return { 
            songs: [],
            singers: [],
            searchValue: "",
            searchSingerValue: "",
            currentSong: this.props.currentSong ? JSON.parse(this.props.currentSong) : null
         }
    },

    componentDidMount() {
        window.missing_picture_url = "";//"/assets/original/missing.png";
        var totalWidth =  $('body').width();
        oneTimeFetch = totalWidth/120;
        this.fetchSongs({"per_page": oneTimeFetch, "page": 1});
        $.getJSON('/api/v1/singers.json', (response) => { this.setState({ singers: response }) });
        this.chosenSelectInit();
    },
    fetchSongs(data) {
        if (this.state.searchValue) {
            data["search_value"] = this.state.searchValue;
        }
        if (this.state.searchSingerValue) {
            data["singer_id"] = this.state.searchSingerValue;
        }        
        $.getJSON('/api/v1/songs.json', data,  (response) => { this.setState({ songs: response }) });
    },
    chosenSelectInit: function() {
        $('.chosen-select').chosen({
          allow_single_deselect: true,
          no_results_text: 'No results matched',
          width: '100%'
        });
      
    },
    
    setSearchValue(value) {this.setState({ searchValue: value })}, 
    setSearchSingerValue(value) {this.setState({ searchSingerValue: value })}, 
    
    handleSubmit(song) {
        var newState = this.state.songs.concat(song);
        this.setState({ songs: newState })
    },

    handleSingerSubmit(singer) {
        var newState = this.state.singers.concat(singer);
        this.setState({ singers: newState })
    },
    handlePlaylistSubmit(playlist) {
        var user = this.props.current_user;
        var newPlayists = user["playlists"].concat(playlist);
        user.playlists = newPlayists;
        this.props.updateCurrentUser(user);        

    },

    handleAddSongToPlaylist(song, playlist_id, removeIt= false) {

        //var song = this.state.songs.filter((i) => { return i.id == song_id });         
        //song = song[0];
        var user = this.props.current_user;
        var playlists = user.playlists;
        var this_playlist = playlists.filter((i) => { return i.id == playlist_id });  
        this_playlist = this_playlist[0];                                         
        var newplaylists = _.without(playlists, this_playlist);  
        if (removeIt) {
            //Removing
            // wrong but for the route to think that. change if u can
            var id = 1;
            $.ajax({
                url: `/api/v1/playlist_songs/${id}`,
                type: 'DELETE',
                data: { song_id: song.id, playlist_id: playlist_id },
                success: (result) => {                    
                    //// remove the old playlist                
                    this_playlist.songs = _.without(this_playlist.songs, song);
                    user["playlists"] = newplaylists.concat(this_playlist);
                    this.props.updateCurrentUser(user);
                }
            });
        }else{
            // Adding song to playlist
            $.ajax({
                url: '/api/v1/playlist_songs',
                type: 'POST',
                data: { playlist_song: { song_id: song.id, playlist_id: playlist_id } },
                success: (result) => {
                  
                    this_playlist.songs = this_playlist.songs.concat(song);
                    user["playlists"] = newplaylists.concat(this_playlist);
                    this.props.updateCurrentUser(user);
                }
            });
        }
    },

    handleSingerDelete(id) {
        $.ajax({
            url: `/api/v1/singers/${id}`,
            type: 'DELETE',
            success:() => {
               this.removeSingerClient(id);
            }
        });
    },

    handlePlaylistDelete(id) {
        $.ajax({
            url: `/api/v1/playlists/${id}`,
            type: 'DELETE',
            success:() => {
               this.removePlaylistsClient(id);
            }
        });
    },

    removeSingerClient(id) {
        var newsingers = this.state.singers.filter((singer) => {
            return singer.id != id;
        });

        this.setState({ singers: newsingers });
    },

    removePlaylistsClient(id) {
        var newplaylists = this.props.current_user.playlists.filter((playlist) => {
            return playlist.id != id;
        });
        var user = this.props.current_user;
        user["playlists"] = newplaylists;
        this.props.updateCurrentUser(user);
    },

    removeLikeClient(id, song_id) {

        var newUserLikes = this.props.current_user.user_likes.filter((like) => {
            return like.id != id;
        });

        // find the song and add this like to it.
        var song = this.state.songs.filter((i) => { return i.id == song_id });
        song = song[0];

        var newSongLikes = song.song_likes.filter((like) => {
            return like.id != id;
        }); 
        
        song.song_likes = newSongLikes
        this.updatesongs(song);
        
        var user = this.props.current_user;
        user.user_likes = newUserLikes;
        this.props.updateCurrentUser(user); 
    },

    handleDelete(id) {
        $.ajax({
            url: `/api/v1/songs/${id}`,
            type: 'DELETE',
            success:() => {
               this.removesongClient(id);
            }
        });
    },

    removesongClient(id) {
        var newsongs = this.state.songs.filter((song) => {
            return song.id != id;
        });

        this.setState({ songs: newsongs });
    },

    handleSongUpdate(song) {
        $.ajax({
                url: `/api/v1/songs/${song.id}`,
                type: 'PUT',
                data: { song: song },
                success: (song) => {
                    this.updatesongs(song);
                    if (this.state.currentSong && this.state.currentSong.id == song.id) {
                        this.updateCurrentSong(song);
                    }
                }
            }
        )
    },
    
    updateCurrentSong(song){
        this.setState({ currentSong: song });
    },

    handleSingersUpdate(singer) {
        $.ajax({
                url: `/api/v1/singers/${singer.id}`,
                type: 'PUT',
                data: { singer: singer },
                success: () => {
                    this.updatesingers(singer);

                }
            }
        )
    },

    handleSongLike(song_id) {

        var user_already_liked_this_song = this.props.current_user.user_likes.filter((like) => { return like.song_id == song_id;});

        if (user_already_liked_this_song.length > 0){
            like_id = user_already_liked_this_song[0].id
            $.ajax({
                url: `/api/v1/likes/${like_id}`,
                type: 'DELETE',
                success:() => {
                   this.removeLikeClient(like_id, song_id);
                }
            });

        }else{

            $.ajax({
                url: '/api/v1/likes',
                type: 'POST',
                data: { like: { song_id: song_id, user_id: this.props.current_user.id } },
                success: (newLike) => {
                    // find the song and add this like to it.
                    var song = this.state.songs.filter((i) => { return i.id == song_id });
                    song = song[0];
                    var array = song.song_likes;
                    array = array.concat(newLike);
                    song.song_likes = array;
                    this.updatesongs(song);

                    // update also the user_likes
                    var user = this.props.current_user;
                    var arrayofLikedSongs = user.user_likes;
                    arrayofLikedSongs = arrayofLikedSongs.concat(newLike);
                    user.user_likes = arrayofLikedSongs;
                    this.props.updateCurrentUser(user);
                }
            }); 

        }
    },

    updatesongs(song) {
        var songs = this.state.songs.filter((i) => { return i.id != song.id });
        songs.push(song);

        this.setState({songs: songs });
    },
    updateCurrentUser(user) {
        this.props.updateCurrentUser(user);
    },



    render() {
        return (
            <div className="">
                <NewSong handleSubmit={this.handleSubmit}/>

                <div className="major-navigation first-layer">

                    <SearchArea singers={this.state.singers} setSearchValue={this.setSearchValue} setSearchSingerValue={this.setSearchSingerValue} fetchSongs={this.fetchSongs} />
                    <User current_user={this.props.current_user} updateCurrentUser={this.updateCurrentUser} />
  
                </div>

                <div className="major-navigation second-layer">

                    <AllPlaylists 
                        handlePlaylistSubmit={this.handlePlaylistSubmit}
                        handleDelete={this.handlePlaylistDelete}
                        handleAddSongToPlaylist={this.handleAddSongToPlaylist}
                        current_user={this.props.current_user} /> 

                    <NewPlaylist updateCurrentUser={this.updateCurrentUser} handleSubmit={this.handlePlaylistSubmit} current_user={this.props.current_user} />

                </div>

                <div className="major-navigation third-layer">
                    <SortArea current_user={this.props.current_user} />                                                         
                </div>

                <div className="major-navigation">
                    <Allsongs 
                        songs={this.state.songs}
                        fetchSongs={this.fetchSongs}
                        handleSingerSubmit={this.handleSingerSubmit}
                        singers={this.state.singers}
                        handleAddSongToPlaylist={this.handleAddSongToPlaylist}
                        handleDelete={this.handleDelete}
                        handleSongLike={this.handleSongLike}
                        onUpdate={this.handleSongUpdate}
                        updateCurrentSong={this.updateCurrentSong}
                        updateCurrentUser={this.updateCurrentUser}
                        currentSong={this.state.currentSong}
                        current_user={this.props.current_user} />  

                </div>

                <div className="major-navigation">
                    <AudioHeader 
                        singers={this.state.singers} 
                        onUpdate={this.handleSongUpdate}
                        updateCurrentUser={this.updateCurrentUser}
                        currentSong={this.state.currentSong} 
                        current_user={this.props.current_user}
                        />
                </div>


                <LoginModal updateCurrentUser={this.updateCurrentUser} current_user={this.props.current_user} />

                {/* <div className="pull-left right-navigation">
                    <AllSingers 
                        singers={this.state.singers} 
                        handleSingerSubmit={this.handleSingerSubmit} 
                        handleDelete={this.handleSingerDelete} 
                        onUpdate={this.handleSingerUpdate}
                        current_user={this.props.current_user}
                        />
                </div>*/}

            </div>
        )
    }
});