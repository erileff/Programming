let date = new Date();
let hour, min, sec;
let animate;
let weekday, month, day, year;

const init = () => {
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    clock();
};

const clock = () => {
    sec++;
    if (sec === 60) {
        sec === 0;
        min++;
        if (min === 60) {
            min === 0;
            hour++;
            if (hour === 24) {
                hour = 0;
            }
        }
    }
    time('sec', sec);
    time('min', min);
    time('hour', hour);
    animate = setTimeout(clock, 1000);
};

const today = (id, val) => {
    weekday = date.getDay();
    month = date.getMonth();
    day = date.getDate();
    year = date.getFullYear();
    document.getElementById(id).innerHTML = `${weekday}, ${month} ${day}, ${year}`;
}

const time = (id, val) => {
    if (val < 10) {
        val = `0${val}`;
    }
    document.getElementById(id).innerHTML = val;
}

window.onload = init;