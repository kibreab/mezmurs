var NewSong= React.createClass({
    handleClick() {
        var title    = this.refs.title.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/songs',
            type: 'POST',
            data: { song: { title: title, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },
    render() {
        return (
                <div>
                    {/*<input ref='title' placeholder='Enter the title of the item' />
                    <input ref='description' placeholder='Enter a description' />
                    <button onClick={this.handleClick}>Submit</button>*/}
                </div>

        )
    }
});
