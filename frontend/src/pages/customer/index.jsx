import React, { Component } from 'react';
import './index.css';
import Banner from '../../components/banner/index.jsx';
import Services from '../../components/services/index.jsx';
import Prices from '../../components/prices/index.jsx';
import Contact from '../../components/contact/index.jsx';
import Faq from '../../components/faq/index.jsx';
import Navbar from '../../components/navbar/index.jsx';
import Agendapage from '../../components/calendar/index.jsx';
import { push as Menu } from 'react-burger-menu'

var today = new Date();
let mois = today.getMonth().toString();
{(mois.length < 2) ? mois = "0" + (today.getMonth() + 1) : mois = today.getMonth()};
var ajd = today.getFullYear().toString() + "-" + mois + "-" + today.getDate().toString();
let y = true;

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: [{}],
      activeressources: [{}],
      disabledDays: ["2019-07-08T00:00:00.000Z,"],
      width: 0,
      height: 0,
    };
    this.handleDisabledDays = this.handleDisabledDays.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    };

  handleDivClick = (event) => {
    let div = "div" + event.target.id;
    console.log(div);
    this.setState({ [event.target.id]: !div})
  }

  handleDisabledDays = () => {
    for(let x = 0; x < this.state.calendar.length; x) {
      if (this.state.calendar[x].disponibilityH1 == null || this.state.calendar[x].disponibilityH2 == null || this.state.calendar[x].disponibilityH3 == null) {
        x = x + 1;
      }
      else if ((this.state.calendar[x].disponibilityH1.length + this.state.calendar[x].disponibilityH2.length + this.state.calendar[x].disponibilityH3.length) === this.state.activeressources.length * 3 ) {
        setTimeout(() => this.setState({ disabledDays: [...this.state.disabledDays,this.state.calendar[x].disponibilityDay.slice(0, 11) + "00" + this.state.calendar[x].disponibilityDay.slice(13, 24) + ","]}), 0);
        x = x + 1;
      }
      else {
        x = x + 1;
      }
    }
  }

  componentDidMount(){
    this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
    fetch(`/api/detail/${ajd}`)
      .then(response => response.json())
      .then(calendar => {this.setState({ calendar })});
    fetch('/api/activeressources')
      .then(response => response.json())
      .then(activeressources => {this.setState({ activeressources })})
  }

  componentDidUpdate() {
    if(y) {
      this.handleDisabledDays();
      y = false;
    }
  }

  componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	  
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

  render() {
  return (
    <div className="client" id="outer-container">
      {this.state.width < 655 &&
			<Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } className="client__burger" disableAutoFocus right width={ "100%" }>
			<a id="home" className="menu-item" href="/">Prestations</a>
			<a id="about" className="menu-item" href="/about">Tarifs</a>
			<a id="meeting" className="menu-item" href="/contact">Prendre rendez-vous</a>
			<a id="contact" className="menu-item" href="/contact">Contact</a>
			<a id="question" className="menu-item" href="/contact">FAQ</a>
			</Menu>
      }
      <div id="page-wrap">
        <Banner />
        <Services />
        <Prices />
        <Agendapage calendar={this.state.calendar} activeressources={this.state.activeressources} disabledDays={this.state.disabledDays} />
        <Contact />
        <Faq />
      </div> 
    </div>
  );
  }
}

export default Client;