//Import des éléments nécessaires à la bannière
import React from 'react';
import './index.css';
import Homest from '../../assets/homest.png';
import Triangle from '../../assets/banner2.png';
import { bubble as Menu } from 'react-burger-menu'

class Banner extends React.Component {

render () {
	return (
		<div className="banner">
			{/*<img className="banner__homest" src={Homest} alt="homest" />
			<h3 className="banner__quote">EXPERTISE IMMOBILIERE</h3>
	<img className="banner__triangle" src={Triangle} alt="suite" />*/}
			<Menu right width={ "100%" }>
			<a id="home" className="menu-item" href="/">Prestations</a>
			<a id="about" className="menu-item" href="/about">Tarifs</a>
			<a id="meeting" className="menu-item" href="/contact">Prendre rendez-vous</a>
			<a id="contact" className="menu-item" href="/contact">Contact</a>
			<a id="question" className="menu-item" href="/contact">FAQ</a>
			</Menu>
		</div>
	);
}
}

export default Banner;
