import React from 'react';
import './index.css';
import Clock from '../../assets/clock.png';
import Mail from '../../assets/mail.png';
import Phone from '../../assets/phone.png';

const Contact = () => (
    <div className="contact">
        <h1 className="contact__title">CONTACT</h1>
        <div>
            <form action="post" method="get" className="contact__form">
                <div className="contact__form__1">
                    <div className="contact__form__1__item1">
                        <input className="contact__form__input" type="text" name="name" id="name" required placeholder="nom"></input>
                        <input className="contact__form__input" type="text" name="firstname" id="firstname" required placeholder="prénom"></input>
                    </div>
                    <div className="contact__form__1__item2">
                        <input className="contact__form__input__mail" type="mail" name="mail" id="mail" required placeholder="adresse email"></input>
                    </div>
                    <div className="contact__form__1__item3">
                        <select className="contact__form__input__scroll" name="about">
                            <option value="A propos">A propos</option>
                            <option value="Prix">Prix</option>
                            <option value="Plainte">Plainte</option>
                        </select>
                    </div>
                </div>
                <div className="contact__form__2">
                    <textarea className="contact__form__input__message" name="message" id="message" maxlength="500" placeholder="Message ..."></textarea>
                    <input className="contact__form__input__submit" type="submit" value="Envoyez" />
                </div>
            </form>
        </div>
        <div className="contact__infos">
            <div className="contact__infos__schedule">
                <table width="50%" className="contact__infos__schedule__table" align="left">
                    <tr>
                        <td>Lundi au Vendredi</td>
                        <td>08:00 - 19:00</td>
                    </tr>
                    <tr>
                        <td>Samedi</td>
                        <td>08:00 - 17:00</td>
                    </tr>
                </table>
                <img src={Clock} alt="horloge" width="50px" height="50px" />
            </div>
            <div className="contact__infos__phone">
                <div className="contact__infos__phone__image">
                    <img src={Phone} alt="téléphone" width="50px" height="50px" />
                    <p>+32(0) 495 33 41 31</p>
                </div>
                <div className="contact__infos__phone__image">
                    <img src={Mail} alt="mail" width="50px" height="50px" />
                    <p>Homest@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;