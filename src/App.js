import './App.css';
import TestAlert from './components/TestAlert/TestAlert'
import TestButton from './components/TestButton/TestButton'
import SpringDemo from './components/SpringDemo/SpringDemo'
import FramerDemo from './components/FramerDemo/FramerDemo'
import TopMenu from './components/TopMenu/TopMenu'

function App() {
  return (
    <div className="App">
      <TopMenu />
      <TestAlert text='Giovanni' variant='warning'/>
      <TestButton text='Allevi' variant='outline-primary' />
      <SpringDemo />
      <FramerDemo />
      <FramerDemo />
      <FramerDemo />
      <FramerDemo />
      <FramerDemo />
      <FramerDemo />
      <FramerDemo />
      <FramerDemo />
      <FramerDemo />
      <FramerDemo />
      <FramerDemo />
      
    </div>
  );
}

export default App;
