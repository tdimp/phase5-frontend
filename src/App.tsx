import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import NewTeamForm from './components/NewTeamForm';
import TeamList from './Containers/TeamList';
import PlayerList from './Containers/PlayerList';
import Team from './Containers/Team';
import { UserProvider } from './context/UserContext';

const App = () => {

  // Need to think of component hierarchy and state management. Redux or useContext?

  return (
    <div className="App">
      <h1>Daily Hat Trick</h1>
      <Router>
        <UserProvider>
          <NavBar /> <br />
          <Routes>
            <Route path="/teams" element={<TeamList />} />
            <Route path="/teams/new" element={<NewTeamForm />} />
            <Route path="/teams/:id" element={<Team />} />
          </Routes>
        </UserProvider>

        <Routes>
        <Route path="/players/page/:page" element={<PlayerList />} />
        </Routes>
              
      </Router>
      
    </div>
  );
}

export default App;
