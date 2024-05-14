function shapeHandler(button) {
    
    if (button.id == "circle") {
        let canvas = document.getElementById('shapeOfCircle');
        let context = canvas.getContext('2d');
        context.beginPath();
        context.arc(100, 100, 50, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#003300';
        context.stroke();
    }
    else if (button.id == "ractangle") {
        let canvas = document.getElementById('shapeOfRect');
        let context = canvas.getContext('2d');
        context.beginPath();
        context.fillRect(10, 10, 150, 100);
        context.lineWidth = 2
    }
    else if (button.id == "triangle") {
        let canvas = document.getElementById('shapeOfTri');
        let context = canvas.getContext('2d');
    }
    else if (button.id == "square") {
        let canvas = document.getElementById('shapeOfSquare');
        let context = canvas.getContext('2d');
        context.beginPath();
        context.fillRect(10, 10, 100, 100);
        context.fillStyle = 'red';
        context.fill();
        context.lineWidth = 2;
    }
}