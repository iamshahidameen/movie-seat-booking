const seats = document.querySelectorAll('.seat');
const selectedSeats = document.querySelectorAll('.seat.selected');
const movieList = document.getElementById('movie');
const count = document.getElementById('count');
const total = document.getElementById('total');

seats.forEach(seat => {
    seat.addEventListener('click', function () {
        this.classList.toggle('selected');
        let moviesCount = selectedSeats.length;
        console.log(moviesCount)
        updatePrice(moviesCount)
    })
})


if(!selectedSeats == '' ){
    
}

function updatePrice(moviesCount){
    selectedSeats.forEach(seat => {
        let moviePrice = movieList.value;
        
        count.innerText = moviesCount;
        total.innerText = moviesCount*moviePrice;

        
    })
}