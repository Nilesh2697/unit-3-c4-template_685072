// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js"

let n= document.getElementById("navbar");
n.innerHTML=navbar()

console.log(n)


let searchImages = async(value)=>{

    try{
        let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)

        let data = await res.json()

    
        return data;
        console.log(data)
    }
    catch(error){
        console.log("error:",error)
    }  
};
let searchNews = async(value)=>{

    try{

        let res =await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)



        let data = await res.json()

    
        return data;
        console.log(data)
    }
    catch(error){
        console.log("error:",error)
    }  
};

let append = (data,container)=>{

    data.forEach(({urlToImage,author,title}) =>{

        let div=document.createElement("div")
        div.setAttribute("class","news")

        let div1=document.createElement("div")
        div1.setAttribute("class","news1")

        let div2=document.createElement("div")
        div2.setAttribute("class","news2")


        let img=document.createElement("img")
        img.src=urlToImage

        let p = document.createElement("p")
        p.innerText=author

        let p1 = document.createElement("p")
        p1.innerText=title

        div2.append(p,p1)

        div1.append(img)

        div.append(div1,div2)

        container.append(div)
    })
}





let search =(e)=>{
    if(e.key==="Enter"){
        let value =document.getElementById("search_input").value;
        searchNews(value).then((data) =>{
            console.log(data)

            let container = document.getElementById("results")
           container.innerHTML=null
            append(data.articles, container)
        })
    }
}

document.getElementById("search_input").addEventListener("keydown",search)


// By categries search

let categ = document.getElementById("sidebar").children;

// console.log(categ)
function catSearch(){
    console.log(this.id)
    searchImages(this.id).then((data) =>{
        console.log(data)

        let container = document.getElementById("results")
       container.innerHTML=null
        append(data.articles, container)
    })

}

for(let el of categ){

    el.addEventListener("click", catSearch)
}
