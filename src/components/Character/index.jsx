import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../../redux/actions';

export const Character = ({ character }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const shouldAddToFavorites = pathname === '/';

  const handleClick = () => {
    if (shouldAddToFavorites) {
      dispatch(addToFavorites(character))
    } else {
      dispatch(removeFromFavorites(character.name))
    }
  }

  return (
    <article>
      <h2>{character.name}</h2>
      <p>{character.mass} kg.</p>
      <p>{character.height} cm.</p>
      <button onClick={handleClick}>{shouldAddToFavorites ? '💖' : '💔'}</button>
    </article>
  )
}
