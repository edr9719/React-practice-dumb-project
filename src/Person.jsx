import './Person.css';
import { useState } from 'react';

function Person({ person }) {
  const [hideText, setHideText] = useState(true);

  const description = document.querySelector('.biography');

  return (
    <section>
      <h1>{person.name}</h1>
      <img
        className='avatar'
        src={person.imageUrl}
        alt={'Photo of' + person.name}
        onClick={() => setHideText(!hideText)}
        style={{ width: person.imageSize, height: person.imageSize }}
      />
      <i></i>
      <span className='click-me'>Click Me</span>
      {!hideText && <p className='biography'>{person.description}</p>}
    </section>
  );
}

export default Person;
