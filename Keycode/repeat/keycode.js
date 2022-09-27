const tusGir = document.querySelector('.bas')

window.onkeydown = (e) => {
    tusGir.innerHTML = 
    ` 
    <div class="key">
    ${e.key}
    <a>harf</a>
   </div>

   <div class="key">
   ${e.keyCode}
   <a>kod</a>
   </div>
    
    `

      console.log(e);
}

