class ListCities {

    constructor() 
    {
        this.cList = []
    }

    getCity(index){
        return this.cList[index]
    }

    addCity(city){
        this.cList.push(city)
    }

    addList(cities){
        this.cList = cities
    }

    getList()
    {
        return this.cList
    }
}
