const counters = document.querySelectorAll('.numbers')

counters.forEach(counter =>{
    counter.innerText = '0'
    
    const upradgeCounter = () => {
       const target = +counter.getAttribute('data-target')
       const c = +counter.innerText
       const increment = target /200
       if (c<target) {
        counter.innerText = `${Math.ceil(c+increment)}`
        setInterval(()=> {
            upradgeCounter()
        },90)
    }
    }
    
    upradgeCounter()
})