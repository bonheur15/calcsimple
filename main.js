var nownumbers = '';
var num1 = 0;
var num2 = 0;
var operation = "";



try {
    SVGDefsElement.arguments.s;
} catch (error) {

}



for (var i = 0; i < 10; i++) {
    document.getElementById(String(i)).addEventListener("click", (e) => {
        nownumbers += e.path[0].innerText;
        document.getElementById("now").innerText = nownumbers;
    });
}





document.getElementById("plus").addEventListener("click", () => {
    nownumbers = Number(nownumbers);
    num1 = nownumbers;
    nownumbers = '';
    document.getElementById("now").innerText = '0';
    document.getElementById("prev").innerText = num1 + " + ";
    operation = "+";
});
document.getElementById("multi").addEventListener("click", () => {
    nownumbers = Number(nownumbers);
    num1 = nownumbers;
    nownumbers = '';
    document.getElementById("now").innerText = '0';
    document.getElementById("prev").innerText = num1 + " * ";
    operation = "*";
});
document.getElementById("div").addEventListener("click", () => {
    nownumbers = Number(nownumbers);
    num1 = nownumbers;
    nownumbers = '';
    document.getElementById("now").innerText = '0';
    document.getElementById("prev").innerText = num1 + " / ";
    operation = "/";
});

document.getElementById("minus").addEventListener("click", () => {
    nownumbers = Number(nownumbers);
    num1 = nownumbers;
    nownumbers = '';
    document.getElementById("now").innerText = '0';
    document.getElementById("prev").innerText = num1 + " - ";
    operation = "-";
});



document.getElementById("equal").addEventListener("click", () => {
    nownumbers = Number(nownumbers);
    num2 = nownumbers;
    nownumbers = '';
    document.getElementById("now").innerText = '0';

    if (operation == "+") {
        document.getElementById("now").innerText = num1 + num2;
        document.getElementById("prev").innerText = num1 + " + " + num2;
    } else if (operation == "*") {
        document.getElementById("now").innerText = num1 * num2;
        document.getElementById("prev").innerText = num1 + " * " + num2;
    } else if (operation == "/") {
        document.getElementById("now").innerText = num1 / num2;
        document.getElementById("prev").innerText = num1 + " / " + num2;
    } else if (operation == "-") {
        document.getElementById("now").innerText = num1 - num2;
        document.getElementById("prev").innerText = num1 + " - " + num2;
    }

});






document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("now").innerText = "0"
    document.getElementById("prev").innerText = "0";
    nownumbers = '';
    num1 = 0;
    num2 = 0;
    operation = "";

});