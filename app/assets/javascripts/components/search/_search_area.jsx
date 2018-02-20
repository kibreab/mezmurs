var SearchArea = React.createClass({

    render() {
        var singersSelectList = this.props.singers.map(function (item, key) {
          return (
            <option value={item.id} key={key}>
              { item.singer_name }
            </option>
          );
        });
        return(
            <div className="pull-left mid-navigation ">

                <div className="pull-left search-forms-container">
                    <div className="">
                        <div className="pull-left form-item">
                            <div className="form-label">
                                Song title
                            </div>
                            <div className="search-by-text-container">
                                <input className=""  />
                            </div>
                        </div>


                        <div className="pull-left form-item">
                            <div className="form-label">
                                Singer name
                            </div>
                            <div className="search-by-text-container">
                                <select id="singer-select" value={this.state ? this.state.singer_id : ""} className="form-select chosen-select" onChange={this.handleSingerChange}>                                    
                                    {singersSelectList}
                                </select>
                            </div>
                        </div>     
         
                    </div>

                </div>

                <div className="search-icon-container pull-left">
                    <i className="fa fa-search"></i>
                    
                    <div className="hidden">
                        <i className="fa fa-search"></i>Search
                    </div>
                </div>

            </div>            
        )
    }
});