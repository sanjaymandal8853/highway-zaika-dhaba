# 🪔 Highway Zaika Dhaba

A modern, responsive **Dhaba Restaurant Website Template** built with **React, Vite, and Tailwind CSS**. The website includes a beautiful food-focused hero section, dynamic menu data, menu category filtering, gallery, contact form, and WhatsApp ordering/chat integration.

---

## 🌾 About The Project

**Highway Zaika Dhaba** is a modern restaurant website designed for traditional Indian and Punjabi-style Dhabas.

The template is suitable for:

* 🪔 Highway Dhabas
* 🍛 Indian Restaurants
* 🥘 Punjabi Restaurants
* 🔥 Tandoor Restaurants
* 🫓 Family Restaurants
* 🚗 Highway Food Stops
* 🍽️ Local Food Businesses

Customers can explore the menu, view food images, learn about the Dhaba, contact the restaurant, and send inquiries or orders directly through WhatsApp.

---

## ✨ Features

* ⚛️ React + Vite
* 🎨 Tailwind CSS
* 📱 Fully responsive design
* 🧭 Responsive navigation
* 🏠 Attractive hero section
* 🥘 Dynamic menu data
* 🔎 Menu category filtering
* 🍽️ Food menu cards
* 📸 Food gallery
* 📖 About page
* 📞 Contact page
* 💬 WhatsApp ordering
* 🟢 Floating WhatsApp chat button
* 📲 WhatsApp contact form
* 🔗 React Router navigation
* 🎯 Lucide React icons
* 🌅 Custom Dhaba cover image
* ⚡ Fast Vite development environment
* 🧩 Reusable React components

---

## 🛠️ Technologies Used

| Technology       | Purpose                  |
| ---------------- | ------------------------ |
| React            | Frontend UI              |
| Vite             | Development & build tool |
| Tailwind CSS     | Styling                  |
| React Router     | Page navigation          |
| Lucide React     | Icons                    |
| JavaScript       | Application logic        |
| WhatsApp URL API | Chat & ordering          |

---

## 📂 Project Structure

```text
highway-zaika-dhaba/
│
├── public/
│   └── images/
│       ├── dhaba-cover.png
│       ├── hero.jpg
│       ├── about.jpg
│       ├── food-1.jpg
│       ├── food-2.jpg
│       └── gallery/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MenuCard.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   │
│   ├── data/
│   │   └── menuData.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 🚀 Installation

## 1. Clone or Download

Download the project and open it in your code editor.

Or clone your repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to the project folder:

```bash
cd highway-zaika-dhaba
```

---

## 2. Install Dependencies

Run:

```bash
npm install
```

---

## 3. Start Development Server

Run:

```bash
npm run dev
```

The website will normally be available at:

```text
http://localhost:5173
```

---

# 📦 Required Packages

The project uses:

```bash
npm install react-router-dom lucide-react
```

Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

# 🎨 Tailwind CSS Configuration

The project uses the Vite Tailwind CSS integration.

`vite.config.js`:

```jsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

# 🖼️ Images

Place your images inside:

```text
public/images/
```

Example:

```text
public/images/
├── dhaba-cover.png
├── about.jpg
├── food-1.jpg
├── food-2.jpg
└── food-3.jpg
```

The Hero component uses:

```jsx
<img
  src="/images/dhaba-cover.png"
  alt="Highway Zaika Dhaba"
  className="absolute inset-0 h-full w-full object-cover"
/>
```

You can replace the image with your own Dhaba, restaurant, food, or tandoor photographs.

---

# 📱 WhatsApp Integration

This template uses the WhatsApp `wa.me` URL format.

You will find the WhatsApp number in:

```text
src/components/Hero.jsx
src/components/MenuCard.jsx
src/components/WhatsAppButton.jsx
src/pages/Contact.jsx
```

Current demo number:

```jsx
const whatsappNumber = "919999999999";
```

Replace it with your real WhatsApp number.

### Example

```jsx
const whatsappNumber = "919876543210";
```

### Important

Use the country code and phone number without:

* `+`
* spaces
* brackets
* hyphens

For India:

```text
91 + 10 digit mobile number
```

Example:

```text
919876543210
```

---

# 💬 WhatsApp Order Message

When a customer clicks **Order on WhatsApp**, the website automatically creates a message containing the selected food item.

Example:

```text
Hello Highway Zaika Dhaba!

I want to order:

🍽️ Butter Chicken
💰 Price: ₹320

Please share availability.
```

The customer can then send the message directly through WhatsApp.

---

# 📞 WhatsApp Contact Form

The Contact page collects:

* Customer name
* Phone number
* Number of people
* Customer message

The information is converted into a WhatsApp message.

Example:

```text
Hello Highway Zaika Dhaba!

🍽️ New Customer Inquiry

👤 Name: Customer Name
📞 Phone: 9876543210
👥 Number of People: 4

💬 Message:
I would like to reserve a table.
```

---

# 🍛 Menu Data

Menu items are stored in:

```text
src/data/menuData.js
```

Example:

```jsx
{
  id: 1,
  name: "Butter Chicken",
  category: "Non-Veg",
  price: 320,
  description:
    "Tender chicken cooked in creamy tomato and butter gravy.",
  image: "/images/butter-chicken.jpg",
}
```

You can easily add more dishes.

Example:

```jsx
{
  id: 9,
  name: "Garlic Naan",
  category: "Breads",
  price: 90,
  description: "Fresh naan topped with garlic and butter.",
  image: "/images/garlic-naan.jpg",
}
```

