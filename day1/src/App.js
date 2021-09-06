import './App.css';
import Nav from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <Nav title = "TextUtils" about="About us"/>
      <div className="container">
        <TextForm heading="Enter your text here"/>
      </div>
    </>
  );
}

export default App;
