let squareCount = 0;


const colors = ['#8BC28C', '#EA6759', '#F3C65F', '#5DADE2', '#6667AB','#F88F58'];

function addSquare() {
    if (squareCount < 6) {
        setTimeout(function() {
            const container = document.getElementById('squarecontainer');
            const square = document.createElement('div');
            square.className = 'square fade-in'; // Add the fade-in class
            square.style.backgroundColor = colors[squareCount];
            container.appendChild(square);
            squareCount++;
            square.style.display = 'block';
        }, 200); // Adjust the delay time (in milliseconds) as needed
    } else {
        alert('Maximum limit reached');
    }
}