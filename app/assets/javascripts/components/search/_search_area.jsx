var SearchArea = React.createClass({

    render() {
        return(
            <div className="container search-container">


                <div className="form-group pull-left">
                    <div className="pull-left">
                        <div className="labels-area">
                            <div className="english-label">
                                Song title
                            </div>
                            <div className="amharic amharic-label">
                                Song title
                            </div>                        
                        </div>
         
                    </div>


                    <div className="pull-left">
                        <form>
                            <div className="form-group forms-area">
                                <div className="input-options">
                                    <div className="pull-left">
                                        By amharic
                                    </div>
                                    <div className="pull-left">
                                        By English
                                    </div>                            
                                </div>

                                <div className="form-group">
                                    <input className="form-control form-control-lg" type="text" placeholder="form-control-lg" />
                                </div>
                            </div> 

                        </form>
        
                    </div>

                </div>


                <div className="pull-left">
                    <div className="search-button-area">
                        SEARCH
                    </div>
                </div>

            </div>            
        )
    }
});