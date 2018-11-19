// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(arr, element) {
  arr.forEach(function(driver) {
    if (driver.hometown === element) {
      console.log(driver.name)
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(driverA, driverB) {
    return driverA.name.localeCompare(driverB.name)
  });
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return total + currentDriver.revenue;
  },0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}