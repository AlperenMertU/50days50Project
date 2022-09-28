const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        deleteActiveClass()
       panel.classList.add('active')
    } 
    )
});

function deleteActiveClass() {
    panels.forEach(panels =>{
      panels.classList.remove('active')
})
}
