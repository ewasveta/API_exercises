//https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json

die(true)
const range = 18;   //cities per display
const block = 15;   //paginator chapter range

let pages = 0;
let allCities = null;
let cities = null;
let garages = null;
let found = [];
let mono = [];

const tbody = document.querySelector("#preview");
const ul = document.querySelector("#pList");

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
        console.error("Error cities resource fetching ",error)
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
        console.error("Error garages resource fetching ",error)
    }
}
//getGarages()


async function setup() 
{
    allCities = new ListCities()

    garages = await getGarages()

    cities = await getCities()
    if(cities)
    {
        cities.shift();

        pages = Math.ceil(cities.length / range);
       
        cities.forEach((c) => 
        {
            const objC = new City(c.semel_yeshuv, c.name, 
                c.english_name, c.shem_napa, c.shem_moaatza);

            allCities.addCity(objC)
        });
         
        found = []        
        for(let i=1; i<=range; i++)
        {                    
            available = garages.filter(g => g.yishuv==allCities.getCity(i).name)             
                    
            if(available.length)
            {   
                let item = {};
                item[i] = available;            
                
                found.push(item)
            }                            
            tbody.innerHTML += (available.length) ? 
                allCities.getCity(i).createRow(i,0) : 
                allCities.getCity(i).createRow(0,0) ; 
        }        
        
        ul.innerHTML += 
        `<li class="page-item">
            <a onclick="fillLeft(0)" class="page-link text-warning-emphasis fw-bold  bg-warning-subtle" href="#" aria-label="Previous">
                <i class="fa-solid fa-angles-left"></i>               
            </a>
        </li>`

        for(let j=1; j<=block; j++)
        {
            ul.innerHTML +=
            `<li class="page-item">
                <a onclick="fillPart('${j}')" class="page-link text-warning-emphasis fw-bold bg-warning-subtle" href="#">${j}</a>
             </li>`
        }  

        ul.innerHTML += 
        `<li class="page-item">
            <a onclick="fillRight(2)" class="page-link text-warning-emphasis fw-bold  bg-warning-subtle" href="#" aria-label="Next">
                <i class="fa-solid fa-angles-right"></i>
            </a>
        </li>`
    }
}  
setup() 

function fillRight(bNo)
{
    const chapters = Math.ceil(pages / block) 

    if((bNo) <= chapters )
    {
        tbody.innerHTML = ""
        ul.innerHTML = ""
        found = [] 
        let start = range * block * (bNo-1) 
        let fin = Math.min((start+range), cities.length) 

        for(let i=start; i<fin; i++)
        {                    
            available = garages.filter(g => g.yishuv==allCities.getCity(i).name)             
                    
            if(available.length)
            {   
                let item = {};
                item[i] = available;            
                
                found.push(item)
            }                            
            tbody.innerHTML += (available.length) ? 
                allCities.getCity(i).createRow(i,0) : 
                allCities.getCity(i).createRow(0,0) ; 
        }        
        
        ul.innerHTML += 
        `<li class="page-item">
            <a onclick="fillLeft(${bNo-1})" class="page-link text-warning-emphasis fw-bold  bg-warning-subtle" href="#" aria-label="Previous">
                <i class="fa-solid fa-angles-left"></i>               
            </a>
        </li>`

        let from = block*(bNo-1)+1;
        let to = Math.min(block*bNo, pages);

        for(let j=from;  j<=to;  j++)
        {
            ul.innerHTML +=
            `<li class="page-item">
                <a onclick="fillPart('${j}')" class="page-link text-warning-emphasis fw-bold bg-warning-subtle" href="#">${j}</a>
             </li>`
        }  

        ul.innerHTML += 
        `<li class="page-item">
            <a onclick="fillRight(${bNo+1})" class="page-link text-warning-emphasis fw-bold  bg-warning-subtle" href="#" aria-label="Next">
                <i class="fa-solid fa-angles-right"></i>
            </a>
        </li>`
    }  
}

