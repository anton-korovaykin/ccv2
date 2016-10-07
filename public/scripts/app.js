var CCV2 = React.createClass({
  getInitialState: function(){
    return {
      isCCV2Valid: true
    };
  },

  ccv2OnChange: function(event){
    var value = event.target.value;
    this.setState({
      isCCV2Valid: 100 <= value && value <= 999
    });
  },

  render: function() {
    return (
      <div>
        <input type="number" placeholder="CCV2" onChange={this.ccv2OnChange}/>
        <p className={this.state.isCCV2Valid?"hidden":"visible"}>CCV2 is not valid!</p>
      </div>
    );
  }
});

ReactDOM.render(
  <CCV2 />,
  document.getElementById('content')
);
