import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';

import App from './App.jsx';
import Pokedex from './components/Pokedex.jsx';
import PokemonGo from './components/PokemonGo.jsx';
import PokemonDetails from './components/PokemonDetails.jsx';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Pokedex />,
      },
      {
        path: 'pokemon-go',
        element: <PokemonGo />,
      },
      {
        path: 'pokemon/:id',
        element: <PokemonDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);