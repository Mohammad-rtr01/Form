let mame = document.getElementsByTagName("input")[0];

mame.addEventListener("blur" , (e)=>{

  const array = ["mame"]

 console.log(e.target.value)
})

let writ = document.getElementsByTagName("input")[1];

writ.addEventListener("blur" , (e)=>{

    const array = ["writ"]

    console.log(e.target.value)
   
})

let genre = document.getElementsByTagName("input")[2];

genre.addEventListener("blur" , (e)=>{

    const array = [genre]

    console.log(e.target.value)
  
})

let price = document.getElementsByTagName("input")[3];

price.addEventListener("blur" , (e)=>{
    const array = ["price"]

    console.log(e.target.value)
  
})



