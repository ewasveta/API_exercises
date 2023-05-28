const offName = 
[
    {"code": "US", "official": "United States of America"},
    {"code": "JP", "official": "Japan"},
    {"code": "AO", "official": "Angola"},
    {"code": "UA", "official": "Ukraine"},
    {"code": "IL", "official": "Israel"},
    {"code": "RU", "official": "Russian Federation"}
]

async function getChances(personName)
{
    try 
    {        
        const res = await fetch(`https://api.nationalize.io/?name=${personName}`)
        const data = await res.json()
        return data.country;
        
        //console.log(data)
    } 
    catch (error) 
    {
        console.error("Error nationalize resource fetching ",error)
    }
}

async function setup(personName) 
{
    const lands = await getChances(personName)

    const tbody = document.querySelector("#preview")  
   
    lands.forEach( c => 
    {
        let objC = new Country(c.country_id, Math.round(c.probability*100), c.country_id, 
        `https://flagsapi.com/${c.country_id}/flat/64.png`, `${c.country_id} flag`)

        let o = offName.find(l => l.code == objC.code);
        let cN = o ? o.official : c.country_id

        console.log(`official name : ${o}`)

        objC.officialName = cN

        tbody.innerHTML += objC.createRow();
    });     
}

async function firstName()
{
    let fName = prompt("Please enter your name:", "Yuri");
    if (fName) 
    {
        await setup(fName)
    }
}
  
//setup("svetlana") 