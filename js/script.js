let a = document.getElementById("more-option-button");


a.addEventListener('click', () => {
    let b = document.getElementById('row3');
    if (!(b.style.display === "none")) {
        b.style.display = "none";
        $("#more-option-button").text("More option").css({ 'background': 'blue', "width": "110px" });

    }
    else if (!(b.style.display === "flex")) {
        b.style.display = "flex";
        $("#more-option-button").text("less").css({ 'background': 'blue', "width": "110px" });


    }
});

