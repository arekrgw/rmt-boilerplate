import * as React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import routes from '@app/routes';
import { history } from '@app/history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        {Object.values(routes).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
