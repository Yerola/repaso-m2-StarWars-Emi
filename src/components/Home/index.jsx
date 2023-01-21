import { useState } from 'react'; 
import { connect } from 'react-redux';
import { getCharacter } from '../../redux/actions';
import { Character } from '../Character';

function Home(props) {
  const [input, setInput] = useState('');

  const handleChange = (ev) => {
    setInput(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.getCharacter(input);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-personaje">Busca un personaje</label>
        <input type="text" id="input-personaje" onChange={handleChange} />
      </form>

      {
        props.results.map(character => (
          <Character key={character.name} character={character} />
        ))
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    results: state.results
  }
}

export default connect(mapStateToProps, { getCharacter })(Home);
