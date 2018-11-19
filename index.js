// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(driver){
    if (driver.hometown === town) {
      console.log(driver.name);
    };
  });
}

function driversByRevenue(drivers) {
  let arr = [];
  for (const el of drivers){
    arr.push(el)
  };
  arr.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return arr;
}

function driversByName(drivers) {
  let arr = [];
  for (const el of drivers){
    arr.push(el);
  };
  arr.sort(function(a, b){
    return (a.name).localeCompare(b.name);
  });
  return arr;
}

function totalRevenue(drivers){
  let sum = drivers.reduce(function(acc, currValue){
    return acc + currValue.revenue;
  }, 0);
  return sum;
}

function averageRevenue(drivers){
  let sum = totalRevenue(drivers);
  return sum / drivers.length;
}
