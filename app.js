//.....calculator...//

//.....1st concatenating nums...........//
function getNumber(num){

var jkl = document.getElementById("jkl");
jkl.value += num;

}
//............clear nums..........//
function clearresult(){
    var jkl = document.getElementById("jkl");
    jkl.value= ""

}
//.................give vakue after calculation.....//
function getresult(){
    var jkl = document.getElementById("jkl");
    // console.log(jkl.value)

    jkl.value = eval(jkl.value)
}