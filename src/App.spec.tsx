import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';
import App from './App';

const WrapWithQueryClient: React.FC = ({ children }) => {
  const qc = new QueryClient();
  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
};

describe('App.tsx', () => {
  it('App renders without crash', () => {
    const result = render(
      <WrapWithQueryClient>
        <App />
      </WrapWithQueryClient>,
    );

    expect(result).toBeTruthy();
  });
});
