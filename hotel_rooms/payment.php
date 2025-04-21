<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luxury Hotel Booking</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
        <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Here you would typically process the form data and handle payment
        // This is just a simple example
        $response = array(
            'success' => true,
            'message' => 'Booking confirmed successfully!'
        );

        // Send JSON response
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    }
    ?>

    <div class="container">
        <div class="form-header">
            <h1>Luxury Hotel Booking</h1>
            <p>Complete your reservation with secure payment</p>
        </div>

        <div class="success-message" id="successMessage">
            Booking confirmed successfully!
        </div>

        <form id="bookingForm" method="POST">
            <div class="form-section">
                <h2 class="section-title">Booking Details</h2>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="checkIn">Check-in Date</label>
                        <input type="date" id="checkIn" name="checkIn" required>
                        <div class="error-message">Please select a check-in date</div>
                    </div>
                    <div class="form-group">
                        <label for="checkOut">Check-out Date</label>
                        <input type="date" id="checkOut" name="checkOut" required>
                        <div class="error-message">Please select a check-out date</div>
                    </div>
                    <div class="form-group">
                        <label for="guests">Number of Guests</label>
                        <select id="guests" name="guests" required>
                            <option value="">Select guests</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                        </select>
                        <div class="error-message">Please select number of guests</div>
                    </div>
                    <div class="form-group">
                        <label for="roomType">Room Type</label>
                        <select id="roomType" name="roomType" required>
                            <option value="">Select room type</option>
                            <option value="standard">Standard Room</option>
                            <option value="deluxe">Deluxe Room</option>
                            <option value="suite">Executive Suite</option>
                            <option value="suite">Presidential Suite</option>
                        </select>
                        <div class="error-message">Please select a room type</div>
                    </div>
                </div>
            </div>

            <div class="form-section">
                <h2 class="section-title">Payment Information</h2>
                <div class="card-details">
                    <div class="form-group">
                        <label for="cardName">Cardholder Name</label>
                        <input type="text" id="cardName" name="cardName" required>
                        <div class="error-message">Please enter cardholder name</div>
                    </div>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="cardNumber">Card Number</label>
                            <input type="text" id="cardNumber" name="cardNumber" maxlength="16" required>
                            <div class="error-message">Please enter a valid card number</div>
                        </div>
                        <div class="form-group">
                            <label for="expiryDate">Expiry Date</label>
                            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" maxlength="5"
                                required>
                            <div class="error-message">Please enter expiry date</div>
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" maxlength="3" required>
                            <div class="error-message">Please enter CVV</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="price-summary">
                <div class="price-row">
                    <span>Room Rate</span>
                    <span id="roomRate">$0.00</span>
                </div>
                <div class="price-row">
                    <span>Taxes & Fees</span>
                    <span id="taxes">$0.00</span>
                </div>
                <div class="price-row price-total">
                    <span>Total Amount</span>
                    <span id="totalAmount">$0.00</span>
                </div>
            </div>

            <button type="submit" class="submit-btn">Confirm Booking</button>
        </form>
    </div>

    <script src="assets/js/scripts.js"></script>
</body>

</html>