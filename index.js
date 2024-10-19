// function red(){
//     document.body.style.backgroundColor = 'red';
// }

//addEventListener

// const red = document.getElementById('btn').addEventListener('click', document.body.style.backgroundColor = 'red')
// console.log(red)

// document.getElementById('btn').addEventListener('click', function purple(){
//    document.body.style.backgroundColor = 'purple'
// })

 const title = document.getElementById('btn')
// title.addEventListener('click', function red(){
//     console.log('red')
// })

title.addEventListener('click', function (){
   const para = document.getElementById('para')
   //console.log(para)
   para.innerText = "applied js on html"
})