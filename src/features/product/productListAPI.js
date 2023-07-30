export function fetchAllproducts() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:5000/products') 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchProductsWithFilter(filter) {
  return new Promise(async (resolve) =>{
    const response = await fetch(`http://localhost:5000/products${filter}`) 
    const data = await response.json()
    resolve({data})
  }
  );
}


// export function fetchAllCategories(amount = 1) {
//   return new Promise(async (resolve) =>{
//     const response = await fetch('http://localhost:5000/categories') 
//     const data = await response.json()
//     resolve({data})
//   }
//   );
// }

