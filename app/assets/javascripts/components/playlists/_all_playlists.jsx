var AllPlaylists = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    handleSubmit(singer){
        this.props.handlePlaylistSubmit(singer)
    },
    onUpdate(song) {
        //this.props.onSingersUpdate(song);
    },

    render() {

        var playlists= this.props.user_playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <Playlist playlist={playlist}
                          handleDelete={this.handleDelete.bind(this, playlist.id)}
                          handleUpdate={this.onUpdate}
                          current_user={this.props.current_user} />
                </div>
            )
        });



        return(
            <div className="">
                <Title titleBig="Your Playlists" titleSmall="የመረጥዋቸው መዝሙሮች" />            
                <div className="side-content-container">                    
                    {playlists}
                    < NewPlaylist handleSubmit={this.handleSubmit} current_user={this.props.current_user} />                    
                </div>
            </div>
        )
    }
});