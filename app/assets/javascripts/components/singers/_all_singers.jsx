var AllSingers = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    handleSubmit(singer){
        this.props.handleSingerSubmit(singer)
    },
    onUpdate(song) {
        this.props.onSingersUpdate(song);
    },

    render() {
        var singers= this.props.singers.map((singer) => {
            return (
                <div key={singer.id}>
                    <Singer singer={singer}
                          handleDelete={this.handleDelete.bind(this, singer.id)}
                          handleUpdate={this.onUpdate}
                          current_user={this.props.current_user} />
                </div>
            )
        });
        var new_singer = this.props.current_user ? <NewSinger handleSubmit={this.handleSubmit}/> : null;
        return(
            <div className="container songs-holder">
                {singers}
                {new_singer}
            </div>
        )
    }
});