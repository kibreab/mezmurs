var Body = React.createClass({
    getInitialState() {
        return { songs: [] }
    },


    componentDidMount() {
        $.getJSON('/api/v1/songs.json', (response) => { this.setState({ songs: response }) });
    },



    handleSubmit(song) {
        var newState = this.state.songs.concat(song);
        this.setState({ songs: newState })
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
        )},

    updatesongs(song) {
        var songs = this.state.songs.filter((i) => { return i.id != song.id });
        songs.push(song);

        this.setState({songs: songs });
    },


    render() {
        return (
            <div>
                <NewSong handleSubmit={this.handleSubmit}/>
                <Allsongs  songs={this.state.songs}  handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>             
            </div>
        )
    }
});