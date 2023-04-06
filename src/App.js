
import Home from './home';
import {Route} from 'react-router-dom';

function App() {
  const name = 'style test...';
  const style = {
    backgroundColor: 'black',
    color: 'green',
    fontSize: 20,
    padding: '1rem'
  }
  return (
    <div>
      <Route path="/home" component={Home} />
      <div style={style}>{name}</div>
    </div>
  );
}

export default App;
