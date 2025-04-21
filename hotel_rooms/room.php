<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luxury Hotel Booking</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo">
                <a href="#">
                    <i class="fas fa-hotel"></i>
                    <span>LuxStay</span>
                </a>
            </div>
            <div class="nav-links">
                <a href="#" class="nav-link">Home</a>
                <a href="room.php" class="nav-link active">Rooms</a>
                <a href="#" class="nav-link">Amenities</a>
                <a href="#" class="nav-link">About</a>
                <a href="#" class="nav-link">Contact</a>
            </div>
            <div class="nav-buttons">
                <a href="#" class="nav-btn">Sign In</a>
                <a href="payment.php" class="nav-btn primary">Book Now</a>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- Header -->
    <div class="header">
        <div class="header-content">
            <h1>Luxury Hotel Rooms</h1>
            <p>Experience ultimate comfort and elegant style in our premium accommodations</p>
        </div>
    </div>

    <!-- Breadcrumbs -->
    <div class="container">
        <div class="breadcrumbs">
            <a href="#">Home</a> <span>/</span> Rooms
        </div>
    </div>

    <!-- Search Section -->
    <div class="search-container">
        <form id="searchForm" class="search-grid">
            <div class="input-group">
                <label for="checkIn">Check In</label>
                <input type="date" class="search-input" id="checkIn" required>
            </div>
            <div class="input-group">
                <label for="checkOut">Check Out</label>
                <input type="date" class="search-input" id="checkOut" required>
            </div>
            <div class="input-group">
                <label for="guests">Guests</label>
                <select class="search-input" id="guests" required>
                    <option value="">Select</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                </select>
            </div>
            <button type="submit" class="search-btn">
                <i class="fas fa-search"></i> Search Rooms
            </button>
        </form>

        <div class="filters">
            <button class="filter-btn active" data-filter="all">All Rooms</button>
            <button class="filter-btn" data-filter="standard">Standard</button>
            <button class="filter-btn" data-filter="deluxe">Deluxe</button>
            <button class="filter-btn" data-filter="suite">Suite</button>
        </div>
    </div>

    <!-- Room Results -->
    <div class="container">
        <h2 class="section-title">Available Accommodations</h2>
        <div class="rooms-container" id="roomsContainer">
            <!-- Rooms will be dynamically inserted here -->
        </div>
    </div>

    <!-- Testimonials Section -->
    <section class="testimonials">
        <div class="testimonials-container">
            <h2 class="section-title">What Our Guests Say</h2>
            <div class="testimonial-grid">
                <div class="testimonial-card animate-fade">
                    <div class="testimonial-quote">
                        The luxury suite exceeded our expectations. The panoramic views were breathtaking, and the service was impeccable. We'll definitely be returning!
                    </div>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">JD</div>
                        <div class="testimonial-info">
                            <h4>John Doe</h4>
                            <p>Executive Suite</p>
                            <div class="testimonial-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card animate-fade">
                    <div class="testimonial-quote">
                        The deluxe room was perfectly appointed with everything we needed. The ocean view from our balcony made our anniversary truly special.
                    </div>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">MS</div>
                        <div class="testimonial-info">
                            <h4>Maria Smith</h4>
                            <p>Deluxe Room</p>
                            <div class="testimonial-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card animate-fade">
                    <div class="testimonial-quote">
                        Clean, comfortable, and centrally located. The standard room offered excellent value, and the staff went above and beyond to ensure our comfort.
                    </div>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">RJ</div>
                        <div class="testimonial-info">
                            <h4>Robert Johnson</h4>
                            <p>Standard Room</p>
                            <div class="testimonial-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-col">
                <h3>LuxStay Hotel</h3>
                <p>Experience luxury and comfort like never before. Our premium accommodations are designed to make your stay unforgettable.</p>
                <div class="social-links">
                    <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-pinterest-p"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="room.php">Rooms & Suites</a></li>
                    <li><a href="#">Dining</a></li>
                    <li><a href="#">Spa & Wellness</a></li>
                    <li><a href="#">Meetings & Events</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Contact Us</h3>
                <ul class="contact-info">
                    <li><i class="fas fa-map-marker-alt"></i> 123 Luxury Avenue, City</li>
                    <li><i class="fas fa-phone"></i> +1 (555) 123-4567</li>
                    <li><i class="fas fa-envelope"></i> info@luxstay.com</li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Newsletter</h3>
                <p>Subscribe to receive special offers and updates</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Your Email" required>
                    <button type="submit"><i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 LuxStay Hotel. All rights reserved.</p>
            <div class="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Sitemap</a>
            </div>
        </div>
    </footer>

    <div class="modal" id="bookingModal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Confirm Booking</h2>
            <div id="bookingDetails"></div>
            <button class="book-btn" onclick="proceedToPayment()">Proceed to Payment</button>
        </div>
    </div>

    <script src="assets/js/scripts.js"></script>
</body>

</html>