
import './App.css';
import Test from './Test';
import { Provider } from 'react-redux'
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Test />
      </div>
    </Provider>

  );
}

export default App;
