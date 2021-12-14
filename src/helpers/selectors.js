export function getAppointmentsForDay(state, day) {
    if(!state.days){
        return [];
      }

      let theDay = state.days.filter(d => d.name === day)[0];
      if(!theDay){
        return [];
      }
      let result = [];
      for(const id of theDay.appointments){
        const appointment = state.appointments[id];
        result.push(appointment);
      }
    
      return result;
  }