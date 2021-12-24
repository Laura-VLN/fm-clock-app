/*let timezone = document.getElementById('timezone')

fetch('http://worldtimeapi.org/api/ip')
.then(res => res.json())
.then(data => timezone.innerHTML = timezone.innerHTML + data.timezone)*/

let quote = document.getElementById('quote')
let author = document.getElementById('author')

function quoteRefresh() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        quote.innerHTML = data.en
        author.innerHTML = data.author
    })
}