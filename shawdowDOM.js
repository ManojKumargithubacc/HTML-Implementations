const container= document.querySelector('#manoj')
const shawdow=container.attachShadow({mode:"close"})
const ptag=document.createElement('p')
ptag.innerText="Hi Manoj"
ptag.style.color='red'
container.append(ptag)
console.log(container)