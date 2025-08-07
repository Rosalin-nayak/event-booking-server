# Event Booking API

This is a RESTful API for an Event Booking system built with Node.js, Express, and MongoDB.

---

## 🌐 Deployed URL

👉 [https://event-booking-server-1.onrender.com]

---

## 📦 API Endpoints

### Auth Routes
- POST /api/auth/register – Register a new user  
- POST /api/auth/login – Login and get JWT token

### Events Routes
- GET /api/events – Get all events  
- POST /api/events – Create an event (admin only)  
- PUT /api/events/:id – Update event  
- DELETE /api/events/:id – Delete event

### Booking Routes
- POST /api/bookings/:eventId – Book an event  
- GET /api/bookings/me – Get current user's bookings  
- DELETE /api/bookings/:id – Cancel booking

---

## 🧪 How to Test

You can test the API using *Postman* or *cURL*.

### Example Register Request

POST /api/auth/register
```json
{
  "name": "Rosalin",
  "email": "rosalin@example.com",
  "password": "yourpassword"
}