import React from 'react';
import './index.css';
import Background from "../../assets/banner.jpg";

const Faq = () => (
    <div className="faq">
        <h1 className="faq__title">VOS QUESTIONS LES PLUS POSEES</h1>
        <div className="faq__question">
            <ul>
                <li className="faq__question__question">Pourquoi Felix est si stupide?</li>
                <p>Peut-etre parce qu'il ne l'est pas, en fait c'est plutôt Célestine qui n'est pas très intelligente du coup elle se compare à lui et ne comprend pas qu'elle est bête comme une sous-tasse d'origine marseillaise. Elle l'apprendra à ces dépens lorsque elle verra ce site quand il sera fini.</p>
                <li className="faq__question__question">Pourquoi Felix est si intelligent?</li>
                <p>Celestine a oublié son cerveau, Félix en a donc 2.</p>
            </ul>
        </div>
        <div className="faq__image">
            <img className="faq__image__image" src={Background} alt="Background" width="100%" />
            <p className="faq__image__copyright">Copyright 2016 - 2019 by Homest <br /> Designed and created by Félix Bonaert</p>
        </div>
    </div>
);

export default Faq;