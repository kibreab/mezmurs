var User = React.createClass({
  getInitialState: function() {
    return {
      page: this.props.current_user ? "edit" : "login",
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
    switch(this.state.page) {
      case "login":
        return <div className="pull-left right-navigation"><Login changePage={this.changePage} updateCurrentUser={this.updateCurrentUser} /></div>
      case "signup":
        return <div className="pull-left right-navigation"><SignUp changePage={this.changePage} updateCurrentUser={this.updateCurrentUser}/></div>
      case "edit":
        return <div className="pull-left right-navigation"><Edit current_user={this.props.current_user} changePage={this.changePage}/></div>
    }
  }
});