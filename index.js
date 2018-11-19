const logDriverNames = function logNames(driverArr) {
  for (const el of driverArr) {
    console.log(el.name)
  }
}

const logDriversByHometown = function logNames(driverArr, location) {
  for (const el of driverArr) {
    if (el.hometown === location) {
      console.log(el.name)
    }
  }
}

const driversByRevenue = function sortByRevenue(driverArr) {
  let returnArr = []

  for (const el of driverArr) {
    returnArr.push(el)
  }

  returnArr.sort(function (a, b) {
    return a.revenue - b.revenue
  })

  return returnArr;
}

const driversByName = function sortAlphabetically(driverArr) {
  let returnArr = []

  for (const el of driverArr) {
    returnArr.push(el)
  }

  returnArr.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  return returnArr;
};

  const totalRevenue = function (driverArr) {
    const reducer = function (accumulator, element) {
      return accumulator + element.revenue};
    return driverArr.reduce(reducer, 0)
  }

  const averageRevenue = function (driverArr) {
    return totalRevenue(driverArr)/driverArr.length
  }
