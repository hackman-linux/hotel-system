document.addEventListener("DOMContentLoaded", function () {
  // Set minimum date for check-in and check-out to today
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("checkIn").min = today;
  document.getElementById("checkOut").min=today;
  const form = document.getElementById("bookingForm");
  const successMessage = document.getElementById("successMessage");


  // Initialize rooms data
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      type: "standard",
      price: 99,
      capacity: 1,
      image: "assets/img/bed1.jpeg",
      description:
        "Comfortable and cozy standard room with all essential amenities.",
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Flat-screen TV",
        "Private Bathroom",
      ],
    },
    {
      id: 2,
      name: "Deluxe Garden View",
      type: "deluxe",
      price: 169,
      capacity: 2,
      image: "assets/img/bed2.jpeg",
      description:
        "Spacious deluxe room with a beautiful garden view and premium amenities.",
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Mini Bar",
        "King Size Bed",
        "Garden View",
        "Coffee Machine",
      ],
    },
    {
      id: 3,
      name: "Executive Suite",
      type: "suite",
      price: 299,
      capacity: 3,
      image: "assets/img/bed3.jpeg",
      description:
        "Luxurious suite with separate living area and panoramic city views.",
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Mini Bar",
        "King Size Bed",
        "Living Area",
        "City View",
        "Premium Toiletries",
        "Bathtub",
      ],
    },
    {
      id: 4,
      name: "Standard Twin Room",
      type: "standard",
      price: 119,
      capacity: 2,
      image: "assets/img/room1.jpeg",
      description:
        "Comfortable standard room with twin beds, ideal for friends or colleagues.",
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Twin Beds",
        "Flat-screen TV",
        "Private Bathroom",
      ],
    },
    {
      id: 5,
      name: "Standard Triple Room",
      type: "standard",
      price: 150,
      capacity: 3,
      image: "assets/img/room2.jpeg",
      description:
        "Comfortable standard room with twin beds, ideal for friends or colleagues.",
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Triple Beds",
        "Flat-screen TV",
        "Private Bathroom",
      ],
    },
    {
      id: 6,
      name: "Deluxe Ocean View",
      type: "deluxe",
      price: 199,
      capacity: 2,
      image: "assets/img/room3.jpeg",
      description:
        "Elegant deluxe room with breathtaking ocean views and premium amenities.",
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Mini Bar",
        "King Size Bed",
        "Ocean View",
        "Balcony",
        "Coffee Machine",
      ],
    },
    {
      id: 7,
      name: "Deluxe Panoramic View",
      type: "deluxe",
      price: 230,
      capacity: 3,
      image: "assets/img/back.jpeg",
      description:
        "Elegant deluxe room with breathtaking ocean views and premium amenities.",
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Mini Bar",
        "King Size Bed",
        "Panoramic View",
        "Balcony",
        "Coffee Machine",
      ],
    },
    {
      id: 8,
      name: "Presidential Suite",
      type: "suite",
      price: 499,
      capacity: 4,
      image: "assets/img/room4.jpeg",
      description:
        "Our most prestigious accommodation with exceptional luxury and service.",
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Mini Bar",
        "King Size Bed",
        "Living Room",
        "Dining Area",
        "Panoramic View",
        "Premium Toiletries",
        "Jacuzzi",
        "Butler Service",
      ],
    },
    {
      id: 9,
      name: "Presidential Suite",
      type: "suite",
      price: 519,
      capacity: 5,
      image: "assets/img/room5.jpeg",
      description:
        "Our most prestigious accommodation with exceptional luxury and service.",
      features: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Mini Bar",
        "King Size Bed",
        "Living Room",
        "Dining Area",
        "Panoramic View",
        "Oceanic View",
        "Premium Toiletries",
        "Jacuzzi",
        "Butler Service",
      ],
    },
  ];

  // Display all rooms initially
  displayRooms(rooms);

  // Filter button functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");
      if (filter === "all") {
        displayRooms(rooms);
      } else {
        const filteredRooms = rooms.filter((room) => room.type === filter);
        displayRooms(filteredRooms);
      }
    });
  });

  // Search form functionality
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const checkIn = document.getElementById("checkIn").value;
      const checkOut = document.getElementById("checkOut").value;
      const guests = parseInt(document.getElementById("guests").value);

      if (!checkIn || !checkOut || isNaN(guests)) {
        alert("Please fill in all search fields");
        return;
      }

      if (new Date(checkIn) >= new Date(checkOut)) {
        alert("Check-out date must be after check-in date");
        return;
      }

      // Filter rooms by capacity
      const availableRooms = rooms.filter((room) => room.capacity >= guests);

      if (availableRooms.length === 0) {
        const roomsContainer = document.getElementById("roomsContainer");
        roomsContainer.innerHTML =
          '<div class="no-results">No rooms available for your criteria. Please try different dates or fewer guests.</div>';
      } else {
        displayRooms(availableRooms);
      }
    });

  // Function to display rooms
  function displayRooms(roomsToDisplay) {
    const roomsContainer = document.getElementById("roomsContainer");
    roomsContainer.innerHTML = "";

    roomsToDisplay.forEach((room) => {
      const roomCard = document.createElement("div");
      roomCard.className = "room-card";

      let featuresHTML = "";
      room.features.forEach((feature) => {
        featuresHTML += `<li><i class="fas fa-check"></i> ${feature}</li>`;
      });

      roomCard.innerHTML = `
                        <div class="room-image">
                            <img src="${room.image}" alt="${room.name}">
                            <div class="room-type ${room.type}">${room.type}</div>
                        </div>
                        <div class="room-info">
                            <h3>${room.name}</h3>
                            <p>${room.description}</p>
                            <ul class="room-features">
                                ${featuresHTML}
                            </ul>
                            <div class="room-footer">
                                <div class="room-price">
                                    <span class="price">$${room.price}</span>
                                    <span class="per-night">per night</span>
                                </div>
                                <button class="book-now-btn" data-room-id="${room.id}">Book Now</button>
                            </div>
                        </div>
                    `;

      roomsContainer.appendChild(roomCard);
    });

    // Add event listeners to Book Now buttons
    const bookButtons = document.querySelectorAll(".book-now-btn");
    bookButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const roomId = parseInt(this.getAttribute("data-room-id"));
        const room = rooms.find((r) => r.id === roomId);

        const checkIn = document.getElementById("checkIn").value;
        const checkOut = document.getElementById("checkOut").value;
        const guests = document.getElementById("guests").value;

        if (!checkIn || !checkOut || !guests) {
          alert(
            "Please select check-in/check-out dates and number of guests first"
          );
          return;
        }

        openBookingModal(room, checkIn, checkOut, guests);
      });
    });
  }

  // Modal functionality
  const modal = document.getElementById("bookingModal");
  const closeModal = document.querySelector(".close-modal");

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Function to open booking modal
  function openBookingModal(room, checkIn, checkOut, guests) {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.round(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = room.price * nights;

    const bookingDetails = document.getElementById("bookingDetails");
    bookingDetails.innerHTML = `
                    <div class="booking-summary">
                        <div class="booking-room-info">
                            <img src="${room.image}" alt="${room.name}">
                            <h3>${room.name}</h3>
                        </div>
                        <div class="booking-details-grid">
                            <div class="booking-detail">
                                <h4>Check-in</h4>
                                <p>${formatDate(checkInDate)}</p>
                            </div>
                            <div class="booking-detail">
                                <h4>Check-out</h4>
                                <p>${formatDate(checkOutDate)}</p>
                            </div>
                            <div class="booking-detail">
                                <h4>Guests</h4>
                                <p>${guests}</p>
                            </div>
                            <div class="booking-detail">
                                <h4>Nights</h4>
                                <p>${nights}</p>
                            </div>
                        </div>
                        <div class="booking-price-summary">
                            <div class="price-row">
                                <span>Room Rate</span>
                                <span>$${room.price} × ${nights} nights</span>
                            </div>
                            <div class="price-row total">
                                <span>Total</span>
                                <span>$${totalPrice}</span>
                            </div>
                        </div>
                    </div>
                `;

    modal.style.display = "block";
  }

  // Function to format date
  function formatDate(date) {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
});

// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Function to proceed to payment
function proceedToPayment() {
  alert("Redirecting to payment page...");
  // Here you would normally redirect to a payment page
  document.getElementById("bookingModal").style.display = "none";
}

// Room rates
  const roomRates = {
    standard: 100,
    deluxe: 200,
    suite: 300,
  };

  // Update price calculation
  function updatePrice() {
    const roomType = document.getElementById("roomType").value;
    const checkIn = new Date(document.getElementById("checkIn").value);
    const checkOut = new Date(document.getElementById("checkOut").value);

    if (roomType && !isNaN(checkIn) && !isNaN(checkOut)) {
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      const baseRate = roomRates[roomType] * nights;
      const taxes = baseRate * 0.1; // 10% tax
      const total = baseRate + taxes;

      document.getElementById("roomRate").textContent = `$${baseRate.toFixed(
        2
      )}`;
      document.getElementById("taxes").textContent = `$${taxes.toFixed(2)}`;
      document.getElementById("totalAmount").textContent = `$${total.toFixed(
        2
      )}`;
    }
  }

  // Add event listeners for price updates
  document.getElementById("roomType").addEventListener("change", updatePrice);
  document.getElementById("checkIn").addEventListener("change", updatePrice);
  document.getElementById("checkOut").addEventListener("change", updatePrice);

  // Form validation
  function validateForm() {
    let isValid = true;
    const inputs = form.querySelectorAll("input, select");

    inputs.forEach((input) => {
      if (!input.value) {
        input.classList.add("error");
        input.nextElementSibling.style.display = "block";
        isValid = false;
      } else {
        input.classList.remove("error");
        input.nextElementSibling.style.display = "none";
      }
    });

    // Validate card number
    const cardNumber = document.getElementById("cardNumber");
    if (!/^\d{16}$/.test(cardNumber.value)) {
      cardNumber.classList.add("error");
      cardNumber.nextElementSibling.style.display = "block";
      isValid = false;
    }

    // Validate expiry date
    const expiryDate = document.getElementById("expiryDate");
    if (!/^\d{2}\/\d{2}$/.test(expiryDate.value)) {
      expiryDate.classList.add("error");
      expiryDate.nextElementSibling.style.display = "block";
      isValid = false;
    }

    // Validate CVV
    const cvv = document.getElementById("cvv");
    if (!/^\d{3}$/.test(cvv.value)) {
      cvv.classList.add("error");
      cvv.nextElementSibling.style.display = "block";
      isValid = false;
    }

    return isValid;
  }

  // Format expiry date input
  document.getElementById("expiryDate").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    e.target.value = value;
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData(form);

      fetch("", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            successMessage.style.display = "block";
            form.reset();
            setTimeout(() => {
              successMessage.style.display = "none";
            }, 5000);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });

