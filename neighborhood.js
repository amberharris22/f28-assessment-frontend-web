let rest = document.querySelector('#rest')
let park = document.querySelector('#park')




const restRec = (event) => {
    event.preventDefault()
    
    let restArr = ['Cubbys', 'Himalayan Kitchen', 'The Break', 'Cafe Trang', 'Cupbop']
    console.log(restArr)
    const randomRest = Math.floor(Math.random() * restArr.length)
    
    alert(restArr[randomRest])

}

rest.addEventListener('click', restRec)

const parkRec = (event) => {
    event.preventDefault()
    
    let parkArr = ['Brookside', 'Bowstring', 'Firefly', 'Ewok', 'Hillside', 'Willoughby']
    console.log(parkArr)
    const randomPark = Math.floor(Math.random() * parkArr.length)
    
    alert(parkArr[randomPark])

}

rest.addEventListener('click', restRec)
park.addEventListener('click', parkRec)