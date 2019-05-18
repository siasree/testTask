var no = 8;//even nodd numbers
if (no % 2 == 0) {
    // console.log("Even number:" + no);
}
else {
    // console.log("Odd number:" + no);
}
//Reverse number
// var a, temp = 0,no=673;
// while (no > 0) {
//     a = no % 10;
//     no = parseInt(no / 10);
//     temp = temp * 10 + a;
// }
// console.log(temp);
function revnum() {//second method using id
    var temp = 0, a, b, num;
    num = Number(document.getElementById("no-input").value);
    b = num;
    while (num > 0) {
        a = num % 10;
        num = parseInt(num / 10);
        temp = temp * 10 + a;
    }
    console.log(temp);
}
//remove duplicate characters
function unique_char(str1) {
    var str = str1;
    var uniql = "";
    for (var x = 0; x < str.length; x++) {

        if (uniql.indexOf(str.charAt(x)) == -1) {
            uniql += str[x];
        }
    }
    return uniql;
}
console.log(unique_char("sreevidyareddy"));
//Accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}