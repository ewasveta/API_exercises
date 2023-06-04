class City
{
    constructor(townSign, hebName=0, engName=0, regionalCenter=0, councilName=0)
    {
        this.semel_yeshuv = townSign
        this.name = hebName
        this.english_name = engName
        this.shem_napa = regionalCenter
        this.shem_moaatza = councilName
    }

    createRow()
    {        
        return `<tr>
                    <th scope="row">${this.semel_yeshuv}</th>
                    <td>${this.name}</td>
                    <td>${this.english_name}</td>
                    <td>${this.shem_napa}</td>
                    <td>${this.shem_moaatza}</td>
                    <td>
                        <button onclick="toGarages('${this.name}')">
                            <i class="fa-solid fa-eye" style="color:carob;"></i>
                        </button>
                    </td>
                </tr>`
    }
}