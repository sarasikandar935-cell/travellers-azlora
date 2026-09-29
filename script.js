function searchTrips() {

    const destination =
        document.getElementById("destinationInput").value;

    const date =
        document.getElementById("travelDate").value;

    const travellers =
        document.getElementById("travellers").value;

    if (destination === "") {
        alert("Please enter a destination.");
        return;
    }

    if (date === "") {
        alert("Please select a travel date.");
        return;
    }

    const results = document.getElementById("searchResults");

    results.innerHTML = `
        <div class="result-card">
            <h2>${destination} Escape</h2>
            <p>5 Days / 4 Nights</p>
            <p>Hotel stay • Airport transfer • City tour</p>
            <h3>From £599</h3>

            <button onclick="alert('Package selected!')">
                View Package
            </button>
        </div>
    `;
}function selectPackage(packageName) {
    alert("You selected the " + packageName + " package!");
}// Booking Form
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("fullName").value;
    const destination = document.getElementById("bookingDestination").value;
    const date = document.getElementById("bookingDate").value;

    alert(
        "Thank you, " + name + "!\n\n" +
        "Your booking request for " + destination +
        " on " + date +
        " has been submitted."
    );

    this.reset();
});
// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;

    alert(
        "Thank you, " + name + "!\n\n" +
        "Your message has been sent successfully."
    );

    this.reset();
});
// Back to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}