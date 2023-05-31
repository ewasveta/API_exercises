class Comment
{
    constructor(id, cName=0, body=0, email=0, postId=0)
    {
        this.id = id
        this.name = cName
        this.body = body
        this.email = email
        this.postId = postId 
    }

    createRow()
    {        
        return `
                <div>${this.id}</div>
                <div>${this.name}</div>
                <div>${this.body}</div>
                <div>${this.email}</div>
                <div>${this.postId}</div>
               `
    }
}