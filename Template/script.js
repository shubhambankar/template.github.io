// Animated Display Starts

const counters = document.querySelectorAll('.runningDisplay');
const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 25);
        } else {
            counter.innerText = value;
        }

    }

    animate();
});


// Animated display Ends

// Animated progress bar starts
var i = 0;
if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}

// Animated progress bar ends

// image chage with buttons start





// image change with buttons ends