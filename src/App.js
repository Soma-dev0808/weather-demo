import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withFirebase } from './config';
import WeatherPage from './Components/Pages/WeatherPage';
import AuthPage from './Components/Pages/AuthPage';
import ResetPage from './Components/Pages/ResetPage';
import NotificationPage from './Components/Pages/NotificationPage';

function App() {
  // This is to change background image of webpage depending on weather.
  const [weatherStatus, setWeatherStatus] = useState('app-container Clear');
  return (
    <BrowserRouter>
      <section className={weatherStatus}>
        <div className="color-filter">
          <Route
            exact
            path="/"
            render={props => (
              <WeatherPage {...props} weatherStatus={setWeatherStatus} />
            )}
          />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/reset/password" component={ResetPage} />
          <Route exact path="/notification" component={NotificationPage} />
        </div>
      </section>
    </BrowserRouter>
  );
}

export default withFirebase(App);
