let squareColors = []; // Array to store square colors

// Define colors array
const colors = ['#8BC28C', '#EA6759', '#F3C65F', '#5DADE2', '#6667AB', '#F88F58'];

function addSubSquare() {
    // Extract page number from the HTML file name
    const pageNumber = getPageNumberFromFileName(); // Implement this function to extract the page number

    // Use the page number to determine the color index
    const colorIndex = (pageNumber - 1) % colors.length;

    if (squareColors.length < 12) {
        setTimeout(function() {
            const container = document.getElementById('squarecontainer');
            const square = document.createElement('div');
            square.className = 'subsquare fade-in';
            const color = colors[colorIndex];
            square.style.backgroundColor = color;
            squareColors.push(color); // Add color to array
            container.appendChild(square);
            square.style.display = 'block';
        }, 200);
    } else {
        alert('Maximum limit reached');
    }
}

// Function to extract page number from HTML file name
function getPageNumberFromFileName() {
    // Extract page number from the HTML file name
    const currentPage = window.location.pathname.split('/').pop(); // Get the current HTML file name
    const pageNumber = currentPage.match(/\d+/); // Extract the digits from the file name (assuming it follows the "pageX.html" pattern)
    return pageNumber ? parseInt(pageNumber[0]) : 0; // Convert extracted digits to a number
}
