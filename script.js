// script.js

// Handling the "More" dropdown
document.addEventListener("DOMContentLoaded", () => {
    const moreButton = document.querySelector(".more");
    const moreMenu = document.createElement("div");
    moreMenu.className = "more-menu";
    moreMenu.style.position = "absolute";
    moreMenu.style.display = "none";
    moreMenu.style.backgroundColor = "#fff";
    moreMenu.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    moreMenu.style.padding = "10px";
    moreMenu.innerHTML = `
        <ul style="list-style: none; margin: 0; padding: 0;">
            <li><a href="#">Notification Preferences</a></li>
            <li><a href="#">Customer Care</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Download App</a></li>
        </ul>
    `;
    document.body.appendChild(moreMenu);

    moreButton.addEventListener("mouseenter", () => {
        const rect = moreButton.getBoundingClientRect();
        moreMenu.style.left = `${rect.left}px`;
        moreMenu.style.top = `${rect.bottom + window.scrollY}px`;
        moreMenu.style.display = "block";
    });

    moreButton.addEventListener("mouseleave", () => {
        setTimeout(() => {
            moreMenu.style.display = "none";
        }, 200);
    });

    moreMenu.addEventListener("mouseenter", () => {
        moreMenu.style.display = "block";
    });

    moreMenu.addEventListener("mouseleave", () => {
        moreMenu.style.display = "none";
    });
});

// Search button functionality
const searchButton = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");

searchButton.addEventListener("click", () => {
    const query = searchBox.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // Add your search logic here
    } else {
        alert("Please enter a search term.");
    }
});

// Login button functionality
const loginButton = document.querySelector(".login button");
loginButton.addEventListener("click", () => {
    alert("Login functionality will be implemented soon.");
});

// Add hover effect for buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#0056b3";
        button.style.color = "#fff";
    });
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "";
        button.style.color = "";
    });
});

// "View All" button functionality in section-4
const viewAllButton = document.querySelector(".section-4-offers-viewall button");
viewAllButton.addEventListener("click", () => {
    alert("Redirecting to the offers page...");
    // Add redirect logic here
});
