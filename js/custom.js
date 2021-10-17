//switch case;

function fn(){
    var mark = document.getElementById("one").value;

    switch(true){
        case (mark >= 80 && mark <= 100):
            document.getElementById("result").innerHTML = "You have got 'A+' Grade";
        break;

        case (mark >= 70 && mark <= 79):
            document.getElementById("result").innerHTML = "You have got 'A' Grade";
        break;

        case (mark >= 60 && mark <= 69):
            document.getElementById("result").innerHTML = "You have got 'A-' Grade";
        break;

        case (mark >= 50 && mark <= 59):
            document.getElementById("result").innerHTML = "You have got 'B' Grade";
        break;

        case (mark >= 40 && mark <= 49):
            document.getElementById("result").innerHTML = "You have got 'C' Grade";
        break;

        case (mark >= 33 && mark <= 39):
            document.getElementById("result").innerHTML = "You have got 'D' Grade";
        break;

        case (mark >= 0 && mark <= 32):
            document.getElementById("result").innerHTML = "You have got 'F' Grade";
        break;

        default:
            document.getElementById("result").innerHTML = "Please enter your mark";
        
    }
}