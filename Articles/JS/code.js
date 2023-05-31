async function getArticles()
{
    try 
    {
    
        const res = 
            await fetch('https://newsapi.org/v2/top-headlines?sources=ynet&apiKey=51a1f1de53944e58be88f2d96e98efa6')
        const data = await res.json()
        return data.articles;
        //console.log(data.articles)
    } 
    catch (error) 
    {
        console.log("Error articles resource fetching ",error)
    }
}
//getArticles()

async function setup() 
{
    const arts = await getArticles()

    const div = document.querySelector("#flex")   
   
    arts.forEach((a) => 
    {
        const objA = new Article(a.title, a.description, a.url)

        div.innerHTML += objA.createRow();
    }); 
    
}
  
setup()