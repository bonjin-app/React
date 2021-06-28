import { useState } from 'react';

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
      <h1>React Dashboard</h1>
    </div>
  );
};

export default App;
