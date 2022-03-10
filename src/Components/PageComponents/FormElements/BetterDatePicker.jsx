import React from 'react'
import nl from 'date-fns/locale/nl';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

registerLocale('nl', nl);

export default function BetterDatePicker(startDate, onSelect) {

  const CalenderWrapper = ({ className, children, }) => {
    return (
      <div className={className}>
        <div style={{ position: "relative" }}>{children}</div>
      </div>
    );
  };
  return (
    <DatePicker
      locale="nl"
      dateFormat="dd/MM/yyyy HH:mm"
      selected={startDate}
      onChange={(date) => onSelect(date)}
      calendarContainer={CalenderWrapper}
      minDate={new Date()}
      showTimeSelect
      timeFormat="HH:mm"
      timeCaption="Tijd"
      todayButton="Vandaag"
    />
  );
};

