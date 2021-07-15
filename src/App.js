import Header from "./components/Header";
import Main from './components/Main';
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="app">
      <Header />
      <div className='non__header'>
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
