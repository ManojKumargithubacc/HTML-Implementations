const dom=document.querySelector('body')
const para=document.createElement('button')
dom.append(para)
para.textContent='submit'
para.style.color='red'
para.addEventListener('click',e=>{
    alert("Submited")
    console.log("Submit event works")
})

