// Extract the tg_id from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const tgId = urlParams.get('tg_id');

// Function to fetch balance and spent data from the API
async function fetchBalanceData() {
    try {
        const response = await fetch(`http://localhost:8000/api/balance?tg_id=${tgId}`);
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
window.addEventListener('load', fetchBalanceData);
