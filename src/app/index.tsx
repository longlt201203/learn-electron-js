import { createRoot } from "react-dom/client";
import { Button } from "./components/ui/button";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([]);

function App() {
  return <Button>Click me!</Button>;
}

const root = createRoot(document.body);
root.render(<App />);
