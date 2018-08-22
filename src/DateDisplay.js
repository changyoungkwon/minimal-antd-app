import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { DatePicker, LocaleProvider, message } from 'antd';
import 'antd/dist/antd.css';
import frFR from 'antd/lib/locale-provider/fr_FR';

moment.locale('fr');

/* Component which displays the date */
class DateDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    message.info(`Selected Date: ${date ? date.toString() : ''}`);
    this.setState({ date });
  }

  render() {
    return (
      <LocaleProvider locale={frFR}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>
            Date: {this.state.date && this.state.date.toString()}
          </div>
        </div>
      </LocaleProvider>
    );
  }
}
export default DateDisplay;
