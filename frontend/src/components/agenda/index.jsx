import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet
import './index.css';

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
var today = new Date();
var twoDays = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
var twoMonths = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
const locale = {
  blank: 'Aucune date sélectionnée',
  headerFormat: 'dddd, D MMM',
  locale: require('date-fns/locale/fr'), // You need to pass in the date-fns locale for the language you want (unless it's EN)
  todayLabel: {
    long: "Aujourd'hui",
    short: 'Auj.',
  },
  weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  weekStartsOn: 1, // Start the week on Monday
};

const theme = {
  accentColor: '#448AFF',
  floatingNav: {
    background: 'rgba(56, 87, 138, 0.94)',
    chevron: '#FFA726',
    color: '#FFF',
  },
  headerColor: '#707070',
  selectionColor: '#D6490B',
  textColor: {
    active: '#FFF',
    default: '#333',
  },
  todayColor: '#FFA726',
weekdayColor: '#958F8F',
};

const displayOptions= {
  hideYearsOnSelect: true,
  layout: 'portrait',
  overscanMonthCount: 2,
  shouldHeaderAnimate: true,
  showHeader: false,
  showMonthsForYears: true,
  showOverlay: true,
  showTodayHelper: false,
  showWeekdays: false,
  todayHelperRowOffset: 4,
};

class Agenda extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDates: [],
        firstmeeting: false,
        secondmeeting: false,
        thirdmeeting: false,
        calendar: [{}],
        activeressources: [{}],
      };
    };

    render() {
    return (
        <div className="agenda">
        <div className="agenda__calendar">
          <h4 className="agenda__calendar__title">DATE DESIREE</h4>
          <InfiniteCalendar
            width={"100%"}
            height={400}
            autoFocus={false}
            disabledDays={[6,7]}
            disabledDates={this.props.disabledDays}
            min={twoDays}
            max={twoMonths}
            minDate={twoDays}
            maxDate={twoMonths}
            locale={locale}
            theme={theme}
            displayOptions={displayOptions}
            selected={false}
            onSelect={date => {
              this.setState({selectedDates: date.addDays(1).toJSON()});
              this.props.handleDateClick(date);
              let x;
              for(x = 0; this.props.calendar[x].disponibilityDay.slice(0, 10) != date.toJSON().slice(0, 10); x){
                x = x + 1;
              }
              if(this.props.calendar[x].disponibilityH1 === null){
                this.setState({ firstmeeting: true });
              }
              else if(this.props.activeressources.length == this.props.calendar[x].disponibilityH1.length){
                this.setState({ firstmeeting: false });
              }
              else{
                this.setState({ firstmeeting: true });
              }
              if(this.props.calendar[x].disponibilityH2 === null){
                this.setState({ secondmeeting: true });
              }
              else if(this.props.activeressources.length == this.props.calendar[x].disponibilityH2.length){
                this.setState({ secondmeeting: false });
              }
              else{
                this.setState({ secondmeeting: true });
              }
              if(this.props.calendar[x].disponibilityH3 === null){
                this.setState({ thirdmeeting: true });
              }
              else if(this.props.activeressources.length == this.props.calendar[x].disponibilityH3.length){
                this.setState({ thirdmeeting: false });
              }
              else{
                this.setState({ thirdmeeting: true });
              }
            }}
          />
        </div>
        <div className="agenda__hours">
            <h4 className="agenda__calendar__title">HEURES DISPONIBLES</h4>
            <div className="agenda__hours__button1"><button type="button" className={this.state.firstmeeting ? 'agenda__hours__button__free' : 'agenda__hours__button__full'} value="09:00 à 12:00" onClick={this.props.handleTimeClick}>09:00 à 12:00</button></div>
            <div className="agenda__hours__button1"><button type="button" className={this.state.secondmeeting ? 'agenda__hours__button__free' : 'agenda__hours__button__full'} value="12:00 à 15:00" onClick={this.props.handleTimeClick}>12:00 à 15:00</button></div>
            <div className="agenda__hours__button1"><button type="button" className={this.state.thirdmeeting ? 'agenda__hours__button__free' : 'agenda__hours__button__full'} value="15:00 à 18:00" onClick={this.props.handleTimeClick}>15:00 à 18:00</button></div>
        </div>
        <div className="agenda__next">
          <div className="agenda__next__selectedTime">{this.props.selectedTime}</div>
          <div className="agenda__next__button"><button type="button" className="agenda__next__button__button" onClick={this.props.handleClicked}>Continuer la réservation</button></div>
        </div>
        </div>
    );
    }
  }
  
  export default Agenda;