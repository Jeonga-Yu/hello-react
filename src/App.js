import Hello from './Hello';

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
      <Hello/>
      <div style={style}>{name}</div>
    </div>
  );
}

export default App;
