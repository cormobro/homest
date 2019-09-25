import React from 'react';
import './index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let apiPath = '/backend/routes/login.php';
    fetch(`${apiPath}`, {
      method: "POST",
      mode: "same-origin",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: this.state.login,
        password: this.state.password,
      })
    })
    .then(function (response) {
      return response.text();
    })
  }

render() {
    return (
      <div className="Login">
        Je te souhaite une agréable journée Harold, pourrais-tu m'indiquer ton mot de passe par simple mesure de précaution?
        <form>
     <div>
         <label for="login">Login:</label>
         <input type="text" name="login" id="login" value={this.state.login} onChange={this.handleChange} />
     </div>
     <div>
         <label for="password">Password:</label>
         <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
     </div>
     <div>
         <input type="submit" value="Log In" onClick={this.handleSubmit} />
     </div>
  </form>
      </div>
    );
  };
};
  
  export default Login;