// Code your solution in this file!

function logDriverNames(drivers) {
  const callback = function (el, i, arr) {
    console.log(el.name)
  };
  return drivers.forEach(callback);
}

function logDriversByHometown(drivers, location) {
    const callback = function (el, i, arr) {
      if (location === el.hometown){
        return console.log(el.name)}
    };
    return drivers.forEach(callback);
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];
  return driversCopy.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  const driversCopy = [...drivers];
  return driversCopy.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  const reducer = function (total, currentValue) {
    return total + currentValue.revenue;
  }
  return drivers.reduce(reducer, 0);
}

function averageRevenue(drivers) {
  total = drivers.length;
  return totalRevenue(drivers)/total;
}
