const leaderboard = [
    { name: "Sigma", points: 9850 },
    { name: "Draco", points: 9320 },
    { name: "Dixon Mayaz", points: 8750 },
    { name: "Night", points: 8420 },
    { name: "Glazer", points: 7980 },
    { name: "Rider", points: 7540 },
    { name: "Storm", points: 7010 },
    { name: "Ace", points: 6890 },
    { name: "Socks", points: 6500 },
    { name: "V.Roy", points: 6120 }
];

const leaderboardList =
document.getElementById("leaderboardList");

leaderboard.forEach((player, index) => {

    const item = document.createElement("div");

    item.classList.add("leader-item");

    item.innerHTML = `
        <span>#${index + 1}</span>
        <span>${player.name}</span>
        <span>${player.points} pts</span>
    `;

    leaderboardList.appendChild(item);

});