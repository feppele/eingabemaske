import { Route, Switch } from 'react-router-dom';
import { useState, createContext, useContext } from "react";

// Pages
import MainPage from './pages/MainPage';
//ContextProvider
import {ContextProvider} from './ContextProvider';


function App() {


  return(
    <div>

      <ContextProvider>
        <Switch>
          <Route path='/' exact>
            <MainPage />
          </Route>
        </Switch>
      </ContextProvider>


    </div>
  );

}

export default App;

