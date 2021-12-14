import React, { useState, useEffect } from "react";
import "components/Application.scss";
import "components/Appointment"
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import axios from 'axios';
import { access } from "fs";


export default function Application(props) {

  const setDay = day => setState({ ...state, day });
  const setDays = days => setState({...state, days})

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });

  const dailyAppointments = [];
  dailyAppointments.map(appointment => ({
    
  }))

  useEffect(() => {
    const daysUrls = 'http://localhost:8001/api/days';
    axios.get(daysUrls).then(res => {
      setDays(res.data);
    })
  }, [])

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
          setDay={setDay}
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
