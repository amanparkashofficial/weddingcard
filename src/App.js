import { useState } from "react";
import OpeningScreen from "./components/OpeningScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Couple from "./components/Couple";
import Satsang from "./components/Satsang";
import Haldi from "./components/Haldi";
import Wedding from "./components/Wedding";
import Reception from "./components/Reception";
import Contact from "./components/Contact";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <OpeningScreen openInvite={() => setOpened(true)} />}

      {opened && (
        <>
          <Navbar />
          <Home />
          <Couple />
          <Haldi />
          <Wedding />
          <Reception />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;