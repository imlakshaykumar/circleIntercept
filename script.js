const circleCoordinates = [];

function ifIntersectingCircle() {
    const firstCircle = circleCoordinates[0]
    const secondCircle = circleCoordinates[1]

    const x1 = firstCircle.x;
    const x2 = secondCircle.x;

    const y1 = firstCircle.y;
    const y2 = secondCircle.y;

    const r1 = firstCircle.radius / 2;
    const r2 = secondCircle.radius / 2;

    return circleIntersect(x1, y1, r1, x2, y2, r2)
}

function circleIntersect(x1, y1, r1, x2, y2, r2) {
    return Math.hypot(x1 - x2, y1 - y2) <= r1 + r2;
}


document.addEventListener('click', (e) => {
    // console.log('click check');

    const totalCircles = document.querySelectorAll('.circle');

    if (totalCircles.length === 2) {
        totalCircles.forEach(circ => {
            document.body.removeChild(circ);
            circleCoordinates.shift()
        })
    }

    let x = e.clientX;
    let y = e.clientY;

    // let radius = '100px';
    let radius = Math.floor(Math.random() * (300 - 100) + 100);

    circleCoordinates.push({ x, y, radius })


    const circle = document.createElement('div');

    circle.classList.add("circle")
    circle.style.top = y - (radius / 2) + 'px';
    circle.style.left = x - (radius / 2) + 'px';

    circle.style.width = radius + 'px';
    circle.style.height = radius + 'px';

    document.body.appendChild(circle);

    if (circleCoordinates.length === 2) {
        const res = ifIntersectingCircle();
        console.log('Intersecting: ', res);
    }
})
