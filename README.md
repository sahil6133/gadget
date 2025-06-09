# ??? Nextgen Gadgets

Nextgen Gadgets is a full-stack e-commerce web application built for showcasing and selling tech gadgets online. It features a responsive UI, user authentication, cart functionality, admin/seller dashboard, and secure payment integration.

---

## ?? Tech Stack

**Frontend:**
- React JS
- Tailwind CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB

---

## ? Features

- ?? User Signup/Login  
- ?? Product Listing with Images & Details  
- ? Add to Cart Functionality  
- ????? Seller/Admin Panel  
- ?? Stock Management (Toggle Stock Availability)  
- ?? Responsive Design for All Devices  
- ?? Payment Integration (Stripe/Other)  
- ?? Order History View  

---

## ?? Screenshots

> *(Optional: Add screenshots here by uploading them to your repo or linking them)*

\`\`\`md
![Homepage](screenshots/homepage.png)
![Product List](screenshots/products.png)
![Cart](screenshots/cart.png)
\`\`\`

---

## ?? Setup Instructions

1. **Clone the repo**

\`\`\`bash
git clone https://github.com/sahil6133/gadget.git
cd gadget
\`\`\`

2. **Install dependencies**

\`\`\`bash
# For client
cd client
npm install

# For server
cd ../server
npm install
\`\`\`

3. **Environment Setup**

Create a \`.env\` file inside \`server/\` with the following:

\`\`\`env
PORT=4000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
\`\`\`

4. **Run the app**

\`\`\`bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
\`\`\`

---

## ?? Live Demo

> ?? Coming soon or deployed link here

- Frontend: [https://your-frontend-url.vercel.app](#)
- Backend: [https://your-backend-url.onrender.com](#)

---

## ?? Folder Structure

\`\`\`
gadget/
+-- client/          # React frontend
+-- server/          # Express backend
+-- README.md
\`\`\`

---

## ????? Developed By

**Sahil6133**

- GitHub: [@sahil6133](https://github.com/sahil6133)

---

## ?? License

This project is licensed for educational and demo purposes.
