function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver["name"]);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location)
      console.log(driver.name);
  })
}

function driversByRevenue(drivers) {
  let copy = [...drivers];
  return copy.sort(function (a, b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  let copy = [...drivers];
  return copy.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(driver) {
  return driver.reduce(function(agg, el, i, arr) {
    return agg + el.revenue;
  }, 0)
}

function averageRevenue(drivers) {
  let total = totalRevenue(drivers);
  return total / drivers.length;
}
