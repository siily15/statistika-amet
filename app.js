let occupations ={
    0:"Pakkijad",
    1:"Juhid",
    2:"Keemikud",
    3:"Tarkavra arendajad",
    4:"Puusepad"
    
}
fetch('http://andmebaas.stat.ee/sdmx-json/data/PA633/1+36+DBL97+DBL306+DBL425.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions')
.then(Response =>{
    return Response.json()
})
.then(data =>{
    console.log(data)
})