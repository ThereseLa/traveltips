// Function for the Footer-menu

function buildMenu() {
    var links = [
        ["Share Tips", "Share-tips.html"],
        ["Inspiration", "https://thereseelarsson.wordpress.com/inspiration/",],
        ["About Us", "About-us.html"],
        ["Contact Us", "https://thereseelarsson.wordpress.com/"]
    ];

    var menuHTML = "";
    for (var i = 0; i < links.length; i++) {
        var targetAttribute = (links[i][0] === "Inspiration" || links[i][0] === "Contact Us") ? "target='_blank'" : "";
        menuHTML += "<li><a href='" + links[i][1] + "' " + targetAttribute + "> " + links[i][0] + " </a></li>";
    }

    document.getElementById("footer-menu").innerHTML = menuHTML;
}





// Function for the Search-bar

document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("searchInput");
    var searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function() {
        var searchTerm = searchInput.value.toLowerCase();

        var searchTerms = {
            "thailand": "Thailand.html",
        };

        if (searchTerm in searchTerms) {
            var destinationPage = searchTerms[searchTerm];
            window.location.href = destinationPage;
        } else {
            alert("Destination not found.");
        }
    });
});





// Function for the slideshow images on "A better way to Island Hop In Beautiful Phuket

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}





// Function for the "Like" button click on "A better way to Island Hop In Beautiful Phuket

function likePost() {
    alert('You liked this post!');
}





// Function for the comment submissions on "A better way to Island Hop In Beautiful Phuket

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.querySelector(".comment-list");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const commenterName = document.getElementById("name").value;
        const commentText = document.getElementById("comment").value;

        if (!commenterName || !commentText) {
            alert("Please enter your name and comment.");
            return;
        }

        const commentElement = document.createElement("div");
        commentElement.className = "comment-item";

        commentElement.innerHTML = `<strong>${commenterName}:</strong> ${commentText}`;

        commentList.appendChild(commentElement);

        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    });
});