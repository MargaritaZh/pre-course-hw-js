let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

function deepCopy(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }
  if (typeof obj === "object" && obj !== null) {
    const newObj = {};
    for (let key in obj) {
      newObj[key] = deepCopy(obj[key]);
    }
    return newObj;
  }
  return obj;
}

let passportWithAddress1 = deepCopy(passportWithAddress);
passportWithAddress1.address.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(passportWithAddress1.address.city);
