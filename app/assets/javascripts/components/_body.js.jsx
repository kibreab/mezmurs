var Body = React.createClass({
    getInitialState() {
        return { 
            songs: [],
            singers: [],
            currentSong: null,
            user_playlists: []
         }
    },

    componentDidMount() {
        $.getJSON('/api/v1/songs.json', (response) => { this.setState({ songs: response }) });
        $.getJSON('/api/v1/singers.json', (response) => { this.setState({ singers: response }) });
        //$.getJSON('/api/v1/playlists.json', (response) => { this.setState({ user_playlists: response }) });
    },

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


                

                <div className="pull-left mid-navigation">

                    <SearchArea />
                    <AudioHeader 
                        singers={this.state.singers} 
                        onUpdate={this.handleSongUpdate}
                        updateCurrentUser={this.updateCurrentUser}
                        currentSong={this.state.currentSong} 
                        current_user={this.props.current_user}
                        />

                    <SortArea current_user={this.props.current_user} />
  
                </div>

                <div className="pull-left right-navigation">
                    <User current_user={this.props.current_user} updateCurrentUser={this.updateCurrentUser} />
                    <AllPlaylists 
                        user_playlists={this.state.user_playlists} 
                        handlePlaylistSubmit={this.handlePlaylistSubmit}
                        handleDelete={this.handlePlaylistDelete}
                        current_user={this.props.current_user} />                      
                </div>

                <Allsongs 
                    songs={this.state.songs}
                    singers={this.state.singers}
                    handleDelete={this.handleDelete}
                    handleSongLike={this.handleSongLike}
                    onUpdate={this.handleSongUpdate}
                    updateCurrentSong={this.updateCurrentSong}
                    updateCurrentUser={this.updateCurrentUser}
                    currentSong={this.state.currentSong}
                    current_user={this.props.current_user} />  

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