

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
        let objC = new Country(c.country_id, c.probability, c.country_id, 
        `https://flagsapi.com/${c.country_id}/flat/64.png`, `${c.country_id} flag`)

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