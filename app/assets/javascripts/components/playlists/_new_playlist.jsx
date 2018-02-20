var NewPlaylist= React.createClass({
    handleClick() {
        console.log(' -*- -*-  **  clicked  **  -*- -*- ')

        var title    = this.refs.title.value;        
        $.ajax({
            url: '/api/v1/playlists',
            type: 'POST',
            data: { playlist: { title: title, user_id: this.props.current_user.id } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });

    },
    render() {
        var button = <ActionButton  
                        current_user={this.props.current_user}
                        updateCurrentUser={this.updateCurrentUser}
                        classList={"main-side-button"}
                        buttonText={"Create a playlist"}
                        handleAction={this.handleClick} />

        return (
            <div>
                <div className="pull-left right-navigation">    
                    <Title titleBig="Create New Playlists" titleSmall="የመረጥዋቸው መዝሙሮች" />
                    <div className="side-form-container">
                        <div className="form-label">
                            New playlist
                        </div>
                        <div className="side-input-container">
                            <input ref='title'  />
                        </div>
                        <div>
                            {button}
                        </div>
                        
                    </div>    
                </div>
                
            </div>


        )
    }
});
