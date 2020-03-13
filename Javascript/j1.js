function reset() { // nhập lại
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var c = document.getElementById("numC").value;
    if (a != 0 && b != 0 && c != 0) {
        a == 0;
        b == 0;
        c == 0;
    }
}
function PTb2() {
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var c = document.getElementById("numC").value;
    if (a == 0) {
        if (b == 0) {
            if (c == 0)
                document.getElementById("PTb2").innerHTML = "Phương trình vô số nghiệm: ";
            else
                document.getElementById("PTb2").innerHTML = "Phương trình vô nghiệm";
        }
        else {
            document.getElementById("PTb2").innerHTML = "x = " + -(c / b);
        }
    }
    else {
        const delta = b * b - 4 * a * c;
        if (delta > 0) {
            var x1 = (Math.sqrt(delta) + b) / (2 * a);
            var x2 = (b - Math.sqrt(delta)) / (2 * a);
            document.getElementById("PTb2").innerHTML = "x1 = " + x1 + ", x2 = " + x2;
        }
        else if (delta == 0) {
            document.getElementById("PTb2").innerHTML = " x1 = x2 = " + b / (2 * a);
        }
        else {
            document.getElementById("PTb2").innerHTML = "Phương trình vô nghiệm";
        }
    }
}
function DateofMonth() {
    var a = document.getElementById("month").value;
    var b = document.getElementById("year").value;
    if (a <= 0 || a > 12 || b < 0) {
        document.getElementById("error").innerHTML = "Nhập lại tháng!";
    }
    
    else{
        document.getElementById("error").innerHTML = "";
        var option = Number(a);
        switch(option) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById("date").innerHTML = "Tháng có 31 ngày.";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById("date").innerHTML = "Tháng có 30 ngày.";
                break;
            default:
                if (b%4 == 0) {
                    document.getElementById("date").innerHTML = "Tháng có 29 ngày(năm nhuận).";
                    break;
                } else{
                    document.getElementById("date").innerHTML = "Tháng có 28 ngày.";
                    break;
                }
        }
    }
}
function check(i){
    var dem = 0;
    for(var j = 1; j <= i; j++){
        if(i % j == 0){
            dem++;
        }
    }
    if(dem == 2)
        return 1;
    return 0;
}
function PrintPrime(){
    var a = document.getElementById("Num").value
    var b = parseInt(a);
    var Arr = [];
    if(b < 0){
        document.getElementById("errorNum").innerHTML = "Vui lòng nhập lại! ";
    }else{
        document.getElementById("errorNum").innerHTML = "";
        for(var i = 1; i <= b; i++){
            if(check(i) == 1){
                Arr.push(i);
            }
        }
    }
    document.getElementById("snt").innerHTML = p;
}