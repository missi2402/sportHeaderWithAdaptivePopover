$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});
window.onload = function() {
    if (document.documentElement.clientWidth < 1000) {
        var b1 = document.getElementById("b1");
        var b2 = document.getElementById("b2");
        b1.style.marginTop = b2.offsetHeight + "px";
        b2.style.marginTop = -(b1.offsetHeight + b2.offsetHeight) + "px";
    }
};

window.onresize = setGoals;
setGoals();

function setGoals() {
    var goals = { "Allen ": 12, "Kelan ": 17, "Keyaloor ": 23, "Bill ": 67, "Marie ": 83 };
    var timeLines = document.getElementsByClassName('timeLine');
    var lenghtLine = timeLines[0].clientWidth;
    var priceMinutes = lenghtLine / 45;
    timeLines[0].innerHTML = '';
    timeLines[1].innerHTML = '';
    for (var key in goals)
        if (goals[key] < 45) {
            timeLines[0].innerHTML = timeLines[0].innerHTML + '<a tabindex="0" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" class="goal" data-content="' + key + ' ' + goals[key] + '\'" style="left: ' + goals[key] * priceMinutes + 'px"></a>';
        } else {
            timeLines[1].innerHTML = timeLines[1].innerHTML + '<a tabindex="0" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" class="goal" data-content="' + key + ' ' + goals[key] + '\'" style="left: ' + (goals[key] - 45) * priceMinutes + 'px"></a>';
        }
    $('[data-toggle="popover"]').popover();
}
