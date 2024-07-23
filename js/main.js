document.querySelector('button').addEventListener('click',getInfo())

function getInfo(){
    let userInput = document.querySelector('input').value
    fetch(`https://openlibrary.org/search.json?q=${userInput}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.docs[0].subject.slice(1,4)
        document.querySelector('p').innerText = data.docs[0].cover_edition_key
    
    })
}



