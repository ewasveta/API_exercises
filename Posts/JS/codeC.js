const queryString = window.location.search;
const postId = new URLSearchParams(queryString).get('postId');

async function getComments()
{
    try 
    {
        const res = 
            await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        const data = await res.json()
        return data;
        //console.log(data)
    } 
    catch (error) 
    {
        console.log("Error comms resource fetching ",error)
    }
}
//getComments()

async function setup() 
{
    const comms = await getComments()

    const grid = document.querySelector("#gridC")  
   
    comms.forEach(async c => 
    {
        const objC =  new Comment(c.id, c.name, c.body, c.email, c.postId)       
        
        grid.innerHTML += objC.createRow();
    });    
}  
setup()