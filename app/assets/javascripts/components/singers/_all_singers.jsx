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
                          handleUpdate={this.onUpdate}/>
                </div>
            )
        });        
        return(
            <div className="container songs-holder">
                <div className="navigation-header"></div>
                {singers}
                <NewSinger handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
});