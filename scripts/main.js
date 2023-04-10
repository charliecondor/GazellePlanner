// Loads existing JSON planner file
function loadPlanner() {
    return true;
}

// Saves planner into JSON planner file
function savePlanner() {
    return true;
}


class GratitudeBox {
    constructor() {
        this.gratitudeText = "";
    }    
    updateText(e) {
        this.gratitudeText = e.target.value;
        console.log(this.gratitudeText);
    }
}

class sleepBox {
    constructor() {
        this.wenttobedText = "";
        this.wokeupText = "";
        this.hourssleptText = "";
        this.ifeelText = "";
    }
}

class projectsBox {
    constructor() {
        this.project1 = [];
    }
}

class todoBox {
    constructor() {
        this.items = [];
    }
}

class scheduleBox {
    constructor() {
        this.scheduleitems = [];
    }
}

class formyselfBox {
    constructor() {
        this.water = 0;
        this.food = 0;
        this.exercise = "";
        this.declutter = 0;
    }
}

class tomorrowBox {
    constructor() {
        this.tomorrowText = "";
    }
}

class DayInfo {
    constructor(date) {
        this.date = date;
        this.gratitudeBox = new GratitudeBox();
        this.sleepBox = new sleepBox();
        this.projectsBox = new projectsBox();
        this.todoBox = new todoBox();
        this.scheduleBox = new scheduleBox();
        this.formyselfBox = new formyselfBox();
        this.tomorrowBox = new tomorrowBox();
    }
}

const today = new Date()
const todayString = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
console.log(today)

let newDayInfo = new DayInfo(todayString);

const gratitudeInput = document.querySelector("input[name='gratitudeText']");

gratitudeInput.addEventListener("input", newDayInfo.gratitudeBox.updateText);

document.addEventListener('click', function(e) {
    e = e || window.event;
    if (e.target.attributes[0].value == "nav-link") {  // for the target element that was clicked on, check the attributes array for the value "nav-link"
        let nav_items = document.querySelectorAll(".nav-item");  // selects all nav-bar nav-items
        let nav_clicked = "";
        for (i = 0; i < nav_items.length; i++) {  // for each nav-item
            nav_items[i].outerHTML = nav_items[i].outerHTML.replace("nav-item active", "nav-item");  // remove the active class to remove the Bootstrap bold effect
            if (nav_items[i].innerText.trim() == e.target.innerText) {  // trim removes whitespace from nav_items query, compares it against the target inner text (text of the nav-item: Daily, Calendar, Projects)
                let nav_items = document.querySelectorAll(".nav-item");  // selects all nav-bar nav-items again, need to find out why I need to do this
                nav_items[i].outerHTML = nav_items[i].outerHTML.replace("nav-item", "nav-item active");  // adds the active class to the nav-item that was clicked                
                nav_clicked = nav_items[i].innerText.trim()  // stores which nav section was clicked
            }
        }
        let toggle_sections = document.querySelectorAll(".toggles");
        //console.log(nav_clicked.toLowerCase());
        for (i = 0; i < toggle_sections.length; i++) {
            toggle_sections[i].style.visibility = "hidden";
            //console.log(toggle_sections[i].id);
            if (toggle_sections[i].id == nav_clicked.toLowerCase()) {
                toggle_sections[i].style.visibility = "visible";
            }
        }        
    } }, false);

console.log(newDayInfo.sleepBox.wenttobedText)
console.log(newDayInfo.date)