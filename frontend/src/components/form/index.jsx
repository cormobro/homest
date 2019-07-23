import React, { Component } from 'react';
import './index.css';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        informations : ["", "", "", "", "", "", "", "", "", "", "", ""],
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRadioButton = this.handleRadioButton.bind(this);
    };

    handleChange(event) {
        let informationsCopie = this.state.informations.slice();
        informationsCopie[event.target.id] = event.target.value;
        this.setState({ informations : informationsCopie });
    }

    handleRadioButton(event) {
        let informationsCopie = this.state.informations.slice();
        informationsCopie[10] = event.target.id;
        this.setState({ informations : informationsCopie });
    }

    handleSubmit() {
        fetch('/api/newclient', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.informations[0],
                firstname: this.state.informations[1],
                phonenumber: this.state.informations[2],
                email: this.state.informations[3],
                adress: this.state.informations[4] + " " + this.state.informations[5] + "(" + this.state.informations[6] + ")" + ", " + this.state.informations[7],
                bien: this.state.informations[8],
                rooms: this.state.informations[9],
                status: this.state.informations[10],
                message: this.state.informations[11],
                date: this.props.selectedDate.slice(0, 10),
                time: this.props.selectedTime,
            })
        })
    }
  
    render() {
    return (
      <div>
            <p>Réservation pour le {this.props.selectedDate.slice(0, 10)} de {this.props.selectedTime}</p>
            <form action="post" method="post" className="clientform" onSubmit={this.handleSubmit}>
                <div className="">
                    <p>1.Données personnelles</p>
                    <div className="">
                        <input className="" type="text" name="name" id="0" onChange={this.handleChange} required placeholder="nom"></input>
                        <input className="" type="text" name="firstname" id="1" onChange={this.handleChange} required placeholder="prénom"></input>
                    </div>
                    <div className="">
                        <input className="" type="number" name="phonenumber" id="2" onChange={this.handleChange} required placeholder="numéro de téléphone"></input>
                    </div>
                    <div className="">
                        <input className="" type="email" name="email" id="3" onChange={this.handleChange} required placeholder="adresse mail"></input>
                    </div>
                    <p>2.Adresse pour le jour-même</p>
                    <div className="">
                        <input className="" type="text" name="street" id="4" onChange={this.handleChange} required placeholder="rue"></input>
                    </div>
                    <div className="">
                        <input className="" type="number" name="number" id="5" onChange={this.handleChange} required placeholder="numéro"></input>
                        <input className="" type="number" name="boxnumber" id="6" onChange={this.handleChange} required placeholder="boite"></input>
                    </div>
                    <div className="">
                        <input className="" type="text" name="locality" id="7" onChange={this.handleChange} required placeholder="localité"></input>
                    </div>
                </div>
                <div className="">
                    <p>3.Renseignement du bien</p>
                    <div className="">
                        <select className="" name="bien" id="8" value={this.state.informations[8]} onChange={this.handleChange}>
                            <option value="Type de bien">Type de bien</option>
                            <option value="Appartement">Appartement</option>
                            <option value="Maison de ville">Maison de ville</option>
                            <option value="Villa">Villa</option>
                            <option value="Kot">Kot</option>
                            <option value="Studio">Studio</option>
                        </select>
                    </div>
                    <div className="">
                        <select className="" name="rooms" id="9" value={this.state.informations[9]} onChange={this.handleChange}>
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
                    <div className="">
                        <input type="radio" id="bailleur" name="status" value="bailleur"  onClick={this.handleRadioButton} />
                        <label for="bailleur">Bailleur</label>
                        <input type="radio" id="locataire" name="status" value="locataire" onClick={this.handleRadioButton} />
                        <label for="locataire">Locataire</label>
                    </div>
                    <textarea className="" name="message" id="11" maxlength="500" placeholder="Message ..." onChange={this.handleChange}></textarea>
                </div>
                <div className="">
                    <input className="" type="submit" value="Envoyez" />
                </div>
            </form>
            <button value="okay" onClick={this.handleSubmit}>Okay</button>
      </div>
    );
    }
  }
  
  export default Form;