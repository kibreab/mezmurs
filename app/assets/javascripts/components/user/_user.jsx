var User = React.createClass({
  getInitialState: function() {
    return {
      page: window.current_user ? "edit" : "login",
    }
  },
 
  changePage: function(newPage) {
    this.setState({
      page: newPage
    })
  },

  updateCurrentUser: function(user) {
    this.props.updateCurrentUser(user);
    this.setState({
      page: "edit"
    })

  },
 
  render: function() {
    switch(this.state.page) {
      case "login":
        return <Login changePage={this.changePage} updateCurrentUser={this.updateCurrentUser} />
      case "signup":
        return <SignUp changePage={this.changePage} updateCurrentUser={this.updateCurrentUser}/>
      case "edit":
        return <Edit changePage={this.changePage}/>
    }
  }
});