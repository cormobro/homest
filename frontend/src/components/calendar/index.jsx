import React, { Component } from 'react';
import './index.css';
import Agenda from '../agenda/index.jsx';
import Form from '../form/index.jsx';

class Agendapage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDates: [],
      meetings: [],
      clicked: false,
      selectedTime: ["Aucun horaire sélectionné"],
    };
    this.handleClicked = this.handleClicked.bind(this);
    this.handleTimeClick = this.handleTimeClick.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
  };

  handleDateClick(date) {
    this.setState({ selectedDates: date.addDays(1).toJSON() });
    this.setState({ selectedTime: "Aucun horaire sélectionné"});
  }

  handleClicked() {
    if(this.state.selectedDates.length && (this.state.selectedTime !== "Aucun horaire sélectionné")){
      this.setState({ clicked: !this.state.clicked });
    }
    else {
      alert("Veuillez sélectionner un jour et un horaire libres.")
    }
  }

  handleTimeClick(event) {
    this.setState({ selectedTime: event.target.value })
  }

  render() {
  return (
    <div className="calendar">
      <h1 className="calendar__title">RENDEZ-VOUS</h1>
      {this.state.clicked ? <Form handleClicked={this.handleClicked} selectedTime={this.state.selectedTime} selectedDate={this.state.selectedDates} /> : <Agenda handleClicked={this.handleClicked} handleTimeClick={this.handleTimeClick} selectedTime={this.state.selectedTime} calendar={this.props.calendar} activeressources={this.props.activeressources} disabledDays={this.props.disabledDays} handleDateClick={this.handleDateClick} />}
    </div>
  );
  }
}

export default Agendapage;
