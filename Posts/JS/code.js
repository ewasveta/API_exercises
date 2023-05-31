async function getPosts()
{
    try 
    {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return data;
        //console.log(data)
    } 
    catch (error) 
    {
        console.log("Error posts resource fetching ",error)
    }
}
//getPosts()

async function setup() 
{
    const posts = await getPosts()

    const grid = document.querySelector("#grid")  
   
    posts.forEach(async p => 
    {
        const objP =  new Post(p.id, p.title, p.body, p.userId)
        objP.link = `http://127.0.0.1:5500/comments.html?postId=${p.id}`    
        
        grid.innerHTML += objP.createRow();
    });    
}  
setup()

function goTo(link)
{
    console.log(link)

    window.location.href = link;
}