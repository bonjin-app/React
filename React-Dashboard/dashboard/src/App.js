import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {

  const [sidebarOpen, setsidebarOpen] = useState(false)

  const openSidebar = () => {
    setsidebarOpen(true)
  }

  const closeSidebar = () => {
    setsidebarOpen(false)
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <h1>React Dashboard</h1>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
};

export default App;
