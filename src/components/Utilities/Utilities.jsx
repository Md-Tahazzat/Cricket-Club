const addToLocalStorage = (id) => {
  let savedCart = getFromLocalStorage("cart");
  if (savedCart) {
    savedCart.push(id);
  } else {
    savedCart = [];
    savedCart.push(id);
  }
  localStorage.setItem("cart", JSON.stringify(savedCart));
};

const removeFromLocalStorage = (id) => {
  let savedCart = getFromLocalStorage("cart");
  const remaining = savedCart.filter((el) => el !== id);
  localStorage.setItem("cart", JSON.stringify(remaining));
};

const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export { addToLocalStorage, removeFromLocalStorage, getFromLocalStorage };
