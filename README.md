# Eterna Visuals Portfolio

A responsive portfolio website for Eterna Visuals with:
- Home, services, filterable portfolio, about, process, and contact sections
- Mobile-friendly navigation and responsive layout
- Contact form with an Express API endpoint
- Email fallback if the API is not available
- Blue-and-white creative studio styling

## Run locally

1. Install Node.js (version 18 or later).
2. Open a terminal in this folder.
3. Run `npm install`
4. Run `npm start`
5. Visit `http://localhost:3000`

## Important before publishing

- The portfolio images are sample images from Unsplash. Replace them with your own work before presenting this as a final professional portfolio.
- The contact API stores enquiries in `messages.json`. This is suitable for a simple local demo, but serverless hosting may not provide persistent local file storage. For production, connect a database or email service.
- Update the email, WhatsApp number, and social links if your contact details change.
- This project can be deployed to a Node.js host. For Vercel, the contact storage should be moved to a persistent database or email provider before relying on it for live enquiries.
