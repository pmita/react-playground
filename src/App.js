//importing useState hook from the react library
import React, { useState } from 'react'; 
//COMPONENTS
import Title from './components/Title';
import Modal from './components/Modal';
import './App.css';

function App() {
  //STATE & VARIALBES
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {title: 'mario birthdat is bash', id: 1},
    {title: 'browser live stream', id: 2},
    {title: 'race on moo moo farm', id: 3},
  ]);

  //EVENTS
  const handleClick = (id) => {
    setEvents((prevState) => {
      return prevState.filter(event => event.id !== id);
    })
  }

  //FUNCTIONS
  const handleClose = () => {
    setShowModal(false)
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

      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <h2>10% off code</h2>
        <p>Use Panos at checkout</p>
      </Modal>}
    </div>
  );
}

export default App;
