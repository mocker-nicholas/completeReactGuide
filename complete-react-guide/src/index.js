import ReactDOM from "react-dom/client";

// You can import css into your main JS file
import "./index.css";
// App is the little element we created in our app.js file
import App from "./App.js";

// Use method from react library (createRoot) to inject your element into to public index root div
const root = ReactDOM.createRoot(document.getElementById("root"));

// Using the react method render, we can tell react to put the compent we created into our public html root
root.render(<App />);
