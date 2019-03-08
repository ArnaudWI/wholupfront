import React from 'react';

//import de ma navigation
import Navigation from './Components/Navigation/Navigation';

// import de mes Reducers
import addContact from './Components/Reducers/addcontact.reducer';
import userData from './Components/Reducers/user.reducer';
// import de mes outils Redux
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

// Création de mon Store
const store = createStore(combineReducers({addContact, userData}));

export default class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <Navigation/>
    </Provider>);
  }
}
