
// Getting the current date
const d = new Date();
$("today_date").innerHTML = "Date: "+d.toDateString();

// To retrieve elements faster
function $(id){
    return document.getElementById(id);
}

//Form Validation
function validate(){ 
   let boxchecked = $("info-check");
   if(boxchecked.checked){
        return true;
   }
   else{
       alert("Please confirm if all information is true");
       return false;
   }

}

// The checkbox validation
function checking(){
    var form = $("contact-form");
    var RadioChoices = Array.from(form.Option);
    var Hiring = $("Hiring-option");
    var hour = $("hourlyrate");
    var money = $("currency");
    RadioChoices.forEach((elem)=>{
        if(elem.checked){
            if(elem.value == Hiring.value){
                //hour.classList.toggle("hidden");
                hour.classList.remove("hidden");
            }else{
                hour.classList.add("hidden");
            }
        }
    })
}

// Ensures a province is provided for the postal code
function Provincechecker(){
    let province = $("province");    
    let postalcode = $("postalcode").value;

    if(postalcode[0] == 'A')
    {
        province.value  = "NL";
    }
    else if(postalcode[0] == 'B'){
        province.value = "NS";
    }
    else if(postalcode[0] == 'C'){
        province.value = "PE";
    }
    else if(postalcode[0] == 'E'){
        province.value = "NB";
    }
    else if(postalcode[0] == 'G' || postalcode[0] == 'H' || postalcode[0] == 'J'){
        province.value = "QC";
    }
    else if(postalcode[0] == 'K' || postalcode[0] == 'L' || postalcode[0] == 'M' || postalcode[0]=='N'|| postalcode[0]=='P'){
        province.value = "ON";
    }
    else if(postalcode[0] == 'R'){
        province.value = "MB";
    }
    else if(postalcode[0] == 'S'){
        province.value = "SK";
    }
    else if(postalcode[0] == 'T'){
        province.value = "AB";
    }
    else if(postalcode[0] == 'V'){
        province.value = "BC";
    }
    else if(postalcode[0] == 'X'){
        province.value = "NT";
    }
    else if(postalcode[0] == 'Y'){
        province.value = "YT";
    }
    else{
        province.value = "";
    }
    
}

