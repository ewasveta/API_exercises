class Country
{
    constructor(code, chance, oName=0, flagUrl=0, flagAlt=0)
    {
        this.code = code
        this.probability = chance
        this.officialName = oName
        this.flagUrl = flagUrl
        this.flagAlt = flagAlt
        //console.log( this.flagUrl)
    }

    createRow()
    {        
        return `<tr>
                    <th scope="row">${this.code}</th>
                    <td>${this.officialName}</td>
                    <td>${this.probability}</td>
                    <td><img src="${this.flagUrl}" alt="${this.flagAlt}"></td>
                </tr>`
    }
}