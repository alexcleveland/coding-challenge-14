// Task 2 Fetch Tickets Using Async/Await and Handle Errors
document.addEventListener('DOMContentLoaded', () => {
    fetchTickets().then(tickets => {
        if (tickets) {
            displayTickets(tickets);
        }
    });
});

async function fetchTickets() {
    const errorElement = document.getElementById(`error-message`);
    const loadingMessage = document.getElementById(`loading-message`);

    try{
        loadingMessage.style.display= `block`
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (!response.ok){
            throw new Error(`Network response did not go through`);
        }
        const tickets= await response.json();
        if(tickets.length === 0){
            throw new Error(`Tickets were not found`);
        }
        return tickets;
    }
    catch(error){
        errorElement.textContent = error.message;
        return null;
    }
    finally{
        loadingMessage.style.display = `none`;
    }
}

// Task 3 Display Tickets Dynamically on the Page

function displayTickets(tickets) {
    const container = document.getElementById(`container`);

    tickets.forEach(ticket => {
        const ticketDiv= document.createElement(`div`);
        ticketDiv.textContent = `Title: ${ticket.title}`;
        ticketDiv.style.border = '1px solid #000'; 
        ticketDiv.style.margin = '10px';
        ticketDiv.style.padding = '10px';
        container.appendChild(ticketDiv);
    });
}
fetchTickets().then(tickets => {
    if (tickets) {
        displayTickets(tickets);
    }
});