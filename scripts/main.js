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