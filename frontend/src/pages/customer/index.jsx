import React, { Component } from 'react';
import './index.css';
import Banner from '../../components/banner/index.jsx';
import Services from '../../components/services/index.jsx';
import Prices from '../../components/prices/index.jsx';
import Contact from '../../components/contact/index.jsx';
import Faq from '../../components/faq/index.jsx';
import Navbar from '../../components/navbar/index.jsx';
import Agendapage from '../../components/calendar/index.jsx';

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
    };
    this.handleDisabledDays = this.handleDisabledDays.bind(this);
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

  render() {
  return (
    <div className="client">
      <Banner />
      <Services />
      <Prices />
      <Agendapage calendar={this.state.calendar} activeressources={this.state.activeressources} disabledDays={this.state.disabledDays} />
      <Contact />
      <Faq /> 
    </div>
  );
  }
}

export default Client;