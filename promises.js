// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello JS")
      
//     },2000)
// })
// p.then((msg)=>{console.log(msg)})

// let p=new Promise((resolve,reject)=>{
  
//         reject("Something Went worng")

// })
// p.catch((err)=>console.log(err))

// function getNumber(){
//     return new Promise((resolve)=>{
        
//         resolve(Math.random())
//     })
// }
// getNumber().then((num)=>console.log("The num:",num))


// let  p=new Promise((res,rej)=>{
//       setTimeout(()=>{
//         console.log("Task completed")
//       })
// })
// p.then((msg)=>console.log(msg))

// let p=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("API Data Loaded")
//     },3000)
// })
// p.then((msg)=>console.log(msg))

// let p1=new Promise((res,rej)=>{
// setTimeout(()=>{
//       res("A")
// },2000)
// })
// let p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("B")
//     },1000)
// })
// Promise.all([p1,p2]).then((msg)=>console.log(msg))

// let p1=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Fast")
//     },1000)
// })
// let p2=new Promise((res,rej)=>{
//    setTimeout(()=>{
//       res("slow")
//    },3000)
// })
// Promise.race([p1,p2]).then((msg)=>console.log(msg))

// let p=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("DONE!!")
//     },3000)
// })
// p.then((msg)=>console.log(msg))

// function wait(ms){
//     return new Promise((resolve)=>{
//     setTimeout(resolve,ms);

//     })
// }
// wait(2000).then(()=>console.log("2 sec passed"))

function check(num){
    return new Promise((res,rej)=>{
    if(num<10){
        rej("Number is rejected bcoz its less than 10")
    }
    else{
        res("Number is greather than 10")
    }
})
}
check(8)
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))