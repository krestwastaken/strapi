import Navbar from "./Navbar";
import { useGlobalContext } from "./context";

const App = () => {
 const {isSidebarOpen, openSidebar}=useGlobalContext()

  
  return <main>Strapi Starter
    <Navbar openSidebar={openSidebar} />
  </main>;
};
export default App;
