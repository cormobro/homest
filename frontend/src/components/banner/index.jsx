//Import des éléments nécessaires à la bannière
import React from 'react';
import './index.css';
import Homest from '../../assets/homest.png';
import Triangle from '../../assets/banner2.png';

const Banner = () => (
	<div className="banner">
		<img className="banner__homest" src={Homest} alt="homest" />
		<h3 className="banner__quote">EXPERTISE IMMOBILIERE</h3>
		<img className="banner__triangle" src={Triangle} alt="suite" />
	</div>
);

export default Banner;
