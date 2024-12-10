let products = [
  { id: 1, productName: "Sneakers", price: 2000, quantity: 3 },
  { id: 2, productName: "T-shirt", price: 1500, quantity: 4 },
  { id: 3, productName: "Cargo Pants", price: 2500, quantity: 6 },
];
const addProducts = (productName, price, quantity) => {
  console.log("after adding");
  //   console.log(products.at(-1));// products vanney array ko last index ko sabai properties print hanxa
  products.push({
    id: products.at(-1).id + 1,
    productName,
    price,
    quantity,
  });
};
const getProducts = () => {
  for (let product in products) {
    console.log(products[product]);
  }
  return getProducts;
};

const getTotalPrice = () => {
  console.log("total price is:");
  const total = products.reduce((acc, curr) => {
    return acc + curr.price * (curr?.quantity ?? 0);
  }, 0);
  console.log(total);
};

const deleteProducts = (id) => {
  console.log("after deleting:");
  products = products.filter((product) => product.id !== id);
}; //findIndex,splice

const updateProduct = (id, fields) => {
  //findIndex
  console.log("after update:");
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      //   if (field.name) products[i].name = field.name;
      //   if (field.price) products[i].price = field.price;
      products[i] = {
        ...products[i],
        ...fields, //fields le override garxa kei change or update vayo vaney natra product nai spread hunxa mathi ko
      };
      return;
    }
  }
}; //findIndex
getProducts();
addProducts("watch", 3000, 2);
getProducts();
deleteProducts(3);
getProducts();
updateProduct(1, { productName: "Boots" });
getProducts();
getTotalPrice();
