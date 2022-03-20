import './App.css';
import { GroupScene, GroupCard } from '../groups';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Splid remake
        </p>
      </header>
      <GroupScene>
        <GroupCard />
      </GroupScene>
    </div>
  );
}

export default App;
