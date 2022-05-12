import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchComp from './components/FetchComp'
import People from './view/People'
import Planet from './view/Planet'

function App() {
  const Error = ()=>{
    return (
      <fieldset>
        <legend> ERROR, Order 66</legend>
      </fieldset>
    )
  }
  return (
    <BrowserRouter>
      <h1> Order 66 finder!</h1>
      <FetchComp />

      <Routes>
        <Route path="/people/:id" element={<People />}/>
        <Route path="/planet/:id" element={<Planet />}/>
        <Route path="*" element={Error}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
