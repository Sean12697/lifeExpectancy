window.addEventListener('load', function() {
    init();
    showProgress(); 
    setInterval(showProgress, 200); 
});

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var year = 1970, month = 0, day = 1, lifespan = 70;

function init() {
    var d, m, y, le;
    
    for (var i = 1; i < 32; i++) d += '<option value="'+i+'">'+i+'</option>';
    document.getElementById("day").innerHTML = d;
    
    for (var i = 0; i < 13; i++) m += '<option value="'+i+'">'+months[i]+'</option>';
    document.getElementById("month").innerHTML = m;
    
    for (var i = new Date().getFullYear(); i > 1969; i--) y += (i != 1970) ? '<option value="'+i+'">'+i+'</option>' : '<option value="'+i+'" selected="selected">'+i+'</option>';
    document.getElementById("year").innerHTML = y;
    
    for (var i = 40; i < 90; i++) le += (i != 70) ? '<option value="'+i+'">'+i+'</option>' : '<option value="'+i+'" selected="selected">'+i+'</option>';
    document.getElementById("lifespan").innerHTML = le;
    
    document.getElementById("btn").addEventListener('click', function() {
        day = parseInt(document.getElementById("day").value);
        month = parseInt(document.getElementById("month").value);
        year = parseInt(document.getElementById("year").value);
        lifespan = parseInt(document.getElementById("lifespan").value);
        document.getElementById("inputs").innerHTML = "";
        document.getElementById("progress").style.visibility = "visible";
    });
}

function showProgress() {
    var result = oneLinePercentage() * 100;
    document.getElementById("until").innerHTML = "Until " + (parseInt(year) + parseInt(lifespan));
    document.getElementById("progressBar").value = result;
    document.getElementById("p").innerHTML = result.toString().substr(0,13) + "%";
    //console.log(result);
}

function oneLinePercentage() {
    return ((new Date() - new Date(year, month, day)) / (new Date(parseInt(year) + parseInt(lifespan), month, day) - new Date(year, month, day)));
}