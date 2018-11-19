// Code your solution in this file!
function logDriverNames(arr){
  arr.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(arr, loc){
  arr.forEach(function(driver){
    if (driver.hometown === loc) {
      console.log(driver.name);
    };
  });
}

function driversByRevenue(arr){
  let drivers = [...arr]
  return drivers.sort(function(a, b){
    return a.revenue - b.revenue;
  });
}

function driversByName(arr){
  let drivers = [...arr]
  return drivers.sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(arr){
  return arr.reduce(function(agg, val){
    return agg + val.revenue
  }, 0);
}

function averageRevenue(arr){
  return totalRevenue(arr)/(arr.length)
}
