// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location){
    drivers.forEach(function(driver){
      if (location === driver.hometown)
      console.log(driver.name);
    });
}

function driversByRevenue(drivers){
  const driversCopy = []
  for (const driverObj of drivers){
    driversCopy.push(driverObj);
  }
   driversCopy.sort(function(a, b){return a.revenue - b.revenue});
  return driversCopy;
}

function driversByName(drivers){
  const driversCopy = []
  for (const driverObj of drivers){
    driversCopy.push(driverObj);
  }

  driversCopy.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return driversCopy;
}

function totalRevenue(drivers){
  const reducer = function (total, currentDriver){ return (total) + currentDriver.revenue};
  return drivers.reduce(reducer, 0);
}

function averageRevenue(drivers){
  let avg = totalRevenue(drivers) / drivers.length;
  return avg
}
