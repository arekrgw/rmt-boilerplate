import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { StoreProvider } from '@stores';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import queries from 'src/api/queries';

ReactDOM.render(
  <QueryClientProvider client={queries.queryClient}>
    <StoreProvider>
      <ChakraProvider resetCSS>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </StoreProvider>
  </QueryClientProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
