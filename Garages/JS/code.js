//https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json

let cities = null;
let range = 30;
const tbody = document.querySelector("#preview");

async function getCities()
{
    try 
    {
        const res = 
            await fetch('https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json')
        const data = await res.json()
        return data;
        //console.log(data)
    } 
    catch (error) 
    {
        console.log("Error cities resource fetching ",error)
    }
}
//getCities()


async function setup() 
{
    cities = await getCities()
    if(cities)
    {
        cities.shift();

        let parts = Math.ceil(cities.length / range)

        const ul = document.querySelector("#pList") 
        
        for(let i=0; i<range; i++)
        {
            const objC = 
                new City(cities[i].semel_yeshuv, cities[i].name,
                    cities[i].english_name, cities[i].shem_napa,
                    cities[i].shem_moaatza);
                    
            tbody.innerHTML += objC.createRow();
        }

        for(let j=1; j<=parts; j++)
        {
            ul.innerHTML +=
            `
                <li class="page-item">
                    <a onclick="fillPart('${j}')" class="page-link text-warning-emphasis fw-bold" href="#">${j}</a>
                </li>
            `
        }   
    }
}  
setup() 

function fillPart(No)
{ 
    let start = (No-1)*range
    let fin = Math.min((start+range), cities.length)

    console.log(`start=${start}, fin=${fin}`)

    tbody.innerHTML = ""
    
    for(let i=start; i<fin; i++)
    {
        const objC = 
            new City(cities[i].semel_yeshuv, cities[i].name,
                cities[i].english_name, cities[i].shem_napa,
                cities[i].shem_moaatza);
                
        tbody.innerHTML += objC.createRow();
    }
}

function toGarages(cityName)
{
    console.log(cityName)
}




        // cities.forEach((c) => 
        // {
        //     const objC = 
        //         new City(c.semel_yeshuv,c.name,c.english_name,c.shem_napa,c.shem_moaatza)

        //     tbody.innerHTML += objC.createRow();
        // }); 