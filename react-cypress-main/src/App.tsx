import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Button, Typography} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-testid="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input style={{border: "3px solid red", marginTop: "16px"}} type="number" min={5} data-testid="testinput"/>
        <Box style={{marginTop: "16px"}}>
          <Button variant="contained" datatest-id="button-default">Default</Button>
          <Button variant="contained" color="primary">
            <Typography>
              Primary
            </Typography>
          </Button>
          <Button variant="contained" color="secondary">
            <Typography>
              Secondary
            </Typography>
          </Button>
          <Button variant="contained" disabled>
            <Typography>
              Disabled
            </Typography>
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            <Typography>
              Link
            </Typography>
          </Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
