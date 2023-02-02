import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Contact, About, SignIn, Phonebook } from './components';

import './styles.css';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

const temp_props = "Car Inventory"

ReactDOM.render(
  <React.StrictMode>
     <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>  
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
         <Route path='/inventory'>
          <Phonebook></Phonebook>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
         <Route path='/signin'>
        <SignIn></SignIn>
        </Route>  


      </Switch>
    </Router>
     </Provider>
     </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);