//importing useState hook from the react library
import { useState } from 'react'; 
import './App.css';

function App() {
  //STATE & VARIALBES
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



  return (
    <div className='App'>

      <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
        <button onClick={() => setShowEvents(true)}>Show Evenets</button>
      </div>
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Item</button>
        </div>
      ))}
    </div>
  );
}

export default App;
