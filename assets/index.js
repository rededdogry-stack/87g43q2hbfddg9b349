
var selector = document.querySelector(".selector_box");
selector.addEventListener('click', () => {
    if (selector.classList.contains("selector_open")){
        selector.classList.remove("selector_open")
    }else{
        selector.classList.add("selector_open")
    }
})

document.querySelectorAll(".date_input").forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector(".date").classList.remove("error_shown")
    })
})

var sex = "m"

document.querySelectorAll(".selector_option").forEach((option) => {
    option.addEventListener('click', () => {
        sex = option.id;
        document.querySelector(".selected_text").innerHTML = option.innerHTML;
    })
})

// Usunięto obsługę uploadu zdjęcia
// Usunięto obsługę uploadu zdjęcia
var imageUrlInput = document.querySelector(".image_url_input");

document.querySelectorAll(".input_holder").forEach((element) => {
    var input = element.querySelector(".input");
    input.addEventListener('click', () => {
        element.classList.remove("error_shown");
    })
});

document.querySelectorAll(".input_holder").forEach((element) => {

    var input = element.querySelector(".input");
    input.addEventListener('click', () => {
        element.classList.remove("error_shown");
    })

});

// ...usunięto automatyczne przekierowanie...
// ...existing code...

document.querySelector(".go").addEventListener('click', () => {

    var params = new URLSearchParams();
    params.set("sex", sex);
    var imageUrl = imageUrlInput.value.trim();
    if (imageUrl) {
        params.set("image", imageUrl);
    }
    var birthday = "";
    document.querySelectorAll(".date_input").forEach((element) => {
        birthday = birthday + "." + element.value;
    });
    birthday = birthday.substring(1);
    params.set("birthday", birthday);
    document.querySelectorAll(".input_holder").forEach((element) => {
        var input = element.querySelector(".input");
        params.set(input.id, input.value);
    });
    forwardToId(params);

});

function isEmpty(value){

    let pattern = /^\s*$/
    return pattern.test(value);

}

function forwardToId(params){

    location.href = "id.html?" + params

}

var guide = document.querySelector(".guide_holder");
guide.addEventListener('click', () => {

    if (guide.classList.contains("unfolded")){
        guide.classList.remove("unfolded");
    }else{
        guide.classList.add("unfolded");
    }

})
