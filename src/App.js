import NavBar from './components/NavBar';
import data from './data'
import Card from './components/Card'

function App() {
    const Cards = data.map((x) => {
        return(
            <Card
                key = {x.id}
                item = {x}
            />
        );})
    return (
        <div className="App">
        <NavBar />
        <div className="card--container">
            {Cards}
        </div>
        </div>
  );
}

export default App;
