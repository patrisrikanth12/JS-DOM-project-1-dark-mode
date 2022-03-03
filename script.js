const body = document.body;
const btn = document.getElementById("toggle-btn");
const icon = document.getElementById("icon");
const modeText = document.getElementById("mode-text");

btn.onclick = toggle;

function toggle(){
    if(modeText.textContent == "Light Mode"){
        btn.style.cssText = "background-color:white;";
        modeText.textContent = "Dark Mode";
        modeText.style.cssText = "color:white";
        icon.textContent = "dark_mode";
        icon.style.cssText = "color:black";
        body.style.cssText = "background-color:black";      
    }else{
        btn.style.cssText = "background-color:white;";
        modeText.textContent = "Light Mode";
        modeText.style.cssText = "color:black";
        icon.textContent = "light_mode";
        icon.style.cssText = "color:black";
        body.style.cssText = "background-color:white";  
    }
}

