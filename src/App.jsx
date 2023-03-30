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
      if (lastScroll < currentScroll && currentScroll < 48) {
        if (!headerEl.classList.contains("hide")) {
          headerEl.classList.add("hide");
        }
      }
      if (lastScroll > currentScroll && !headerEl.classList.contains("show")) {
        headerEl.classList.add("show");
        headerEl.classList.remove("hide");
        cartEl.classList.add("sticky-cart");
      } else if (
        lastScroll < currentScroll &&
        headerEl.classList.contains("show")
      ) {
        headerEl.classList.remove("show");
        headerEl.classList.add("hide");
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
