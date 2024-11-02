// Task 2 Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    const errorElement = document.getElementById(`error-message`);
    const loadingMessage = document.getElementById(`loading-Message`);

    try{
        loadingMessage.style.display= `Standby`
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (response.ok){
            throw new Error(`Network response did not go through`);
        }
        const tickets= await response.json();
        if(tickets.length=== 0){
            throw new Error(`Tickets were not found`);
        }
        return tickets;
    }
    catch(error){
        errorElement.textContent = error.message;
        return null;
    }
    finally{
        loadingMessage.style.display = `Loading`
    }
}
