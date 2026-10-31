
const auditResults = [
    {
        name: "Performance",
        score: 100
    },
    {
        name: "Accessibility",
        score: 100
    },
    {
        name: "Best Practices",
        score: 77
    },
    {
        name: "SEO",
        score: 92
    }
];

const resultContainer = document.getElementById("results");

auditResults.forEach(function (item) {
    const p = document.createElement("p");

    p.textContent = item.name + ": " + item.score;

    resultContainer.appendChild(p);
});
