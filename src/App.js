import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components';
import Header from './component/Header/index';

const GlobalStyles = createGlobalStyle`
  body {
    background : #fff;
  }`

function App() {
  return (
    <>
    <Reset/>
    <GlobalStyles/>
    <Header/>
    </>
  );
}

export default App;
