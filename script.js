var d, h, m, s, animate,dd,mm,yy;
function init() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    dd = d.getDate();
    mm = d.getMonth();
    yy = d.getFullYear();
    clock();
}
function clock() {
    s++;
    if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
            m = 0;
            h++;
            if (h == 24) {
                h = 0;
            }
        }
    }
    
    $('sec', s);
    $('min', m);
    $('hr', h);
    $('dd',dd);
    $('mm',mm);
    $('yy',yy);
    animate = setTimeout(clock, 1000);
}
function $(id, val) {
    if (val<10) {
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
}
window.onload = init;