window.addEventListener('load', function () {
    var elem = document.getElementById('triangle-canvas');
    if (!elem || !elem.getContext) {
        return;
    }

    var context = elem.getContext('2d');
    if (!context) {
        return;
    }
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(20, 20);
    context.lineTo(200, 80);
    context.lineTo(20, 200);
    context.lineTo(20, 20);
    context.stroke();
}, false);

window.addEventListener('load', function () {
    var elem = document.getElementById('text-canvas');
    if (!elem || !elem.getContext) {
        return;
    }

    var context = elem.getContext('2d');
    if (!context) {
        return;
    }
    context.fillStyle = '#FFFF00';
    context.font = '30px sans-serif';
    context.textBaseline = 'top';
    context.fillText('Text Example', 0, 0);
}, false);

window.addEventListener('load', function () {
    var elem = document.getElementById('rectangles-canvas');
    if (!elem || !elem.getContext) {
        return;
    }

    var context = elem.getContext('2d');
    if (!context) {
        return;
    }
    context.fillStyle = '#FFFF00';
    context.fillRect(0, 300, 100, 50);
    context.fillStyle = '#FFFFFF';
    context.fillRect(50, 315, 20, 20)
    context.strokeStyle = '#FF0000';
    context.lineWidth = 10;
    context.strokeRect(200, 300, 100, 50);
}, false);