var Singer = React.createClass({
    getInitialState() {return {editable: false}},    
    
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(singer) {
        this.props.onUpdate(singer);
    },
    render() {
        var user_created_singer = this.props.current_user ? (this.props.singer.user_id == this.props.current_user.id) : false;
        var deleteButton = user_created_singer ? <i className="fa fa-trash song-action-buttons" onClick={this.handleDelete} aria-hidden="true"></i> : ""
        
        return(
            <div className="singer-container">                
                <span className={user_created_singer ? "highlight" : ""}>{this.props.singer.singer_name}</span>
                {deleteButton}
            </div>

        )
    }
});