const labels = document.querySelectorAll('.container--form label')


labels.forEach(label => {
       label.innerHTML = label.innerText.split('').map((harf, index)=>`<span>${harf}</span>`).join('')
})