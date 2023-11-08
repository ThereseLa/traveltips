function buildMenu()
{
    var links = [
        ["Share Tips", "Share-tips.html"],
        ["Inspiration", "Get-tips.html"],
        ["About Us", "About-Us.html"],
        ["Contact Us", "Contact-Us.html"]
    ]

    var menyHTML = ""
    for(var i = 0; i < links.length; i = i + 1)
    {

menyHTML += "<li><a href='" + links [i][1] + "'> "+ links[i][0] +" </a></li>"
    }

    document.getElementById("footer-menu").innerHTML = menyHTML

}





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