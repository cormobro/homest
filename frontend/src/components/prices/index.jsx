import React from 'react';
import './index.css';
import Background from '../../assets/background.jpg';

const Prices = () => (
    <div className="prices">
        <img className="prices__image" src={Background} alt="background" />
        <h1 className="prices__title">NOS TARIFS</h1>
        <div className="prices__table">
            <table className="prices__table__border2">
                <tr>
                    <td align="left" className="prices__table__border__cells2">Prestation</td>
                    <td align="right" className="prices__table__border__cells2">Prix TTC par partie</td>
                </tr>
            </table>
            <table className="prices__table__border">
                <tr>
                    <td align="left" className="prices__table__border__cells">Kot</td>
                    <td align="right" className="prices__table__border__cells">60 euros</td>
                </tr>
                <tr>
                    <td align="left" className="prices__table__border__cells">Studio</td>
                    <td align="right" className="prices__table__border__cells">80 euros</td>
                </tr>
                <tr>
                    <td align="left" className="prices__table__border__cells">Appartement ( 1 chambre )</td>
                    <td align="right" className="prices__table__border__cells">100 euros</td>
                </tr>
                <tr>
                    <td align="left" className="prices__table__border__cells">Maison de Ville ( 2 chambres )</td>
                    <td align="right" className="prices__table__border__cells">120 euros</td>
                </tr>
                <tr>
                    <td align="left" className="prices__table__border__cells">Villa</td>
                    <td align="right" className="prices__table__border__cells">àpd 180 euros</td>
                </tr>
                <tr>
                    <td align="left" className="prices__table__border__cells">Prix par chambre supplémentaire</td>
                    <td align="right" className="prices__table__border__cells"> + 10 euros</td>
                </tr>
            </table>
        </div>
    </div>
);

export default Prices;