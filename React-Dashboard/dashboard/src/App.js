import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
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
      <Main/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
};

export default App;
