class Album
{
    constructor(id, aName=0, author=0, link=0)
    {
        this.id = id
        this.name = aName
        this.author = author
        this.link = link 
    }

    createRow()
    {        
        return `
            <div>${this.id}</div>
            <div>${this.name}</div>
            <div>${this.author}</div>
            <div>
                <button onclick="show('${this.link}')">
                    <i class="fa-solid fa-eye" style="color:darkblue;"></i>
                </button>
            </div>            
            `
    }
}



