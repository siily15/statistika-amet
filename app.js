let occupations ={
    9321:{name:'Pakkijad', rate:0},
    1:{name: 'Juhid', rate: 0},
    2223:{name: 'Keemikud', rate: 0},
    2512:{name: 'Tarkavra arendajad', rate: 0},
    7115:{name: 'Puusepad', rate: 0}
    
}
fetch('http://andmebaas.stat.ee/sdmx-json/data/PA633/1+36+DBL97+DBL306+DBL425.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions')
.then(Response =>{
    return Response.json()
})

.then(data=>{
    console.log(data)

    data.structure.dimensions.observation[0].values.forEach((el, i) => {
        const occupationkey = (el.name.split(' ')[0])
        const dataSetkey = i + ':0:0:0:0'
        console.log(occupationkey)
        console.log(i)
        console.log(dataSetkey)

    });
})
