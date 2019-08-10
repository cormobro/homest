//Import des éléments nécessaires à la bannière
import React from 'react';
import './index.css';
import Homest from '../../assets/homest.png';
import Triangle from '../../assets/banner2.png';
import { stack as Menu } from 'react-burger-menu'

class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	  }
	  
	  componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	  }
	  
	  updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	  }

render () {
	return (
		<div className="banner">
			{this.state.width < 655 &&
			<Menu className="banner__burger" disableAutoFocus right width={ "100%" }>
			<a id="home" className="menu-item" href="/">Prestations</a>
			<a id="about" className="menu-item" href="/about">Tarifs</a>
			<a id="meeting" className="menu-item" href="/contact">Prendre rendez-vous</a>
			<a id="contact" className="menu-item" href="/contact">Contact</a>
			<a id="question" className="menu-item" href="/contact">FAQ</a>
			</Menu>
			}
			<img className="banner__homest" src={Homest} alt="homest" />
			<h3 className="banner__quote">EXPERTISE IMMOBILIERE</h3>
			<img className="banner__triangle" src={Triangle} alt="suite" />
		</div>
	);
}
}

export default Banner;
