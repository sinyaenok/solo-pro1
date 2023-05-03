import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components';
import Header from './component/Header/index';
import Main from './pages/Main/index';

const GlobalStyles = createGlobalStyle`
  body {
    background : #fff;
  }`

function App() {
  return (
    <>
    <Reset/>
    <GlobalStyles/>
    {/* <Header/> */}
    <Main/>
    </>
  );
}

export default App;
