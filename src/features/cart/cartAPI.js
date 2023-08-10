export function addToCart(productInfo) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:5000/cart', {
      method: 'POST',
      body: JSON.stringify(productInfo),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
export function fetchCartItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:5000/cart?userId=${userId}`);
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:5000/cart/' + update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:5000/cart/' + itemId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data: { id: itemId } });
  });
}
// export function findAddedItem(itemId) {
//   return new Promise(async (resolve) => {
//     const response = await fetch('http://localhost:5000/cart/' + itemId);
//     const data = await response.json();
//     // TODO: on server it will only return some info of user (not password)
//     resolve({ data: { id: itemId } });
//   });
// }

export function resetCart(userId) {
  // get all items of user's cart - and then delete each
  return new Promise(async (resolve) => {
    const response = await fetchCartItemsByUserId(userId);
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({status:'success'})
  });
}



