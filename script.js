// Extract the user_id from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user_id');

// Function to fetch balance and spent data from the API
async function fetchBalanceData() {
    try {
        const response = await fetch(`http://localhost:8000/api/balance?user_id=${userId}`);
        const data = await response.json();
        
        if (data.error) {
            console.error('Error:', data.error);
        } else {
            const balanceElement = document.getElementById('balance');
            const spentElement = document.getElementById('spent');
            balanceElement.textContent = data.balance;
            spentElement.textContent = data.spent;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the fetchBalanceData function when the page loads
window.addEventListener('load', fetchBalanceData);
