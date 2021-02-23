import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css';

function App() {
  function test() {
    alert('a');
  }
  return (
    <div>
      <div className="container">
      <ExperienceBar/>
      </div>
    </div>
  );
}

export default App;
