import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background : #fff;
  }`

function App() {
  return (
    <>
    <Reset/>
    <GlobalStyles/>
    </>
  );
}

export default App;
