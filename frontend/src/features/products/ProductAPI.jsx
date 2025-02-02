export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  //filter ={"category":"name"}

  let queryString = '';
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }


  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:3000/products?${queryString}`
    );
    const data = await response.json();
    resolve({ data });
  });
}
