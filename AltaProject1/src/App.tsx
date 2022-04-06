import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from './layout/Main/Home';
import FilterForm from './layout/Component/Form/FilterForm';

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
