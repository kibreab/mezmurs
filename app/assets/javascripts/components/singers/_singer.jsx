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
        var singer_picture = this.props.singer.picture 
        return(
            <div className=" side-listing-container">                
                <div className="pull-left" id={user_created_singer ? "highlight" : ""}>{this.props.singer.singer_name}</div>
                <div className="pull-right">
                    {deleteButton}
                    <img className="small-singer-cover-listing" src={singer_picture} alt="..." />
                </div>
            </div>
        )
    }
});