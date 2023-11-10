// Users Older Than 30
function older30(users) {
  let count = 0;
  for (let user of users) {
    if (user.age > 30) {
      count++;
    }
  }
  return count;
}

// Average age of users
function averageAge(users) {
  if (users.length === 0) {
    return 0;
  }

  let totalAge = 0;
  for (let user of users) {
    totalAge += user.age;
  }

  return totalAge / users.length;
}

// Oldest user
// -- similar to below --

// Youngest user
function youngest(users) {
  if (users.length === 0) {
    return -1;
  }

  let youngestUser = users[0];
  for (let i = 1; i < users.length; i++) {
    if (users[i].age < youngestUser.age) {
      youngestUser = users[i];
    }
  }

  return `${youngestUser.firstName} is the youngest with the age of ${youngestUser.age}.`;
}

// Get full names
function getNames(users) {
  if (users.length === 0) {
    return -1;
  }

  return users.map((user) => user.firstName + " " + user.lastName);
}

// Fetch emails
function getEmails(users) {
  if (users.length === 0) {
    return -1;
  } else {
    return users.map((user) => user.email);
  }
}

// Most expensive product
function mostExpensive(obj) {
  if (obj.items.length === 0) {
    return undefined;
  }

  let maxPrice = obj.items[0].price;
  let maxPriceName = obj.items[0].productName;

  for (let i = 1; i < obj.items.length; i++) {
    if (obj.items[i].price > maxPrice) {
      maxPrice = obj.items[i].price;
      maxPriceName = obj.items[i].productName;
    }
  }

  return maxPriceName;
}

// Most affordable product
function mostAffordable(obj) {
  if (obj.items.length === 0) {
    return undefined;
  } else {
    let minPrice = Infinity;
    let affordableProduct = "";

    obj.items.forEach((item) => {
      let totalPrice = item.price * item.quantity;
      if (totalPrice < minPrice) {
        minPrice = totalPrice;
        affordableProduct = item.productName;
      }
    });

    return affordableProduct;
  }
}

// Calcualte the total price
function calculateTotalPrice(cart) {
  if (cart.items.length === 0) return undefined;
  let totalPrice = 0;

  cart.items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return totalPrice;
}

// Get names
function getProductNames(obj) {
  return obj.items.map((item) => item.productName);
}

// Get brands
function getProductBrands(obj) {
  return obj.items.map((item) => item.specifications.brand) || [];
}
