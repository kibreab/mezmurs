var SingersSelectList = React.createClass({    
    getInitialState() {
        return {      
            singer_id: this.props.song.singer ? this.props.song.singer.id : ""
        }
    },    
    handleSingerChange(event) {
        this.setState({ singer_id: event.target.value })
        this.props.handleSongSingerChange(event.target.value);
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

            <div className="form-item">
                <div className="form-label">
                    Singer
                </div>
                <div className="">
                    <select id="singer-select" value={this.state ? this.state.singer_id : ""} onChange={this.handleSingerChange} className="">
                        {singersSelectList}
                    </select>                             
                    <div className="add-singer-button" data-toggle="modal" data-target="#modalAddSingers">Add Singer</div>                   
                </div>
                <AddSingerModal current_user={this.props.current_user} handleSingerSubmit={this.props.handleSingerSubmit} />
            </div>
        )
        
    }
});

var AddSingerModal = React.createClass({  

  render() {

    return(
    
      <div className="modal fade" id={"modalAddSingers"} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            
            <div className="modal-header">              
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="fa fa-times"aria-hidden="true"></span>
              </button>
            </div>

            <div className="modal-body">
              <div className="welcome-text">Add singers</div>
              <div className="site-name">M E Z M U R S . C O M </div>

              <div className="member-qn">
                <span>Add missing singers from the list</span>
              </div>
              
              <NewSinger current_user={this.props.current_user} handleSingerSubmit={this.props.handleSingerSubmit} />

            </div>

          </div>
        </div>
      </div>
    )
  }
});



