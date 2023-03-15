var coll = document.getElementsByClassName("collapse");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        var collapse = this.nextElementSibling;
        if (collapse.style.display === "grid") {
            collapse.style.display = "none";
        }
        else {
            collapse.style.display = "grid";
        }
    });
    }
