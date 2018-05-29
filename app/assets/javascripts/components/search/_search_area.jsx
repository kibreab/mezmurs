var SearchArea = React.createClass({
    getInitialState() {
        return {
            searchValue: "",
            searchSingerValue: ""
        }
    },    
    handleOnChange(event) {
        value = event.target.value;
        this.setState({searchValue: value});
        this.props.setSearchValue(value);
    },
    handleSingerChange(event) {
        value = event.target.value;
        this.setState({searchSingerValue: value});
        this.props.setSearchSingerValue(value);
        
    }, 
    search(event){
        var totalWidth =  $('body').width();
        oneTimeFetch = totalWidth/120;
        var data = {"per_page": oneTimeFetch, "page": 1, search_value: this.state.searchValue, singer_id: this.state.searchSingerValue}
        this.props.fetchSongs(data);                
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
            <div className="pull-left mid-navigation ">

                <div className="pull-left search-forms-container">
                    <div className="">
                        <div className="pull-left form-item">
                            <div className="form-label">
                                Song title
                            </div>
                            <div className="search-by-text-container">
                                <input className="long-text-input" value={this.state.searchValue} onChange={this.handleOnChange} />
                            </div>
                        </div>


                        <div className="pull-left form-item">
                            <div className="form-label">
                                Singer name
                            </div>
                            <div className="search-by-text-container">
                                <select id="singer-select" className="long-text-input form-select" onChange={this.handleSingerChange}>
                                    <option value={""} key={0}>
                                        { "ANY" }
                                    </option>                                    
                                    {singersSelectList}
                                </select>
                            </div>
                        </div>     
         
                    </div>

                </div>

                <div className="search-icon-container pull-left" onClick={this.search} >
                    <i className="fa fa-search"></i>
                    
                    <div className="hidden">
                        <i className="fa fa-search"></i>Search
                    </div>
                </div>

            </div>            
        )
    }
});