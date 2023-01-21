import { useSelector } from 'react-redux';
import { Character } from '../Character';

export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    favorites.map(character => (
        <Character key={character.name} character={character} />
      ))
  )
};