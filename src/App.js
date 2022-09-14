import './App.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ContactForm from './components/ContactForm';
import Header from './components/Header';

const theme = extendTheme ({
  styles: {
    global: {
      '*': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        bg: "#E6EBEF",
        textAlign: 'left'
      },
      'h1': {
        fontWeight: '700',
        fontSize: '32px',
        lineHeight: '39px',
        mt: "101px",
      }
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme} >
      <div className="App">
        <Header />
        <ContactForm />
      </div>
    </ChakraProvider>
  );
}

export default App;

