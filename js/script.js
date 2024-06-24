// Event Listener untuk form login (jika ada)
document
  .getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const stayLoggedIn = document.getElementById("stayLoggedIn").checked;

    // Validate email and password (add your own validation logic if needed)
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Simulate form submission
    alert(
      `Email: ${email}\nPassword: ${password}\nStay Logged In: ${stayLoggedIn}`
    );

    // Clear the form
    document.getElementById("loginForm").reset();
  });

// Inisialisasi Chart.js
var ctx = document.getElementById("bloodStockChart").getContext("2d");
var bloodStockChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["A+", "B+", "AB+"],
    datasets: [
      {
        label: "Stok Darah",
        data: [15000, 20000, 30000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 35000,
      },
    },
  },
});

const suggestions = [
  "RSUD Dr. Soetomo",
  "Mall XYZ",
  "Kantor PMI Surabaya",
  "Universitas ABC",
  "Lapangan Merdeka",
];

function showSuggestions(value) {
  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";
  if (value.length === 0) {
    return;
  }

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(value.toLowerCase())
  );

  filteredSuggestions.forEach((suggestion) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.textContent = suggestion;
    suggestionItem.onclick = () => selectSuggestion(suggestion);
    suggestionBox.appendChild(suggestionItem);
  });
}

function selectSuggestion(suggestion) {
  document.getElementById("searchInput").value = suggestion;
  document.getElementById("suggestions").innerHTML = "";
}
