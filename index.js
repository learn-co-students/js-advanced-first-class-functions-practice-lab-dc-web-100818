// Code your solution in this file!
const logDriverNames = function(drivers) {
  return drivers.forEach(function(el) { console.log(el.name)
});
};

const logDriversByHometown = function(drivers, location) {
  const driversFromLocation = drivers.filter(function(driver) { return driver.hometown === location; });
  return driversFromLocation.forEach(function(driver) { console.log(driver.name)});
};

const driversByRevenue = function(drivers) {
  const driversSortedByRevenue = [...drivers];
  return driversSortedByRevenue.sort(function (a, b) { return a.revenue - b.revenue; });
}

const driversByName = function(drivers) {
  const driversSortedByName = [...drivers];
  return driversSortedByName.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function(drivers) {
  let total = 0;
  return drivers.reduce((function (total, el, i, drivers) {
    return total += el.revenue
  }), 0);
  return total;
}

const averageRevenue = function(drivers) {
  const total = totalRevenue(drivers);
  return total / drivers.length;
}
