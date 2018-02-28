var User = React.createClass({
  getInitialState: function() {
    return {
      page: this.props.current_user ? "edit" : "login",
    }
  },
  componentWillReceiveProps: function(newProps){
    if (newProps.current_user) {
      this.setState({
        page: "edit"
      })      
    }
  },
  changePage: function(newPage) {
    this.setState({
      page: newPage
    })
  },

  updateCurrentUser: function(user) {
    this.setState({
      page: "edit"
    })
    this.props.updateCurrentUser(user);
  },
 
  render: function() {
    var classList = this.props.modal ? "" : "pull-left right-navigation";
    switch(this.state.page) {
      case "login":
        return  <div className={classList}>
                  <Login changePage={this.changePage} updateCurrentUser={this.updateCurrentUser} modal={this.props.modal} />
                </div>
      case "signup":
        return  <div className={classList}>
                  <SignUp changePage={this.changePage} updateCurrentUser={this.updateCurrentUser} modal={this.props.modal}/>
                </div>
      case "edit":
        return  <div className={classList}>
                  <Edit current_user={this.props.current_user} changePage={this.changePage}/>
                </div>
    }
  }
});