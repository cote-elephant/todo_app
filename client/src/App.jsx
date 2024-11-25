import Header from "@pages/Header";
import { Outlet } from "react-router-dom";
// Du kannst in diesem Projekt einfach über @components auf den Ordner src/components zugreifen.
// somit kannst du mit '@components/deineDatei' importieren und musst nicht den ganzen Pfad schreiben.
// dass erspart dir auch das schreiben von '../' wenn du eine Datei importierst die sich in einem anderen Ordner befindet.

// Varianten:
// @components
// @pages

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
