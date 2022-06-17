//importing useState hook from the react library
import React, { useState } from 'react'; 
//COMPONENTS
import Title from './components/Title';
import Modal from './components/Modal';
import './App.css';
import NewEventForm from './components/NewEventForm';

function App() {
  //STATE & VARIALBES
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  //EVENTS
  const handleClick = (id) => {
    setEvents((prevState) => {
      return prevState.filter(event => event.id !== id);
    })
  }
 
  //FUNCTIONS  
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    })
    setShowModal(false); //hide modal after updating the list
  }

  return (
    <div className='App'>
      <Title title='Mario Kingdom Events' subtitle='Random text here' />

      <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
        <button onClick={() => setShowEvents(true)}>Show Evenets</button>
      </div>
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Item</button>
        </React.Fragment>
      ))}

      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent}/>
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
