import React, {useState} from 'react'
import DatePicker,{ registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import nl from 'date-fns/locale/nl';
registerLocale('nl', nl)
export default function BetterDatePicker(props) {

  const CalenderWrapper = ({ className, children }) => {
    return (
      <div className={className}>
        <div style={{ position: "relative" }}>{children}</div>
      </div>
    );
  };
  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={props.startDate}
      onChange={(date) => props.onSelect(date)}
      calendarContainer={CalenderWrapper}
      minDate={new Date()}
    />
  );
};

