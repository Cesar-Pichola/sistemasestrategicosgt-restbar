import { useEffect } from "react";
import "./App.css";
import RoutersApp from "./routers/router";
import { useThemeStore } from "./stores/themeStore";

function App() {
  const themeColor = useThemeStore((state) => state.themeColor);

  useEffect(() => {
    // themeScrollChange(themeColor);
    document.documentElement.style.setProperty('--theme-color', themeColor);

  }, [themeColor]);

  return <RoutersApp></RoutersApp>;
}

export default App;

// const themeScrollChange = (color: String) => {
//   document.body.style.scrollbarColor = `${color} white`;
  
//   // WebKit (Chrome, Edge, Safari)
//   const style = document.createElement("style");
//   style.innerHTML = `
//     ::-webkit-scrollbar {
//       width: 12px;
//     }

//     ::-webkit-scrollbar-thumb {
//       background-color: ${color};
//       border-radius: 6px;
//     }

//     ::-webkit-scrollbar-track {
//       background: white;
//     }
//   `;
//   document.head.appendChild(style);
// };
