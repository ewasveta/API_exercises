class Article
{
    constructor(title, description=0, url=0)
    {
        this.title = title
        this.description= description
        this.url = url 
    }

    createRow()
    {        
        return `
            <div id="box">
                <div><h3>${this.title}</h3></div>
                <div>${this.description}</div>
                <div style="color:blue;">
                    <a href="${this.url}">לקריאת הכתבה</a>
                </div>
            </div>           
            `
    }
}

