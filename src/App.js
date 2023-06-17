import SubButtonComponent from './components/SubButton';
import AddButtonComponent from './components/AddButton';
import DisplayComponent from './components/Display';

import './App.css';
import Form from './components/formComponent/Form';
function App() {
  return (
    <div>
      <Form />
      <SubButtonComponent />
      <DisplayComponent />
      <AddButtonComponent />
    </div>
  );
}

export default App;
