

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
//getChances("john")

async function getCountry(code)
{
    try 
    {   
        let url = "https://restcountries.com/v3.1/alpha/" + code;

        //const res = await fetch(url) 
        const res = await fetch(url,
            {
                mode: 'no-cors',
                method: "get",
                headers: {"Content-Type": "application/json"}
            })        

        const data = res//await res//.json()
        // return data;
        
        console.log(data)
    } 
    catch (error) 
    {
        console.error("Error countries resource fetching ",error)
    }
}

getCountry("US")



async function setup(personName) 
{
    const lands = await getChances(personName)

    console.log (lands);
   
    lands.forEach(async c => 
    {
        let objC = new Country(c.country_id, c.probability)

        let details = await getCountry(c.country_id)
        objC.officialName = details.name.official
        objC.flagUrl = details.flags.png
        objC.flagAlt = details.alt

        console.log(details.name.official)

    });     
}

// async function setup(personName) 
// {
//     lands = await getCountries(personName)

//     const tbody = document.querySelector("#preview")   
   
//     lands.forEach((l) => 
//     {
//         let land = new Country(l.country_id, l.probability)

//         tbody.innerHTML += beast.createRow();
//     });     
// }
  
//setup("svetlana") 