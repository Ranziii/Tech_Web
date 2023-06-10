import React, {useContext} from 'react';
import FilmStore from './FilmStore';

export const FilmStoreContext = React.createContext(FilmStore);

export const useStore = ()=> useContext(FilmStoreContext)