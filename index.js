// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if(driver.hometown === location)
      console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
  const arr = [...drivers]

  return arr.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  const arr = [...drivers]

  return arr.sort(function(a, b) {
    return (a.name).localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  const sumRev = function(agg, el, i, arr) {
    return agg + el.revenue
  }

  return drivers.reduce(sumRev, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
