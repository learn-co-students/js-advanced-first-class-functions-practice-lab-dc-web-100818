function logDriverNames(drivers){
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  const array = [...drivers]
   array.forEach(function(driver) {
    if(driver.hometown === location)
    console.log(driver.name);
  })
}

function driversByRevenue(drivers){
   const newdrivers = [...drivers]
    return newdrivers.sort(function(a, b){
    return a.revenue - b.revenue;
   })
}

function driversByName(drivers) {
  const newdrivers = [...drivers]
  return newdrivers.sort(function(a, b) {
    return (a.name).localeCompare(b.name);
  })
}

function totalRevenue(drivers){
  let total = 0
  drivers.map(driver => total += driver.revenue)
  return total
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
