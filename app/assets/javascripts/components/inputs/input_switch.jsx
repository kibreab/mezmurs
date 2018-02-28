var InputSwitch = React.createClass({
  getInitialState: function() {
    return {
      inputState: this.props.inputState
    };
  },
  componentWillReceiveProps: function(newProps){
    this.setState({inputState: newProps.inputState});
  },
  render: function () {
    //console.log("state is " + this.state.inputState);
    return (
      <div className={"checkbox-switch " + this.props.className}>
        <input type="checkbox" checked={this.state.inputState} id={this.props.inputID} name={this.props.inputName} value={this.props.value} onChange={this.props.onChange} />
        <label htmlFor={this.props.inputID}><span className="toggle-switch"></span>{this.props.label}</label>
      </div>
    );
  }
});
