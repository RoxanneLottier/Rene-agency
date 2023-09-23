document.addEventListener("click", (event) => {
    if (event.target.matches("[data-filter]")) {
        activefilterButtons(event); // function that activates button when clicked for filter by changing style to green
        filterButtons(event); return;// function the uses the buttons to filter the gallery
    }
})
// MAKE BUTTON ACTIVE WHEN FILTERED
function activefilterButtons(event) {

    const element = event.target; // define target

    // define target that has active class
    const currentActiveElement = document.querySelectorAll(".active");

    // Remove active on "tous" which is on by default when page is loaded
    currentActiveElement.forEach (element => {
        element.classList.remove("active");
    });
    // toggle active on the selected button
    element.classList.toggle("active");

}

// FILTER BUTTONS

function filterButtons(event) {

    const element = event.target; // define target

    // add filter method on dataset of buttons
    const filter = element.dataset.filter;

    // Reach all the figures
    const allFigures = document.querySelectorAll("[data-category]");

    // create constante with selected filter
    const filteredFigures = document.querySelectorAll(`[data-category="${filter}"]`);

    allFigures.forEach(figure => {
        figure.style.display = "none"; // Hide all figures
        if(filter === "tous") { //if filter is "tous" unhide all figures
            allFigures.forEach(figure => {
                figure.style.display = "block";
            });
        }
    });

    // show figures that are filtered
    filteredFigures.forEach(figure => {
        figure.style.display = "block";
    });
}
