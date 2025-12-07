import { useState } from "react";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen]=useState(false)

  const openSidebar = ()=>{
    setIsSidebarOpen(true)
  }
  const closeSidebar = ()=>{
    setIsSidebarOpen(false)
  }
  return <h2>Strapi Starter</h2>;
};
export default App;
