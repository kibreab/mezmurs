var Header = React.createClass({
    render() {
    	var current_user = (this.props.current_user ? this.props.current_user.email : "");
    	var user_menu = current_user ? 
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{current_user} <span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><a href="#">Account settings</a></li>
			            <li><a href="#">Edit profile</a></li>
			            <li><a href="#">User preferences</a></li>
			            <li role="separator" className="divider"></li>
			            <li><a href="/users/sign_out">Log out</a></li>
			          </ul>
			        </li> : ""    	
        return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <div className="navbar-brand">m e z m u r s . c o m</div>
			    </div>			
			    
			    <div className="collapse navbar-collapse">
			      <ul className="nav navbar-nav navbar-right">
			      	{user_menu}
			      </ul>
			    </div>
			  </div>
			</nav>
        )
    }
});