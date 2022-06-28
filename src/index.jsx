import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
     <Login />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
