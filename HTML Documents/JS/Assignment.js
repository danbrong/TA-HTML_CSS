window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

function validateForm() {
    let x = document.forms["contact"]["fname"].value;
    let y = document.forms["contact"]["phone"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Phone Number must be filled out");
        return false;
    }
}

// POP-UP FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openContact() {
    document.getElementById("myContact").style.display = "block";
}

function closeContact() {
    document.getElementById("myContact").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow >div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
