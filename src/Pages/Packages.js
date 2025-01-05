import React, { useState } from "react";
import "./Packages.css"; // Import CSS for styling
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Packages = () => {
  // State hooks for form, package, modal visibility, and booking status
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [bookingStatus, setBookingStatus] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Sample packages data
  const packages = [
    {
      id: 1,
      name: "Prewedding Shoot",
      price: "$500",
      description: "Capture the beautiful moments of your prewedding journey.",
      features: [
        "2 Hours Session",
        "Outdoor Locations",
        "High-Resolution Photos",
        "2 Edited Photos"
      ],
    },
    {
      id: 2,
      name: "Wedding Shoot",
      price: "$1500",
      description: "Immortalize your wedding day with elegant and stunning photos.",
      features: [
        "Full Day Coverage",
        "Bridal and Groom Shots",
        "Wedding Ceremony & Reception Photos",
        "100+ Edited Photos"
      ],
    },
    {
      id: 3,
      name: "Birthday Shoot",
      price: "$300",
      description: "Celebrate your special day with a fun and memorable photoshoot.",
      features: [
        "2 Hours Session",
        "Props and Themes",
        "Personalized Photo Album",
        "15 Edited Photos"
      ],
    },
    {
      id: 4,
      name: "Corporate Event",
      price: "$2000",
      description: "Professional photos to represent your corporate event or seminar.",
      features: [
        "Full Day Event Coverage",
        "Corporate Branding Photography",
        "Event Group Shots",
        "300+ Photos Delivered"
      ],
    },
  ];

  // Handle package selection to show modal
  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalVisible(true); // Open the modal when a package is selected
  };

  // Handle form input changes
  const handleContactChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission for booking
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !selectedPackage ||
      !selectedDate ||
      !contactInfo.name ||
      !contactInfo.email ||
      !contactInfo.phone
    ) {
      setBookingStatus("Please fill in all fields.");
      return;
    }
    
    // Booking Successful
    setBookingStatus("Booking Successful! Thank you for choosing our services.");

    // Reset the form and close the modal after booking
    setContactInfo({ name: "", email: "", phone: "" });
    setSelectedDate(null);
    setIsModalVisible(false);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="packages">
      <h1>Photography Packages</h1>

      {/* Package Grid */}
      <div className="package-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <h3>{pkg.name}</h3>
            <p className="price">{pkg.price}</p>
            <p className="description">{pkg.description}</p>

            <ul className="features-list">
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <button
              className="book-btn"
              onClick={() => handlePackageClick(pkg)}
            >
              Book This Package
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Booking Form */}
      {isModalVisible && (
        <div className={`modal-overlay ${isModalVisible ? "show" : ""}`} onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Book {selectedPackage.name}</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="package">Package</label>
                <input
                  type="text"
                  id="package"
                  value={selectedPackage.name}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Select Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                  placeholderText="Select a date"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactInfo.name}
                  onChange={handleContactChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleContactChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleContactChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Book Now
              </button>
            </form>

            {bookingStatus && <div className="status-message">{bookingStatus}</div>}

            <button className="close-modal-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;
