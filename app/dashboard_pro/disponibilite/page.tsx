'use client'
import React, { useState, useEffect } from 'react';

interface TimePair {
  from: string;
  to: string;
}

const WorkScheduleForm: React.FC = () => {
  const initialTimePair: TimePair = { from: '08:30', to: '12:00' };
  const defaultTimePairs: TimePair[] = [{ ...initialTimePair }, { ...initialTimePair }];

  const [schedule, setSchedule] = useState<{
    [key: string]: TimePair[];
  }>(() => {
    const defaultSchedule: { [key: string]: TimePair[] } = {
      tousLesJours: [...defaultTimePairs],
      Lundi: [],
      Mardi: [],
      Mercredi: [],
      Jeudi: [],
      Vendredi: [],
      Samedi: [],
      Dimanche: [],
    };
    Object.keys(defaultSchedule).forEach((day) => {
      if (day !== 'tousLesJours') {
        defaultSchedule[day] = [...defaultTimePairs];
      }
    });

    return defaultSchedule;
  });

  const [selectedDay, setSelectedDay] = useState<string>('tousLesJours');
  const [unavailabilityDates, setUnavailabilityDates] = useState<string[]>([]); 

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };
  const addTimePair = () => {
    const updatedSchedule = { ...schedule };
    updatedSchedule.tousLesJours.push({ ...initialTimePair });

    Object.keys(updatedSchedule).forEach((day) => {
      if (day !== 'tousLesJours') {
        updatedSchedule[day].push({ ...initialTimePair });
      }
    });

    setSchedule(updatedSchedule);
  };
