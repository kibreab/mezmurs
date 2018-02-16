var SearchArea = React.createClass({

    render() {
        return(
            <div className="pull-left mid-navigation ">

                <div className="pull-left search-forms-container">
                    <div className="">
                        <div className="form-item">
                            <div className="form-label">
                                Song title
                            </div>
                            <div className="search-by-text-container">
                                <input className=""  />
                            </div>
                        </div>


                        <div className="form-item">
                            <div className="form-label">
                                Singer name
                            </div>
                            <div className="search-by-text-container">
                                <input className=""  />
                            </div>
                        </div>     
         
                    </div>

                </div>

                <div className="search-button-container pull-left">
                    <div className="">
                        SEARCH
                    </div>
                </div>

            </div>            
        )
    }
});