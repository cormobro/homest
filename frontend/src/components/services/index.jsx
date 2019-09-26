import React from 'react';
import './index.css';
import Guaranteed from '../../assets/v.png';

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            div1: false,
            div2: false,
        };
        this.handleDivClick = this.handleDivClick.bind(this);
    };

    handleDivClick = (event) => {
        this.setState({ [event.target.id]: true })
      }

    render() {
        return (
            <div className="services">
                <div>
                    <h1 className="services__title">NOS PRESTATIONS</h1>
                </div>
                <div className="services__advantages">
                    <div className="services__advantages__quality">
                        <img  className="services__advantages__quality__guaranteed" src={Guaranteed} alt="Guaranteed" />
                        <p className="services__advantages__quality__name">DISPONIBILITE</p>
                        <hr />
                        <div className="services__advantages__quality__quote">
                            <p>Prise de rendez-vous rapide</p>
                        </div>
                    </div>
                    <div className="services__advantages__quality">
                        <img className="services__advantages__quality__guaranteed" src={Guaranteed} alt="Guaranteed" />
                        <p className="services__advantages__quality__name">EFFICACITE</p>
                        <hr />
                        <div className="services__advantages__quality__quote">
                            <p>Rapport de visite clair et précis</p>
                        </div>
                    </div>
                    <div className="services__advantages__quality">
                        <img className="services__advantages__quality__guaranteed" src={Guaranteed} alt="Guaranteed" />
                        <p className="services__advantages__quality__name">RAPIDITE</p>
                        <hr />
                        <div className="services__advantages__quality__quote">
                            <p>Procès verbal reçu dans les 24 heures</p>
                        </div>
                    </div>
                </div>
                <div className="services__secondTitle">
                    <h1>&bull; ETATS DES LIEUX &bull;</h1>
                </div>
                <div className="services__statusQuo">
                    <ul>
                        <li>L'etat des lieux locatifs est un constat réalisé par le bailleur et le locataire permettant de comparer 
                            le logement lors de l'entrée dans les lieux et lors de la sortie.</li>
                        <li>L'état des lieux d'entrée ou de sortie peut être réalisé par les 2 parties sans l'intervention d'un expert.</li>
                        <li>Un expert peut également être appelé pour effectuer les états des lieux. En tant qu'expert, Homest utilise les toutes dernières technologies et peut réaliser votre état des lieux dont le rapport sera envoyé endéans les 24 heures après règlement.</li>
                    </ul>
                </div>  
                <div className="services__statusQuo">
                    <div className={this.state.div1 ? "services__statusQuo__item1" : "services__statusQuo__item1bis"} onClick={(event) => this.handleDivClick(event)} id="div1">
                        <h3 className="services__statusquo__item__title" onClick={(event) => this.handleDivClick(event)} id="div1">Etat des lieux locatifs d'entrée</h3>
                            <ul>
                                <li>A réaliser au plus tard à la fin du premier mois d'occupation par le nouveau locataire.
                                    Il est même préférable de le faire avant l'emménagement ( cela permet de mieux évaluer les dommages et d'éviter d'oublier les dégâts occasionnés lors du déménagement ).</li>
                                <li>L'Etat des lieux d'entrée doit être établi de "manière contradictoire", c'est-à-dire que les deux parties(ou leur représentants) doivent être présentes</li>
                                <li>Le constat doit être détaillé, daté et signé en personne par le locataire et le propriétaire.</li>
                                <li>Le locataire dispose d'un mois pour apporter d'éventuelles modifications au rapport d'état des lieux.</li>
                                <li>Il doit obligatoirement être joint au contrat de location lors du dépôt de celui-ci auprès du bureau d'enregistrement compétent (voir ici) pour le lieu où se situe l'immeuble loué ou par internet sur le site MyRent.</li>
                            </ul>
                    </div>
                    <div className={this.state.div2 ? "services__statusQuo__item2" : "services__statusQuo__item2bis"} onClick={event => this.handleDivClick(event)} id="div2">
                        <h3 className="services__statusquo__item__title" onClick={(event) => this.handleDivClick(event)} id="div2">Etat des lieux locatifs de sortie</h3>
                            <ul>
                                <li>Au terme de la location, un nouveau constat contradictoire doit être réalisé. L'objectif étant de comparer l'état des lieux d'entrée à celui de la sortie afin de comparer les dommages. Le cas échéant, le locataire devra payer des dommages au propriétaire.</li>
                            </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;