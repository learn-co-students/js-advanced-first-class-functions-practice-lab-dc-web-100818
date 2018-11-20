// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function(el){ console.log(el.name) })
}

function logDriversByHometown(arr, hometown) {
  arr.forEach(function (el) {
    if (el.hometown === hometown) {
      console.log(el.name)
    }
  })
}


function driversByRevenue(arr) {
    return arr.slice().sort(function (driver1, driver2) {
      return driver1.revenue - driver2.revenue
  })
}

function driversByName(arr) {
  return arr.slice().sort(function (driver1,driver2) {
    return driver1.name.localeCompare(driver2.name)
  })
}

function totalRevenue(arr) {
  const reduceRevenue = function (ags,elo) {
    return  ags + elo.revenue
  }
  return arr.reduce(reduceRevenue,0)
}

function averageRevenue(arr) {
    return totalRevenue(arr) / arr.length
}
