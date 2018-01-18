var Item = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        if(this.state.editable) {
            var name = this.refs.name.value;
            var id = this.props.item.id;
            var description = this.refs.description.value;
            var item = {id: id , name: name , description: description};
            this.props.handleUpdate(item);

        }
        this.setState({ editable: !this.state.editable })
    },
    handleCancel() {
        this.setState({ editable: !this.state.editable })
    },    
    handleLoginKeyUp(item) {
        transcrire();
    },
    render() {
        //<input type='text' ref='description' defaultValue={this.props.item.description} />
        var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
        var description = this.state.editable ?  <div className="midcol">
                <div className="app">
                    <form name="conversion" method="get" action="" target="">
                        <textarea defaultValue={this.props.item.description} ref='description' id="saisie" onKeyUp={this.handleLoginKeyUp} className="editor"  placeholder="መጻፍ ይጀምሩ..."></textarea>
                    </form>

                </div>
            </div> : <p>{this.props.item.description}</p>;
        var cancelButton = this.state.editable ? <button onClick={this.handleCancel} >Cancel</button>: '';
        return (
            <div>
                <audio controls ref="audio">
                  <source src="/assets/Nebse Hoy - Track 1.mp3" type="audio/mpeg" />
                </audio>
                {name}
                {description}
                {cancelButton}
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
                <button onClick={this.props.handleDelete} >Delete</button>
            </div>
        )
    }
});