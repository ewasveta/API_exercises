disappear()

async function getAlbums()
{
    try 
    {
        const res = await fetch('https://jsonplaceholder.typicode.com/albums')
        const data = await res.json()
        return data;
        //console.log(data)
    } 
    catch (error) 
    {
        console.log("Error albums resource fetching ",error)
    }
}
//getAlbums()

async function getUser(uID)
{
    try 
    {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${uID}` )
        const data = await res.json()
        return data;
        //console.log(data)
    } 
    catch (error) 
    {
        console.log("Error users resource fetching ",error)
    }
}
//getUser(1)

async function setup() 
{
    const albums = await getAlbums()

    const grid = document.querySelector("#grid")  
   
    albums.forEach(async a => 
    {
        const objA =  new Album(a.id, a.title)
        objA.link = `https://jsonplaceholder.typicode.com/photos?albumId=${a.id}`
        
        const user =  await  getUser(a.userId)         
        objA.author = user.name

        grid.innerHTML += objA.createRow();
    });    
}  
setup() 

async function getPhotos(link)
{
    try 
    {
        const res = await fetch(link )
        const data = await res.json()
        return data;
        //console.log(data)
    } 
    catch (error) 
    {
        console.log("Error photos resource fetching ",error)
    }
}

async function show(link)
{  
    const photos = await getPhotos(link)

    const gallery = document.querySelector("#photos")
  
    gallery.innerHTML = 
    `
        <div>
            <button id="die" onclick="disappear()">           
                <i class="fa-solid fa-trash-can" style="color:firebrick"></i>
                Delete gallery              
            </button>
        </div>
    `    

    photos.forEach( p => 
    {
        let alt = "img No." +
            p.thumbnailUrl.slice(p.thumbnailUrl.lastIndexOf('/'))

        gallery.innerHTML += 
            `<div><img src="${p.thumbnailUrl}" alt="${alt}"></img></div>`
    });                                              
}

function disappear()
{
    document.querySelector("#photos").innerHTML = ''
}

