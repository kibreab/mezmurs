var NewSinger= React.createClass({
    handleClick(e) {
        e.preventDefault();
        var singer_name    = this.refs.singer_name.value;
        var formData = new FormData();
        formData.append('singer[singer_name]', singer_name );
        formData.append('singer[user_id]', window.current_user.id );
        formData.append('singer[picture]', $('input[type=file]')[0].files[0]); 
        $.ajax({
            url: '/api/v1/singers',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: (singer) => {
                this.props.handleSubmit(singer);
            }
        });
    },

    render() {
        return (
                <div className="side-content-container">
                    <Title titleBig="Add new singers" titleSmall="አዲስ ዘማሪ ይጨምሩ" />
                    <div className="side-form-container">
                        <input ref='singer_name' placeholder='New singer' />
                        <div>Singer picture <input type="file" ref="img" multiple /></div>
                        <button className="mz-btns btns-small" onClick={this.handleClick}>Create singer +</button>
                    </div>             
                </div>

        )
    }
});
