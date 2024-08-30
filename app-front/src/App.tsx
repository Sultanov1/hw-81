import Toolbar from "./features/components/Toolbar.tsx";
import Home from "./features/Home.tsx";

const App = () => {
    return (
       <>
           <header>
               <Toolbar/>
           </header>
           <main>
               <Home/>
           </main>
       </>
    );
};

export default App;