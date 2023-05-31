class Post
{
    constructor(id, title=0, body=0, userId=0, link=0)
    {
        this.id = id
        this.title = title
        this.body = body
        this.userId = userId
        this.link = link 
    }

    createRow()
    {        
        return `
            <div>${this.id}</div>
            <div>${this.title}</div>
            <div>${this.body}</div>
            <div>
                <button onclick="goTo('${this.link}')">
                    <i class="fa-solid fa-eye" style="color:carob;"></i>
                </button>
            </div>            
            `
    }
}