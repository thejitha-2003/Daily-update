let http=require('http')
let server=http.createServer((request,respone)=>{
    console.log(request.url)
    if(request.url==`/about`){ 
         respone.write("<h1>Welcome to about page</h1>")
         respone.end
     
     }
    else if(request.url==`/contact`)
    {
         respone.write("<h1>Welcome to contact page</h1>")
          respone.end
   
    }
    else if(request.url==`/blog`)
    {
         respone.write("<h1>Welcome to blog page</h1>")
             respone.end

    }
    else{
    respone.write(`<h1>Welcome to HTTP server</h1>
            <ul>
                <li style='disply:inline-block;text-decoration:none;'><a href=''>home</a></li>
                <li style='disply:inline-block;text-decoration:none;'><a href='/about'>About</a></li>
                <li style='disply:inline-block;text-decoration:none;'><a href='/contact'>concat</a></li>
                <li style='disply:inline-block;text-decoration:none;'><a href='/blog'>Blog</a></li>
            </ul>
            `)
    respone.end
    }
})
server.listen(3000)