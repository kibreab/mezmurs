var Song = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        if(this.state.editable) {
            var title = this.refs.title.value;
            var id = this.props.song.id;
            var description = this.refs.description.value;
            var song = {id: id , title: title , description: description};
            this.props.handleUpdate(song);

        }
        this.setState({ editable: !this.state.editable })
    },
    handleCancel() {
        this.setState({ editable: !this.state.editable })
    },    
    handleLoginKeyUp() {
        transcrire();
    },
    render() {
        //<input type='text' ref='description' defaultValue={this.props.song.description} />
        var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.song.title} /> : <h3>{this.props.song.title}</h3>;
        var description = this.state.editable ? 
            <div className="midcol">
                <div className="app">
                    <form name="conversion" method="get" action="" target="">
                        <textarea defaultValue={this.props.song.description} ref='description' id="saisie" onKeyUp={this.handleLoginKeyUp} className="editor"  placeholder="መጻፍ ይጀምሩ..."></textarea>
                    </form>
                </div>
            </div> : <p>{this.props.song.description}</p>;
        var cancelButton = this.state.editable ? <button onClick={this.handleCancel} >Cancel</button>: '';
        return (
            <div>
                <audio controls ref="audio">
                  <source src={"/assets/" + this.props.song.filename} type="audio/mpeg" />
                </audio>
                {title}
                <div>{this.props.song.singer}</div>
                <div>{"3"}</div>                
                {description}
                {cancelButton}
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
                <button onClick={this.props.handleDelete} >Delete</button>
            </div>
        )
    }
});