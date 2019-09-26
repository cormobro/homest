import React from 'react';
import './index.css';
import Clock from '../../assets/clock.png';
import Mail from '../../assets/mail.png';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

const inputError = {
    border: '1px solid red'
};

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: null,
        firstname: null,
        email : null,
        about : null,
        message : null,
        errors: {
          name: '',
          firstname: '',
          email: '',
          about: '',
          message: '',
        },
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      
        switch (name) {
          case 'name': 
            errors.name = 
              value.length < 2 
                ? 'le champ nom doit contenir au minimum 2 caractères!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Adresse mail incorrecte!';
            break;
          case 'firstname': 
            errors.firstname = 
              value.length < 3
                ? 'Le champ prénom doit contenir au minimum 3 caractères!'
                : '';
            break;
          case 'about': 
            errors.about = 
              value == "A propos"
                ? 'Vous devez choisir un thème!'
                : '';
            break;
          case 'message': 
            errors.message = 
              value.length < 40
                ? 'Le message doit contenir au minimum 40 caractères!'
                : '';
            break;
          default:
            break;
        }
      
        this.setState({errors, [name]: value});
      }

    handleSubmit(e) {
        e.preventDefault();
        if(validateForm(this.state.errors) && ((this.state.name, this.state.firstname, this.state.email, this.state.about, this.state.message) !== null)) {
            alert("Votre requête a bien été envoyée, merci!");
            fetch('/api/newquestion', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    firstname: this.state.firstname,
                    email: this.state.email,
                    about: this.state.about,
                    message: this.state.message,
                })
            })
            let apiPath = '/backend/routes/message.php'
            fetch(`${apiPath}`, {
              method: 'POST',
              mode: "same-origin",
              credentials: "same-origin",
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name: this.state.name + this.state.firstname,
                  email: this.state.email,
                  message: this.state.message,
              })
          })
        }else{
            alert("Certains des champs du formulaire de contact ne sont pas correctement remplis!");
        }
    }

render () {
    const {errors} = this.state;
    return (
        <div className="contact">
            <h1 className="contact__title">CONTACT</h1>
            <div>
                <form className="contact__form">
                    <div className="contact__form__1">
                        <div className="contact__form__1__item1">
                            <input className="contact__form__input1" style={errors.name.length > 0 ? inputError : null} type="text" name="name" id="0" onChange={this.handleChange} required placeholder="nom"></input>
                            <input className="contact__form__input2" style={errors.firstname.length > 0 ? inputError : null} type="text" name="firstname" id="1" onChange={this.handleChange} required placeholder="prénom"></input>
                        </div>
                        <div className="contact__form__1__item2">
                            <input className="contact__form__input__mail" style={errors.email.length > 0 ? inputError : null} type="mail" name="email" id="2" onChange={this.handleChange} required placeholder="adresse email"></input>
                        </div>
                        <div className="contact__form__1__item3">
                            <select className="contact__form__input__scroll" style={errors.about.length > 0 ? inputError : null} name="about" id="3" onChange={this.handleChange} value={this.state.about}>
                                <option value="A propos">A propos</option>
                                <option value="Prix">Prix</option>
                                <option value="Plainte">Plainte</option>
                            </select>
                        </div>
                    </div>
                    <div className="contact__form__2">
                        <textarea className="contact__form__input__message" style={errors.message.length > 0 ? inputError : null} name="message" id="4" onChange={this.handleChange} maxlength="500" placeholder="Message ..."></textarea>
                        <button className="contact__form__input__submit" onClick={this.handleSubmit} value="Envoyez">Envoyez</button>
                    </div>
                </form>
            </div>
            <div className="contact__infos">
                <div className="contact__infos__schedule">
                    <table className="contact__infos__schedule__table">
                        <tr>
                            <td align="left">Lundi au Vendredi</td>
                            <td>08:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td align="left">Samedi</td>
                            <td>08:00 - 17:00</td>
                        </tr>
                    </table>
                    <img className ="contact__infos__schedule__img" src={Clock} alt="horloge" width="50px" height="50px" />
                </div>
                <div className="contact__infos__phone">
                    <div className="contact__infos__phone__image">
                        <img src={Mail} alt="mail" width="50px" height="50px" />
                        <p>expert@homest.be</p>
                    </div>
                </div>
            </div>
        </div>
    );
    };
};

export default Contact;