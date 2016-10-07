var CCV2 = React.createClass({
  getInitialState: function(){
    return {
      ccv2Valid: null
    };
  },

  ccv2OnChange: function(event){
    var value = event.target.value;

    this.serverRequest = $.post("/api/ccv2", {value}, function (result) {
      this.setState({
        ccv2Valid: result.ccv2Valid
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div className="wrapper">
        <label htmlFor="ccv2">CCV2 </label>
        <input 
          className={this.state.ccv2Valid == null ? "input" : this.state.ccv2Valid ? "valid-input" : "invalid-input"} 
          type="number" 
          placeholder="Type your CCV2 code" 
          onChange={this.ccv2OnChange}
          name="ccv2"/>
        <p className={this.state.ccv2Valid == null || this.state.ccv2Valid ? "valid" : "invalid"}>CCV2 is not valid!</p>
      </div>
    );
  }
});

ReactDOM.render(
  <CCV2 />,
  document.getElementById('content')
);
