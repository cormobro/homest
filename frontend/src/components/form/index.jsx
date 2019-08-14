import React, { Component } from 'react';
import './index.css';

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

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: null,
        firstname: null,
        phonenumber: null,
        email: null,
        street: null,
        number: null,
        boxnumber: null,
        locality: null,
        bien: null,
        rooms: null,
        status: null,
        message: null,
        errors: {
            name: '',
            firstname: '',
            phonenumber: '',
            email: '',
            street: '',
            number: '',
            boxnumber: '',
            locality: '',
            bien: '',
            rooms: '',
            status: '',
            message: '',
          },
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRadioButton = this.handleRadioButton.bind(this);
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
          case 'phonenumber': 
            errors.phonenumber = 
              value.length < 8
                ? 'Votre numéro doit contenir 8 chiffres au minimum!'
                : '';
            break;
          case 'street': 
            errors.street = 
              value.length < 9
                ? 'Le champ Rue doit contenir 9 caractères au minimum'
                : '';
            break;
          case 'number': 
            errors.number = 
              value.length < 1
                ? 'Vous devez obligatoirement inscrire le numéro de votre porte!'
                : '';
            break;
          case 'boxnumber': 
            errors.boxnumber = 
              value.length < 1
                ? 'Vous devez obligatoirement inscrire le numéro de votre boite!'
                : '';
            break;
          case 'locality': 
            errors.locality = 
              value.length < 3
                ? 'Le champ Localité doit contenir 3 caractères au minimum!'
                : '';
            break;
          case 'bien': 
            errors.bien = 
              value.length < 1
                ? "Vous devez obligatoirement préciser de quel type de bien il s'agit!"
                : '';
            break;
          case 'rooms': 
            errors.rooms = 
              value.length < 1
                ? 'Vous devez obligatoirement préciser de combien de chambres vous disposez!'
                : '';
            break;
          case 'status': 
            errors.status = 
              value.length < 2
                ? 'Vous devez obligatoirement préciser si vous êtes bailleur ou locataire!'
                : '';
            break;
          default:
            break;
        }
      
        this.setState({errors, [name]: value});
      }

    handleRadioButton(event) {
        this.setState({ status : [event.target.value] });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(validateForm(this.state.errors) && ((this.state.name, this.state.firstname, this.state.email, this.state.about, this.state.message) !== null)) {
            
            fetch('/api/newclient', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    firstname: this.state.firstname,
                    phonenumber: this.state.phonenumber,
                    email: this.state.email,
                    adress: this.state.street + " " + this.state.number + "(" + this.state.boxnumber + ")" + ", " + this.state.locality,
                    bien: this.state.bien,
                    rooms: this.state.rooms,
                    status: this.state.status,
                    message: this.state.message,
                    date: this.props.selectedDate.slice(0, 10),
                    time: this.props.selectedTime,
                })
            });
        }else{
            alert("Certains des champs du formulaire ne sont pas correctement remplis!");
        };
    }
  
    render() {
        const {errors} = this.state;
    return (
      <div className="form">
            <form className="form__form" className="clientform">
            <p className="form__reservation">Réservation pour le {this.props.selectedDate.slice(0, 10)} de {this.props.selectedTime}</p>
                <div className="form__form">
                <div className="form__form1">
                    <p className="form__subtitles">1. Données personnelles</p>
                    <div className="form__form1__div1">
                        <input className="form__form1__div1__name" style={errors.name.length > 0 ? inputError : null} type="text" name="name" id="0" onChange={this.handleChange} required placeholder="nom"></input>
                        <input className="form__form1__div1__firstname" style={errors.firstname.length > 0 ? inputError : null} type="text" name="firstname" id="1" onChange={this.handleChange} required placeholder="prénom"></input>
                    </div>
                    <div className="form__form1__div2">
                        <input className="form__form1__div2__phonenumber" style={errors.phonenumber.length > 0 ? inputError : null} type="number" name="phonenumber" id="2" onChange={this.handleChange} required placeholder="numéro de téléphone"></input>
                    </div>
                    <div className="form__form1__div3">
                        <input className="form__form1__div3__email" style={errors.email.length > 0 ? inputError : null} type="email" name="email" id="3" onChange={this.handleChange} required placeholder="adresse mail"></input>
                    </div>
                    <p className="form__subtitles">2. Adresse pour le jour-même</p>
                    <div className="form__form1__div4">
                        <input className="form__form1__div4__street" style={errors.street.length > 0 ? inputError : null} type="text" name="street" id="4" onChange={this.handleChange} required placeholder="rue"></input>
                    </div>
                    <div className="form__form1__div5">
                        <input className="form__form1__div5__number" style={errors.number.length > 0 ? inputError : null} type="number" name="number" id="5" onChange={this.handleChange} required placeholder="numéro"></input>
                        <input className="form__form1__div5__boxnumber" style={errors.boxnumber.length > 0 ? inputError : null} type="number" name="boxnumber" id="6" onChange={this.handleChange} required placeholder="boite"></input>
                    </div>
                    <div className="form__form1__div6">
                        <input className="form__form1__div6__locality" style={errors.locality.length > 0 ? inputError : null} type="text" name="locality" id="7" onChange={this.handleChange} required placeholder="localité"></input>
                    </div>
                </div>
                <div className="form__form2">
                    <p className="form__subtitles">3. Renseignement du bien</p>
                    <div className="form__form2__div1">
                        <select className="form__form2__div1__select" style={errors.bien.length > 0 ? inputError : null} name="bien" id="8" value={this.state.bien} onChange={this.handleChange}>
                            <option value="Type de bien">Type de bien</option>
                            <option value="Appartement">Appartement</option>
                            <option value="Maison de ville">Maison de ville</option>
                            <option value="Villa">Villa</option>
                            <option value="Kot">Kot</option>
                            <option value="Studio">Studio</option>
                        </select>
                    </div>
                    <div className="form__form2__div2">
                        <select className="form__form2__div2__select" style={errors.rooms.length > 0 ? inputError : null} name="rooms" id="9" value={this.state.rooms} onChange={this.handleChange}>
                            <option value="nombre de chambres">Nombre de chambres</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="form__form2__div3">
                        <div className="form__form2__div3__div"><label for="bailleur" className="form__form2__div3__label">
                        <input type="radio" id="bailleur" name="status" value="bailleur"  onClick={this.handleRadioButton} />
                        Bailleur<span className="checkmark"></span></label></div>
                        <div className="form__form2__div3__div2"><label for="locataire" className="form__form2__div3__label">
                        <input type="radio" id="locataire" name="status" value="locataire" onClick={this.handleRadioButton} />
                        Locataire<span className="checkmark"></span></label></div>
                    </div>
                    <textarea className="form__form2__textarea" name="message" id="11" maxlength="500" placeholder="Message ..." onChange={this.handleChange}></textarea>
                </div>
                <div className="form__form3__div">
                <button className="form__form3__div__button" value="okay" onClick={this.handleSubmit}>Réservez</button>
                </div>
                </div>
            </form>
      </div>
    );
    }
  }
  
  export default Form;