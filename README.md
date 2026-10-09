# 🛒 বাজার দর | BazarDor

### প্রয়োজনীয় পণ্যের দাম এক নজরে 🇧🇩

**BazarDor (বাজার দর)** is a responsive Bengali market price tracking web application that helps users explore, compare, and understand the daily prices of essential products in Bangladesh. Users can browse products by category, view price changes, explore market-wise pricing, and securely manage their accounts.

The application is designed with a clean, user-friendly interface that works smoothly across mobile, tablet, and desktop devices.

---

## ✨ Features

- 📊 **Daily Market Prices** — Browse the latest prices of essential products such as rice, vegetables, fish, meat, and other daily necessities.
- 📈 **Price Trends** — Easily identify products whose prices have increased or decreased.
- 🛍️ **Product Details** — View minimum, maximum, average, and market-wise prices for individual products.
- 🗂️ **Category Browsing** — Explore products by category and sort them by price.
- 🔐 **Authentication** — Sign up and sign in using email/password, Google, or GitHub.
- 👤 **Profile Management** — View and update user information.
- 🔔 **Toast Notifications** — Receive feedback for authentication, validation, and other user actions.
- 💀 **Loading Skeletons** — Display loading states while product data is being fetched.
- 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop screens.
- 🚫 **Custom 404 Pages** — Friendly error pages for invalid products, categories, and routes.
- 🔄 **Dynamic Product Pages** — Access detailed product information through dynamic routes.

---

## 👥 Target Users

BazarDor is designed for anyone who wants convenient access to everyday market price information.

- 🏠 **Households & Families** — Check current prices before going shopping.
- 🛒 **Regular Shoppers** — Compare prices and identify price increases or decreases.
- 📊 **Price-Conscious Consumers** — Track market trends and make informed purchasing decisions.
- 🏪 **Small Business Owners & Retailers** — Get a quick overview of common market prices.
- 🇧🇩 **General Consumers in Bangladesh** — Access market information through a simple Bengali-friendly interface.

---

## 🛠️ Technologies Used

| Technology          | Purpose                                                    |
| ------------------- | ---------------------------------------------------------- |
| **Next.js**         | Application development, routing, and server-side features |
| **TypeScript**      | Type-safe and maintainable code                            |
| **Tailwind CSS**    | Responsive styling and UI development                      |
| **DaisyUI**         | Reusable UI components                                     |
| **BetterAuth**      | Authentication and user account management                 |
| **React Hot Toast** | Success, error, and validation notifications               |
| **Vercel**          | Deployment and hosting                                     |

---

## 🔐 Authentication

BazarDor uses **BetterAuth** for user authentication and account management.

### Supported Authentication

- 📧 Email & Password
- 🔵 Google
- ⚫ GitHub

Authenticated users can:

- Access protected product detail pages
- View their profile
- Update their personal information
- Sign out securely

---

## 📂 Main Application Sections

### 🏠 Home Page

The home page provides an overview of the current market situation, including:

- Price ticker
- Hero/banner section
- Products with increased prices
- Products with decreased prices
- All available products
- Responsive product cards

### 🗂️ Category Page

Users can browse products by category and sort them using:

- Default
- Price: Low to High
- Price: High to Low

The application handles Bengali numerals correctly when sorting prices.

### 🛍️ Product Details

Each product has a dedicated detail page containing:

- Product name and emoji
- Description
- Category
- Unit
- Minimum price
- Maximum price
- Average price
- Market-wise prices

### 👤 My Profile

Authenticated users can view their profile information and update their name through the profile management section.

---

## 👥 User Flow

```text
Home
 │
 ├── Browse Products
 │      │
 │      ├── Category
 │      │     └── Product List
 │      │
 │      └── Product Details 🔐
 │
 ├── Sign In
 │      └── Home
 │
 ├── Sign Up
 │      └── Sign In
 │
 └── My Profile 🔐
        └── Update Information
```

---

## 🔮 Future Scope

BazarDor can be further expanded with features that provide more accurate and personalized market information.

- 📍 **Location-Based Pricing** — Show prices based on the user's city or selected market.
- 📈 **Historical Price Charts** — Display daily, weekly, and monthly price trends.
- 🔔 **Price Alerts** — Notify users when a product reaches a specific price or changes significantly.
- ❤️ **Favorite Products** — Allow users to save frequently purchased products.
- 🔎 **Advanced Search & Filtering** — Search products by name, category, price range, and market.
- 🏪 **Market Comparison** — Compare the same product across different markets.
- 🧾 **Shopping List** — Create shopping lists and calculate estimated expenses.
- 📱 **Mobile Application** — Develop dedicated Android and iOS applications.
- 🌐 **Multi-Language Support** — Add English alongside the Bengali interface.
- 🤖 **Price Prediction** — Use historical data to estimate future price trends.
- 👨‍💼 **Admin Dashboard** — Manage products, categories, markets, and pricing information.
- 🔄 **Real-Time Data Integration** — Connect reliable external APIs or data sources for automatic price updates.

---

## 🌐 Deployment

The application can be deployed using **Vercel**.

Before deployment, make sure:

- All environment variables are configured in Vercel.
- BetterAuth URLs are correctly configured for the production domain.
- OAuth callback URLs are updated.
- Dynamic routes such as `/product/[slug]` work correctly after deployment.

---

## 🌐 Live Demo

🔗 **Live Website:** [Add your deployed website URL]

🔗 **GitHub Repository:** [(https://github.com/sadia-shitol/Bazardor)]

---

## 👩‍💻 Author

**Sadia Bintay Mostafiz**

- GitHub: [sadia-shitol](https://github.com/sadia-shitol)
- LinkedIn: [Sadia Bintay Mostafiz](www.linkedin.com/in/sadia-bintay-mostafiz)
- Portfolio: [sadiashitol.tech](https://sadia-bintay-mostafiz.vercel.app/)

---

<p align="center">
  🛒 <strong>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</strong>
  <br />
  Making everyday market prices easier to explore and compare.
</p>
