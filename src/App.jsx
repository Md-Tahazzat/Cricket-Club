import "./App.css";
import PlayersContainer from "./components/PlayersContainer/PlayersContainer";
import Header from "./components/Shared/Header";

function App() {
  setTimeout(() => {
    const headerEl = document.getElementById("header");
    const cartEl = document.getElementById("cart");
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (
        lastScroll > currentScroll &&
        !headerEl.classList.contains("sticky-header")
      ) {
        headerEl.classList.add("sticky-header");
        cartEl.classList.add("sticky-cart");
      } else if (
        lastScroll < currentScroll &&
        headerEl.classList.contains("sticky-header")
      ) {
        headerEl.classList.remove("sticky-header");
        cartEl.classList.remove("sticky-cart");
      }
      lastScroll = currentScroll;
    });
  }, 1000);
  return (
    <div className="app">
      <Header></Header>
      <div className="container-body">
        <PlayersContainer />
      </div>
    </div>
  );
}

export default App;
