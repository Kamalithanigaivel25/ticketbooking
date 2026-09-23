function bookTicket() {

    let name = document.getElementById("name").value;
    let event = document.getElementById("event").value;
    let tickets = document.getElementById("tickets").value;

    if (name == "") {
        alert("Please enter your name");
        return;
    }

    let price;

    if (event == "Movie") {
        price = 150;
    }
    else if (event == "Bus") {
        price = 300;
    }
    else {
        price = 500;
    }

    let total = price * tickets;

    document.getElementById("result").innerHTML =
        "Booking Successful! 🎉<br>" +
        "Name: " + name + "<br>" +
        "Event: " + event + "<br>" +
        "Tickets: " + tickets + "<br>" +
        "Total: ₹" + total;
}