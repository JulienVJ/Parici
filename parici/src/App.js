/* import Register from './components/Register'; */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<AppContainer><AccountBox /></AppContainer>} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
