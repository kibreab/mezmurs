var NewSinger= React.createClass({
    handleClick(e) {
        e.preventDefault();
        var singer_name    = this.refs.singer_name.value;
        var formData = new FormData();
        formData.append('singer[singer_name]', singer_name );
        formData.append('singer[user_id]', window.current_user.id );
        //if ($("#coverPictureUpload")[0])
        //  if ($("#coverPictureUpload")[0].files[0])
        //    formData.append('singer[picture]', $("#coverPictureUpload")[0].files[0]);

        //formData.append('singer[picture]', $('input[type=file]')[0].files[0]); 
        
        console.log(' -*- -*-  **  formData  **  -*- -*- ')
        console.log(formData)
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
                <div>
                    <input ref='singer_name' placeholder='Enter the singer name' />
                    Select images: <input id="coverPictureUpload" type="file" ref="img" multiple />

                    <button onClick={this.handleClick}>Create singer</button>
                </div>

        )
    }
});
