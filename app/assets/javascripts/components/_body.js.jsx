var Body = React.createClass({
    getInitialState() {
        return { 
            songs: [],
            singers: []
         }
    },


    componentDidMount() {
        $.getJSON('/api/v1/songs.json', (response) => { this.setState({ songs: response }) });
        $.getJSON('/api/v1/singers.json', (response) => { this.setState({ singers: response }) });
    },

    handleSubmit(song) {
        var newState = this.state.songs.concat(song);
        this.setState({ songs: newState })
    },

    handleSingerSubmit(singer) {
        var newState = this.state.singers.concat(singer);
        this.setState({ singers: newState })
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

    removeSingerClient(id) {
        var newsingers = this.state.singers.filter((singer) => {
            return singer.id != id;
        });

        this.setState({ singers: newsingers });
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

    handleUpdate(song) {
        $.ajax({
                url: `/api/v1/songs/${song.id}`,
                type: 'PUT',
                data: { song: song },
                success: () => {
                    this.updatesongs(song);

                }
            }
        )
    },

    handleSingersUpdate(singer) {
        $.ajax({
                url: `/api/v1/singers/${singer.id}`,
                type: 'PUT',
                data: { singerg: singer },
                success: () => {
                    this.updatesingers(singer);

                }
            }
        )
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
            <div className="container">
                <NewSong handleSubmit={this.handleSubmit}/>
                
                <div className="pull-left left-navigation">
                    <User updateCurrentUser={this.updateCurrentUser} />
                </div>

                <div className="pull-left mid-navigation">
                    <Allsongs 
                        songs={this.state.songs}  
                        handleDelete={this.handleDelete} 
                        onUpdate={this.handleUpdate} 
                        current_user={this.props.current_user} />    
                </div>

                <div className="pull-left right-navigation">
                    <AllSingers 
                        singers={this.state.singers} 
                        handleSingerSubmit={this.handleSingerSubmit} 
                        handleDelete={this.handleSingerDelete} 
                        onUpdate={this.handleSingerUpdate} 
                        />
                </div>

            </div>
        )
    }
});