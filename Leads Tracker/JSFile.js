let myleads=[]
let inputEL=document.getElementById("input-el")
let savetab=document.getElementById("input-btn")
let ulel=document.getElementById("ul-el")
let tabbtn=document.getElementById("tab-btn")
const deletebtn=document.getElementById("delete-btn")
console.log(deletebtn)
deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    renderleads(myleads)
})
tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        renderleads(myleads)
    })
})


let leadsfromlocalstorage=JSON.parse(localStorage.getItem("myleads"))
if(leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    renderleads(myleads)
}
savetab.addEventListener("click",function(){
    myleads.push(inputEL.value)
    inputEL.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleads(myleads)
    console.log(localStorage.getItem("myleads"))
})



function renderleads(leads){
    let listItems=""
    for (let i=0;i<leads.length;i++){
        listItems+=`<li><a href="${leads[i]}">${leads[i]}</a></li>`
    //    const li=document.createElement("li");li.textContent=myleads[i];ulel.append(li)
    }
    ulel.innerHTML=listItems
}

console.log(myleads)
