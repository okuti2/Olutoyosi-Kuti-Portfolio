// let btnDownload = document.querySelector("button");
// btnDownload.addEventListener("onclick", Download());
// async function Download(){
//     let url = "Resume.pdf";
//     let fileName = "Resume";
//     const res = await fetch(url);
//     const blob = await res.blob();
//     saveAs(blob, fileName);
// }

// Getting the current date
const d = new Date();
$("today_date").innerHTML = "Date: "+d.toDateString();

function $(id){
    return document.getElementById(id);
}

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

