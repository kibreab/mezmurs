var NewPlaylist= React.createClass({
    handleClick() {
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
        return (
        <div>            
            <div className="side-form-container">
                <input ref='title' placeholder='New playlist' />   
                <button className="mz-btns btns-small" onClick={this.handleClick}>Create playlist +</button>
            </div>    
        </div>    

        )
    }
});
