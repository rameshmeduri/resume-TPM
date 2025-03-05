import React from 'react';
import ReactDOM from 'react-dom/client';
import { IconContext } from 'react-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import './dark.css';

import Header from './components/Header';
import Summary from './components/Summary';
import Tags from './components/Tags';
import SkillSet from './components/SkillSet';
import Experience from './components/Experience';
import Education from './components/Education';

const Devider = () => <div className="rs-border-bottom" />;

const App = () => {
  return (
    <IconContext.Provider value={{ color: '', className: 'global-class-name' }}>
      <div className="container">        
        <Header />
        <Devider />
        <Summary />
        <Tags />
        <SkillSet />
        <Experience />
        <Education />
      </div>
    </IconContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);