const [select, setSelect] = useState<string>('tousLesJours')
  const addTimeOtherAllDay = () => {
    const updatedSchedule = { ...schedule };
    if (updatedSchedule[selectedDay]) {
      updatedSchedule[selectedDay].push({ ...initialTimePair });
      setSchedule(updatedSchedule);
    }
  };

  const addIndisponibilityDate = () => {
    const inputStartDate = document.getElementById('inputStartDate') as HTMLInputElement;
    const inputEndDate = document.getElementById('inputEndDate') as HTMLInputElement;

    if (inputStartDate && inputEndDate) {
      const startDate = inputStartDate.value;
      const endDate = inputEndDate.value;
      setUnavailabilityDates([...unavailabilityDates, `${startDate} - ${endDate}`]);
    }
  };

  const handleTimeChangeForDay = (index: number, field: keyof TimePair, value: string) => {
    setSchedule((prevSchedule) => {
      const updatedSchedule = { ...prevSchedule };
      updatedSchedule[selectedDay][index][field] = value;
      return updatedSchedule;
    });
  };

  const handleTimeChangeForAllDays = (index: number, field: keyof TimePair, value: string) => {
    const updatedSchedule = { ...schedule };

    Object.keys(updatedSchedule).forEach((day) => {
      if (day !== 'tousLesJours') {
        updatedSchedule[day][index][field] = value;
      }
    });

    setSchedule(updatedSchedule);
  };

  const handleRemoveTimePair = (index: number) => {
    const updatedSchedule = { ...schedule };

    updatedSchedule[selectedDay].splice(index, 1);

    if (selectedDay === 'tousLesJours') {
      Object.keys(updatedSchedule).forEach((day) => {
        if (day !== 'tousLesJours') {
          updatedSchedule[day].splice(index, 1);
        }
      });
    }

    setSchedule(updatedSchedule);
  };

  function updateFormattedDate() {
    const inputDate = document.getElementById('inputDate') as HTMLInputElement;
    const formattedDate = document.getElementById('formattedDate');

    if (inputDate && formattedDate) {
      const selectedDate = inputDate.value;
      
    }
  }

  useEffect(() => {
    const inputDate = document.getElementById('inputDate') as HTMLInputElement;

    if (inputDate) {
      inputDate.addEventListener('change', () => {
        updateFormattedDate();
      });
    }
  }, []);
  const removeIndisponibilityDate = (indexToRemove: number) => {
    setUnavailabilityDates((prevDates) => {
      return prevDates.filter((_, index) => index !== indexToRemove);
    });
  };
  const renderWorkHours = () => {
    return (
      <div style={{marginTop:'2%'}}>
        <span className='text-2xl'>{selectedDay === 'tousLesJours' ? 'Tous les jours' : selectedDay}</span>
        <br/>
       <br/>

        {schedule[selectedDay].map((timePair, index) => (
          <div key={index} className='flex'>
            <div>
              <label>De</label>
              <br />
              {selectedDay === 'tousLesJours' ? (
                <input
                className='text-lg rounded text-black'
                value={timePair.from}
                type='time'
                style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
                onChange={(e) => handleTimeChangeForAllDays(index, 'from', e.target.value)}
            
                />) : (
                    <input
                    className='text-lg rounded text-black'
                    value={timePair.from}
                    type='time'
                    style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
                    onChange={(e) => handleTimeChangeForDay(index, 'from', e.target.value)}
                
                    />
                  )}
              
            </div>
            <div style={{ marginLeft: '20px' }}>
              <label>à</label>
              <br />
              {selectedDay === 'tousLesJours' ? (
                <input
                  className='text-lg rounded text-black'
                  value={timePair.to}
                  type='time'
                  style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
                  onChange={(e) => handleTimeChangeForAllDays(index, 'to', e.target.value)}
                />
              ) : (
                <input
                  className='text-lg rounded text-black'
                  value={timePair.to}
                  type='time'
                  style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
                  onChange={(e) => handleTimeChangeForDay(index, 'to', e.target.value)}
                />
              )}
              <img
                src="/minus-circle-red.svg"
                alt="Supprimer"
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => handleRemoveTimePair(index)}
              />
            </div>
          </div>
        ))}
        <br />
        {selectedDay === 'tousLesJours' ? (
          <u className='text-base' style={{fontWeight:'700'}} onClick={addTimePair}>+ Ajouter un autre horaire</u>
        ) : (
          <u className='text-base' style={{fontWeight:'700'}} onClick={addTimeOtherAllDay}>Ajouter un autre horaire pour {selectedDay}</u>
        )}
      </div>
    );
  };

  
  const renderNoWork = () => {
    return (
      <div>
        <div className='flex'>
          <div>
            <label>Du</label>
            <br />
            <input
              className='text-lg rounded text-black'
              id='inputStartDate'
              type='date'
              style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
            ></input>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <label>au</label>
            <br />
            <input
              className='text-lg rounded text-black'
              id='inputEndDate'
              type='date'
              style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
            />
            <img
              src="/minus-circle-red.svg"
              alt="Supprimer"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={addIndisponibilityDate}
            />
          </div>
        </div>
        
        <br />
       
        {unavailabilityDates.map((date, index) => (
          <div key={index} className='flex'>
            <input
              className='text-lg rounded text-black'
              type='date'
              value={date.split(' - ')[0]}
              style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px' }}
              readOnly
            />
            <input
              className='text-lg rounded text-black'
              type='date'
              value={date.split(' - ')[1]}
              style={{ border: 'solid 2px #EAEAEA', width: '100px', height: '40px', marginLeft: '20px' }}
              readOnly
            />
            <img
              src="/minus-circle-red.svg"
              alt="Supprimer"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={() => removeIndisponibilityDate(index)}
            />
            
          </div>
        ))}
        <br />
        <button onClick={addIndisponibilityDate}>Ajouter une date d'indisponibilité</button>
      </div>
    );
  };

  return (
    <div style={{ width: '100%' }}>
      <br />
      <span>Disponibilité</span>
      <br />
      <br />
      <div className='bg-white blur-md'>
      <span>Horaires d'ouverture</span>
      <br />
      <br />
      <div style={{ background: '#EAEAEA', width: '100%', height: '2px' }}></div>
      <br />
      <span>Configurer les plages horaires</span>
      <br />
      <br />
      <div className='flex'>
      {Object.keys(schedule).map((day) => (
  <button
    className='text-lg rounded'
    style={{
      background: selectedDay === day ? '#000000' : '#EAEAEA',
      color: selectedDay === day ? '#FFF' : '#000000',
      padding: '11px',
      marginRight: '10px'
    }}
    key={day}
    onClick={() => handleDaySelect(day)}
  >
    {day === 'tousLesJours' ? 'Tous les jours' : day}
  </button>
))}
      </div>
      {renderWorkHours()}
      </div>
      <br />
      <div className='bg-white blur-md'>
      <span>Vacances et jours férié</span>
      <br /><br />
      <div style={{ width: '100%', height: '2px', background: '#EAEAEA' }}></div>
      <br />
      <span>Configurer les dates d'indisponibilité</span>
      <br /><br />
      {renderNoWork()}
      </div>
    </div>
  );
};

export default WorkScheduleForm;