var NewSinger= React.createClass({
    handleClick() {
        var singer_name    = this.refs.singer_name.value;
        
        $.ajax({
            url: '/api/v1/singers',
            type: 'POST',
            data: { singer: { singer_name: singer_name } },
            success: (singer) => {
                this.props.handleSubmit(singer);
            }
        });
    },

    render() {
        return (
                <div>
                    <input ref='singer_name' placeholder='Enter the singer name' />                    
                    <button onClick={this.handleClick}>Submit</button>
                </div>

        )
    }
});
