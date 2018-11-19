// Code your solution in this file!
function logDriverNames(drivers) {
  for (person of drivers) {
    console.log(person.name);
  }
}

function logDriversByHometown(drivers, hometown) {
  for (person of drivers) {
    if (person.hometown === hometown) {
      console.log(person.name);
    }
  }
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
    return (a.name).localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  let total = 0;
    drivers.forEach(function(driver) {
        total += driver.revenue
    })
    return total;
}

function averageRevenue(drivers) {
  let sum, avg = 0;
  sum = totalRevenue(drivers);
  return avg = sum / drivers.length;
}
