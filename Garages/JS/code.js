//https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json

die(true)
let range = 30;

let cities = null;
let garages = null;
let found = [];

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

async function getGarages()
{
    try 
    {
        const res = 
            await fetch('https://data.gov.il/api/action/datastore_search?resource_id=bb68386a-a331-4bbc-b668-bba2766d517d&limit=1000')
        const data = await res.json()
        return data.result.records 
        //console.log(data.result.records)
    } 
    catch (error) 
    {
        console.error("Error cities resource fetching ",error)
    }
}
//getGarages()


async function setup() 
{
    garages = await getGarages()

    cities = await getCities()
    if(cities)
    {
        cities.shift();

        let parts = Math.ceil(cities.length / range);

        const ul = document.querySelector("#pList");
         
        found = []
        for(let i=1; i<range; i++)
        {
            const objC = 
                new City(cities[i].semel_yeshuv, cities[i].name,
                    cities[i].english_name, cities[i].shem_napa,
                    cities[i].shem_moaatza);
                    
            available = garages.filter(g => g.yishuv==cities[i].name)             
                    
            if(available.length)
            {   
                let item = {};
                item[i] = available;            
                
                found.push(item)
                console.log(found)
            }
                            
            tbody.innerHTML += (available.length) ? objC.createRow(i) : objC.createRow(0); 
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
    die(true);

    let start = (No-1)*range
    let fin = Math.min((start+range), cities.length)

    console.log(`start=${start}, fin=${fin}`)

    tbody.innerHTML = ""
    
    found = []
    for(let i=start; i<fin; i++)
    {
        const objC = 
            new City(cities[i].semel_yeshuv, cities[i].name,
                cities[i].english_name, cities[i].shem_napa,
                cities[i].shem_moaatza);
                
                available = garages.filter(g => g.yishuv==cities[i].name) 
                    
                if(available.length)
                {                
                    let item = {};
                    item[i] = available;            
                    
                    found.push(item)
                    console.log(found)
                }
                                
                tbody.innerHTML += (available.length) ? objC.createRow(i) : objC.createRow(0); 
    }
}

function die(bool)
{
    if(bool) document.querySelector("#gCard").style.display = "none"; 
    else     document.querySelector("#gCard").style.display = "flex";   
}

function toGarages(keyGrgs)
{  
    die(false)

    const item = found.find(f => f[keyGrgs])
    const listG = item[keyGrgs]

    const ul = document.querySelector('#g');   
    ul.innerHTML = ""

    listG.forEach(g => 
    {
        const objG = new Garage(g._id, g.mispar_mosah, g.shem_mosah, g.cod_sug_mosah, 
            g.sug_mosah, g.ktovet, g.yishuv, g.telephone, g.mikud, g.cod_miktzoa,
            g.miktzoa, g.menahel_miktzoa, g.rasham_havarot);

            ul.innerHTML += objG.createRow();       
    });

    // window.location.href = `http://127.0.0.1:5501/garages.html?city=${cityName}` 
}

function details(id)
{
    let theGrg = null;

    for(let f of found)
    {
        let key = Object.keys(f);
        theGrg = f[key].find(g=>g._id==id)
        if(theGrg) break;
    }
    console.log(theGrg)

    document.querySelector('#modalLabel').innerText = 
    `מוסך: ${theGrg.shem_mosah}, מס': ${theGrg.mispar_mosah}`

    document.querySelector('#modalBody').innerHTML =
    `<p>סוג מוסך: ${theGrg.sug_mosah}, קוד הסוג: ${theGrg.cod_sug_mosah}</p>
     <p>כתובת: ${theGrg.ktovet}, ישוב: ${theGrg.yishuv}</p>
     <p>מיקוד: ${theGrg.mikud}, טלפון: ${theGrg.telephone}</p>
     <p>מקצוע: ${theGrg.miktzoa}, קוד המקצוע: ${theGrg.cod_miktzoa}</p>
     <p>מנהל מקצוע: ${theGrg.menahel_miktzoa}, רשם חברות: ${theGrg.rasham_havarot}</p>
    `
}
