function first_name() {
    const item  = document.getElementById("first_name");
    item.innerHTML = "Ilya";
}

function second_name() {
    const item = document.getElementById("second_name");
    item.innerHTML = "Guskov";
}

function thirty_name() {
    const item = document.getElementById("thirty_name");
    item.innerHTML = "Mikhailovich";
}

function sex() {
    const item = document.getElementById("sex");
    item.innerHTML = "male";
}


function first_name_return() {
    const item  = document.getElementById("first_name");
    item.innerHTML = "Илья";
}

function second_name_return() {
    const item = document.getElementById("second_name");
    item.innerHTML = "Гуськов";
}

function thirty_name_return() {
    const item = document.getElementById("thirty_name");
    item.innerHTML = "Михайлович";
}

function sex_return() {
    const item = document.getElementById("sex");
    item.innerHTML = "муж";
}

document.getElementById("for_click").addEventListener("click", function() {
if (document.getElementById("first_name").innerHTML === "Илья"){
    first_name();
    second_name();
    thirty_name();
    sex();
}
else{
    first_name_return();
    second_name_return();
    thirty_name_return();
    sex_return();
}
});
