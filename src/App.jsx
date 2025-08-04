import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  // Use /portfolio basename for production (GitHub Pages), empty for development
  const basename = import.meta.env.PROD ? "/portfolio" : "";
  
  return (
    <>
      <Toaster />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
