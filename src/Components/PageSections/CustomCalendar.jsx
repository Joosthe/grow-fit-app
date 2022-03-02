import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { nl } from 'date-fns/locale'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles/calendar.scss"


const sOfWeek = () => startOfWeek(new Date(), { weekStartsOn: 1 });
const locales = {
  'nl': nl
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: sOfWeek,
  getDay,
  locales
});

export default function CustomCalendar({ events }) {
  return (
    <div className="calender">
      <Calendar
        culture={"nl"}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        timeslots={1}
        defaultView={Views.WEEK}
        popup
        messages={{
          agenda: 'Agenda',
          allDay: 'Hele dag',
          month: 'Maand',
          day: 'Dag',
          today: 'Vandaag',
          previous: 'Terug',
          next: 'Volgende',
          date: 'Datum',
          noEventsInRange: 'Er zijn geen agenda-items in deze periode',
          time: 'Tijd',
          tomorrow: 'Morgen',
          week: 'Week',
          work_week: 'Werkweek',
          yesterday: 'Gisteren'
        }}
      />
    </div>
  );
}