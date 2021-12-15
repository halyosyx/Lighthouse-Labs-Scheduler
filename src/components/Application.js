import React, { useState, useEffect } from "react";
import "components/Application.scss";
import "components/Appointment"
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import axios from 'axios';
import useApplicationData from "hooks/useApplicationData";
import { getAppointmentsForDay } from "../helpers/selectors"


export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const appointments = getAppointmentsForDay(state, state.day)

  const schedule = appointments.map(appointment => {
    return (
      <Appointment
       key={appointment.id}
       id={appointment.id}
       time={appointment.time}
       interview={appointment.interview}
       interviewer={appointment.interviewers}
      />
    );
  })
  
  return (
    <main className="layout">
      <section className="sidebar">
      <img className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"/>
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={state.days}
          day={state.day}
          setDay={day => {setDay(day)}}
          />
        </nav>
      <img className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"/>
      </section>
      <section className="schedule">
        {schedule}
      </section>
    </main>
  );
}
