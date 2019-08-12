import React from 'react';
import './index.css';
import Clock from '../../assets/clock.png';
import Mail from '../../assets/mail.png';
import Popup from "reactjs-popup";

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        contactInfos : ["", "", "", "", ""],
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.closeModal = this.closeModal.bind(this);
    };

    closeModal() {
        this.setState({ open: false });
    }

    handleChange(event) {
        let informationsCopie = this.state.contactInfos.slice();
        informationsCopie[event.target.id] = event.target.value;
        this.setState({ contactInfos : informationsCopie });
    }

    handleSubmit(e) {
        this.setState({ open: true})
        e.preventDefault();
        fetch('/api/newquestion', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.contactInfos[0],
                firstname: this.state.contactInfos[1],
                email: this.state.contactInfos[2],
                about: this.state.contactInfos[3],
                message: this.state.contactInfos[4],
            })
        })
    }

render () {
    return (
        <div className="contact">
            <h1 className="contact__title">CONTACT</h1>
            <div>
                <form className="contact__form">
                    <div className="contact__form__1">
                        <div className="contact__form__1__item1">
                            <input className="contact__form__input1" type="text" name="name" id="0" onChange={this.handleChange} required placeholder="nom"></input>
                            <input className="contact__form__input2" type="text" name="firstname" id="1" onChange={this.handleChange} required placeholder="prénom"></input>
                        </div>
                        <div className="contact__form__1__item2">
                            <input className="contact__form__input__mail" type="mail" name="mail" id="2" onChange={this.handleChange} required placeholder="adresse email"></input>
                        </div>
                        <div className="contact__form__1__item3">
                            <select className="contact__form__input__scroll" name="about" id="3" onChange={this.handleChange} value={this.state.contactInfos[3]}>
                                <option value="A propos">A propos</option>
                                <option value="Prix">Prix</option>
                                <option value="Plainte">Plainte</option>
                            </select>
                        </div>
                    </div>
                    <div className="contact__form__2">
                        <textarea className="contact__form__input__message" name="message" id="4" onChange={this.handleChange} maxlength="500" placeholder="Message ..."></textarea>
                        <button className="contact__form__input__submit" onClick={this.handleSubmit} value="Envoyez">Envoyez</button>
                        <Popup open={this.state.open} onClose={this.closeModal} modal closeOnDocumentClick><p>Merci pour votre message !</p></Popup>
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
                        <p>Homest@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
    };
};

export default Contact;