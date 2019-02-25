function logDriverNames(drivers) {
  drivers.forEach((d)=> console.log(d.name))
}

function logDriversByHometown(drivers, howmtown){
  drivers.filter((d)=> d.hometown == howmtown).forEach((d)=> console.log(d.name))
}

function driversByRevenue(drivers) {
 let newD = [...drivers]
 let newArr = newD.sort((a, b)=> a.revenue -b.revenue)
 return newArr
}

function driversByName(drivers) {
 let newD = [...drivers]
 let newArr = newD.sort((a, b)=> a.name.localeCompare(b.name))
 return newArr
}

function totalRevenue(drivers){
    return drivers.reduce(function(agg, el){
      return agg + el.revenue
  },0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
