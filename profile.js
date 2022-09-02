let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')
let interests = document.querySelector('.interests')

const myColor = (event) => {
    event.preventDefault()
    alert("Amber's favorite color is Orange")
}
const myPlace = (event) => {
    event.preventDefault()
    alert("Amber's favorite place is her clean home")
}
const myRitual = (event) => {
    event.preventDefault()
    alert("Amber's favorite ritual is drinking her morning coffee")
}

const myInterests = (event) => {
    event.preventDefault()
        alert("I know this doesn't look great, but I had to use flex somewhere")
    }

color.addEventListener('click', myColor)
place.addEventListener('click', myPlace)
ritual.addEventListener('click', myRitual)
interests.addEventListener('mouseover', myInterests)

