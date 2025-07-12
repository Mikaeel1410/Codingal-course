function gethistory() {
    return document.getElementbyId("history-value").InnerText;
}
function printHistory(num) {
    document.getElementbyId("history-value").InnerText= num;
}
function getOutput() {
     return document.getElementbyId("output-value").InnerText;
}
function printoutput(num) {
    if (num == "") {
        document.getElementbyId("output-value").InnerText= num;
    }
     else{ 
        document.getElementbyId("output-value").InnerText = getFormattedNumber(num);
     }
    }   
    function getformmatedNumber(num) {
        if (num=="-") {
            return"";
        }
        var n = Number(num);
        var value = n.toLocaleString("en");
        return value;
        }
        function reverseNumberFormat(num) {
            return number (num.replace(/,/g,''));
        }
        var operator = document.getelementedbyclassname("operator");
        for (var i = 0; i < operator.length; i++) {
            operator[i].addeventlistener('click', function () {
                if(this.id == "clear") {
                    printHistory("");
                    printooutput("");
                }
                else if (this.id =="backspace")

