document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const checkinDate = document.getElementById('checkin-date').value;
    const checkoutDate = document.getElementById('checkout-date').value;

    if(destination && checkinDate && checkoutDate) {
        alert(`Searching for trips to ${destination} from ${checkinDate} to ${checkoutDate}`);
    } else {
        alert('Please fill in all fields');
    }
});
