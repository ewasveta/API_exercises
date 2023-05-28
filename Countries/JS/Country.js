class Country
{//l.country_id, l.probability
    constructor(id, chance, oName=0, flagUrl=0, flagAlt=0)
    {
        this.id = id
        this.probability = chance
        this.officialName = oName
        this.flagUrl = flagUrl
        this.flagAlt = flagAlt
        //console.log( this.flagUrl)
    }

}