function fillLeft(bNo)
{
    const chapters = Math.ceil(pages / block) 

    if((bNo) > 0 )
    {
        tbody.innerHTML = ""
        ul.innerHTML = ""
        found = [] 
        let start = Math.max( range*block*(bNo-1), 1 )
        let fin = (start+range)

        for(let i=start; i<fin; i++)
        {                    
            available = garages.filter(g => g.yishuv==allCities.getCity(i).name)             
                    
            if(available.length)
            {   
                let item = {};
                item[i] = available;            
                
                found.push(item)
            }                            
            tbody.innerHTML += (available.length) ? 
                allCities.getCity(i).createRow(i,0) : 
                allCities.getCity(i).createRow(0,0) ; 
        }        
        
        ul.innerHTML += 
        `<li class="page-item">
            <a onclick="fillLeft(${bNo-1})" class="page-link text-warning-emphasis fw-bold  bg-warning-subtle" href="#" aria-label="Previous">
                <i class="fa-solid fa-angles-left"></i>               
            </a>
        </li>`

        let from = block*(bNo-1)+1;
        let to = Math.min(block*bNo, pages);

        for(let j=from;  j<=to;  j++)
        {
            ul.innerHTML +=
            `<li class="page-item">
                <a onclick="fillPart('${j}')" class="page-link text-warning-emphasis fw-bold bg-warning-subtle" href="#">${j}</a>
             </li>`
        }  

        ul.innerHTML += 
        `<li class="page-item">
            <a onclick="fillRight(${bNo+1})" class="page-link text-warning-emphasis fw-bold  bg-warning-subtle" href="#" aria-label="Next">
                <i class="fa-solid fa-angles-right"></i>
            </a>
        </li>`
    }  
}

function fillPart(No)
{ 
    die(true);

    let start = (No-1)*range
    let fin = Math.min((start+range), cities.length)

    tbody.innerHTML = ""
    
    found = []

    for(let i=start; i<fin; i++)
    { 
        available = garages.filter(g => g.yishuv==allCities.getCity(i).name) 
            
        if(available.length)
        {                
            let item = {};
            item[i] = available;            
            
            found.push(item)
        }
        tbody.innerHTML += (available.length) ? 
            allCities.getCity(i).createRow(i,0) : 
            allCities.getCity(i).createRow(0,0) ;
    }
}

function die(bool)
{
    document.querySelector("#srch").value= ""
    document.querySelector("#srch").placeholder = "תכניס שם הישוב"

    if(bool) document.querySelector("#gCard").style.display = "none"; 
    else     document.querySelector("#gCard").style.display = "flex";   
}

function toGarages(keyGrgs, n)
{  
    die(false)
    let listG = null

    if(!n)
    {
        const item = found.find(f => f[keyGrgs])
        listG = item[keyGrgs]
    }
    else
    {
        listG = mono
    }

    const ul = document.querySelector('#g');   
    ul.innerHTML = ""

    listG.forEach(g => 
    {
        const objG = new Garage(g._id, g.mispar_mosah, g.shem_mosah, g.cod_sug_mosah, 
            g.sug_mosah, g.ktovet, g.yishuv, g.telephone, g.mikud, g.cod_miktzoa,
            g.miktzoa, g.menahel_miktzoa, g.rasham_havarot);

            ul.innerHTML += objG.createRow(n);       
    });
}

function details(id, n)
{
    let theGrg = null;

    if(!n)
    {
        for(let f of found)
        {
            let key = Object.keys(f);
            theGrg = f[key].find(g=>g._id==id)
            if(theGrg) break;
        }
    }
    else
    {
        theGrg = mono.find(g=>g._id==id)
    }

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

function search()
{
    let cName = document.querySelector('#srch').value.trim()

    mono = [];

    if(cName)
    {
        let theCity = null;
        let index = 0;

        for(index; index<allCities.getList().length; index++)
        {
            if(theCity = allCities.getCity(index).name==cName) 
                break;
        }

        tbody.innerHTML = ""
        if(theCity)
        {
            available = garages.filter(g => g.yishuv==allCities.getCity(index).name) 
            
            if(available.length)
            {
                available.forEach(g => mono.push(g))
            } 
            tbody.innerHTML += (available.length) ? 
                allCities.getCity(index).createRow(index,1) : 
                allCities.getCity(index).createRow(0,0) ;
        }
    }
}
