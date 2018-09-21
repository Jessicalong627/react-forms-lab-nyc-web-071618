import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {name: '',
    password: ''};
  }


  handleName = (e) => {
    let name = e.target.value
    this.setState({
      name: name
    })
  }

  handlePassword = (e) => {
      let password = e.target.value
    this.setState({
      password: password
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.name.length > 0 && this.state.password.length > 0){
        {this.props.onSubmit}
    }

  }


  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleName} value= {this.state.name}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePassword} value= {this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
