# UrbanPlate - Modern Restaurant Landing Page Documentation

Thank you for purchasing **UrbanPlate**! This guide will help you customize your website and get it live in minutes.

---

## 1. Project Structure
Your download includes:
* `index.html` - The main structure of the website.
* `css/style.css` - All visual styling and animations.
* `js/script.js` - Interactive features (Menu filter, Mobile nav, Form).
* `assets/images/` - Placeholder and UI images.

---

## 2. How to Customize
### Changing the Logo & Branding
Open `index.html` and search for the `<div class="logo">` tag. Replace "UrbanPlate" with your restaurant's name.

### Updating Images
To replace any image, go to the `assets/images/` folder. Replace the existing files with your own, keeping the same file names, or update the `src` attribute in the HTML.
> **Note:** For best results, use high-quality images from Unsplash or Pexels.

---

## 3. Setting Up the Reservation Form (Crucial)
UrbanPlate uses **Formspree** to send reservations directly to your email without any backend coding.

1.  Go to [Formspree.io](https://formspree.io/) and create a free account.
2.  Create a "New Form" and named it "UrbanPlate Reservations".
3.  Copy your **unique Form ID** (e.g., `xbjnvpkq`).
4.  Open `index.html`, find the `<form>` tag in the Reservation section, and update the action URL:
    `action="https://formspree.io/f/YOUR_ID_HERE"`
5.  Save the file. Now, every time a guest books a table, you will receive an email!

---

## 4. Deployment (Going Live)
You can host this template for free using:
* **GitHub Pages:** Best for developers (Free).
* **Netlify/Vercel:** Just drag and drop the folder (Free & Fast).

---

## Support
If you have any questions or need help with customization, feel free to contact me through the platform where you purchased this template.

**Enjoy your new website!**

Life Demo:  https://basselmo.github.io/UrbanPlate---Modern-Restaurant-Landing-Page-Documentation/
