document.addEventListener("DOMContentLoaded", function () {
    const tracker = document.getElementById("streak-tracker");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weeks = 52;
    const daysPerWeek = 7;
    const contributionLevels = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];

    // Create month labels container
    const monthLabels = document.createElement("div");
    monthLabels.classList.add("month-labels");

    // Add month labels and adjust spacing
    months.forEach((month, index) => {
        const monthDiv = document.createElement("div");
        monthDiv.innerText = month;
        monthDiv.style.width = `${(weeks / months.length) * 10}px`; // Adjust width to fit columns
        monthLabels.appendChild(monthDiv);
    });

    tracker.appendChild(monthLabels);

    // Create the contribution grid
    const grid = document.createElement("div");
    grid.classList.add("contribution-grid");

    for (let week = 0; week < weeks; week++) {
        const weekColumn = document.createElement("div");
        weekColumn.classList.add("week-column");

        for (let day = 0; day < daysPerWeek; day++) {
            const cell = document.createElement("div");
            cell.classList.add("contribution-cell");
            const randomLevel = Math.floor(Math.random() * contributionLevels.length);
            cell.style.backgroundColor = contributionLevels[randomLevel];
            weekColumn.appendChild(cell);
        }

        grid.appendChild(weekColumn);
    }

    tracker.appendChild(grid);
});
