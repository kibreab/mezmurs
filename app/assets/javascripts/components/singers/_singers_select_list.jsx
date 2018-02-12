var SingersSelectList = React.createClass({    
    getInitialState() {
        return {      
            singer_id: this.props.song.singer ? this.props.song.singer.id : ""
        }
    },    
    handleSingerChange(event) {
        this.setState({ singer_id: event.target.value })    
    },
    render() {
		var singersSelectList = this.props.singers.map(function (item, key) {
          return (
            <option value={item.id} key={key}>
              { item.singer_name }
            </option>
          );
        });

        return(
            <select id="singer-select" value={this.state ? this.state.singer_id : ""} onChange={this.handleSingerChange} className="selectpicker">
                {singersSelectList}
            </select>
        )
        
    }
});