---

# 🗂️ Menu Categories

The menu page automatically creates categories from the menu data.

Example categories:

```text
All
Veg
Non-Veg
Tandoor
Breakfast
Rice
Drinks
Breads
```

You can add or remove categories by changing the `category` value in `menuData.js`.

---

# 🧩 Components

## Navbar

File:

```text
src/components/Navbar.jsx
```

Responsible for:

* Website logo
* Navigation links
* Mobile menu
* Order button

---

## Hero

File:

```text
src/components/Hero.jsx
```

Includes:

* Dhaba cover image
* Main heading
* Description
* Menu CTA
* WhatsApp CTA

---

## MenuCard

File:

```text
src/components/MenuCard.jsx
```

Displays:

* Food image
* Food name
* Category
* Price
* Description
* WhatsApp order button

---

## SectionTitle

File:

```text
src/components/SectionTitle.jsx
```

Reusable heading component for different website sections.

---

## WhatsAppButton

File:

```text
src/components/WhatsAppButton.jsx
```

Creates a floating WhatsApp chat button.

---

## Footer

File:

```text
src/components/Footer.jsx
```

Contains:

* Dhaba information
* Navigation links
* Location
* Phone number
* Copyright

---

# 📄 Pages

## Home

```text
src/pages/Home.jsx
```

Contains:

* Hero
* Features
* Popular dishes
* Menu CTA

---

## About

```text
src/pages/About.jsx
```

Contains:

* Dhaba story
* Traditional recipes
* Fresh food
* Family-friendly information

---

## Menu

```text
src/pages/Menu.jsx
```

Contains:

* Menu categories
* Food cards
* Category filtering
* WhatsApp ordering

---

## Gallery

```text
src/pages/Gallery.jsx
```

Contains:

* Food images
* Restaurant images
* Dhaba atmosphere

---

## Contact

```text
src/pages/Contact.jsx
```

Contains:

* Location
* Phone
* Opening hours
* WhatsApp inquiry form

---

# 🧭 Routes

The project uses React Router.

Available routes:

```text
/
```

Home page.

```text
/about
```

About page.

```text
/menu
```

Menu page.

```text
/gallery
```

Gallery page.

```text
/contact
```

Contact page.

---

# 🏗️ Production Build

Create a production build:

```bash
npm run build
```

The optimized files will be generated inside:

```text
dist/
```

---

# 👀 Preview Production Build

After building:

```bash
npm run preview
```

---

# 🌐 Deployment

This React/Vite template can be deployed to:

* Netlify
* Vercel
* GitHub Pages
* Cloudflare Pages
* Firebase Hosting
* Any static hosting service

For most hosting platforms, use:

```text
Build command:
npm run build
```

```text
Publish directory:
dist
```

---

# ⚙️ Customization

You can customize:

### Restaurant Name

Change:

```text
Highway Zaika Dhaba
```

to your restaurant name.

### Tagline

Example:

```text
Real Desi Taste, Straight From Our Tandoor
```

### Phone Number

Update the WhatsApp number in the relevant components.

### Location

Update:

```text
Near Highway, Kanpur, Uttar Pradesh
```

with your restaurant address.

### Opening Hours

Example:

```text
Monday - Sunday
8:00 AM - 11:30 PM
```

### Menu

Edit:

```text
src/data/menuData.js
```

### Images

Replace images inside:

```text
public/images/
```

### Colors

Tailwind classes can be changed throughout the components.

For example:

```text
bg-orange-500
text-orange-400
hover:bg-orange-600
```

---

# 📱 Responsive Design

The website is designed for:

* 📱 Mobile phones
* 📱 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

Tailwind responsive utilities are used throughout the project.

Examples:

```text
sm:
md:
lg:
xl:
```

---

# 🔐 Important Note

This template uses WhatsApp links for communication.

It does **not** include:

* Online payment processing
* Restaurant database
* Admin dashboard
* User authentication
* Order database
* Server-side order management

For a full restaurant ordering system, a backend and database can be added separately.

---

# 🧪 Testing

Before deployment, check:

* Navigation links
* Mobile menu
* Menu category filters
* WhatsApp buttons
* Contact form
* Food images
* Responsive layouts
* Production build

Run:

```bash
npm run build
```

If the build completes successfully, the project is ready for deployment.

---

# 🚀 Future Improvements

Possible upgrades include:

* 🛒 Shopping cart
* 💳 Online payment
* 📦 Order tracking
* 👤 Customer accounts
* 🔐 Admin dashboard
* 🧾 Digital invoices
* ⭐ Customer reviews
* 📍 Google Maps integration
* 🔔 Order notifications
* 🗄️ Backend database
* 📊 Restaurant analytics
* 🌐 Multi-language support

---

# 📜 License

This template can be customized for personal or commercial restaurant projects according to the license under which you distribute it.

---

# ❤️ Credits

**Highway Zaika Dhaba**

Built with:

**React + Vite + Tailwind CSS + JavaScript**

Designed for modern Indian restaurant and Dhaba businesses.

---

## 👨‍💻 Developer

**Sanjay Mandal**

Web Developer

**Technologies:**

```text
HTML
CSS
JavaScript
React
Tailwind CSS
WordPress
Frontend Development
Backend Development
```

---

## ⭐ Support

If you like this template, consider giving the project a ⭐ on your repository.

**Highway Zaika Dhaba — Real Desi Taste, Straight From Our Tandoor.**

```
```
