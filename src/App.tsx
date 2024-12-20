import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import MainLayout from './pages/MainLayout';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        <Topbar />
        <MainLayout />
      </div>
    </div>
  );
}

export default App;
