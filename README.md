# Ternafit

A modern web platform dedicated to amplifying Tigrean voices, sharing stories of resilience, and supporting humanitarian efforts in the Tigray region.

**Live Site → [www.ternafit.org](https://www.ternafit.org)**

---

## 🌍 About The Project

Ternafit is a digital platform created to raise global awareness about the Tigray region. Our mission is to share powerful stories of resilience, provide reliable information, and support ongoing humanitarian recovery efforts. Through news, podcasts, educational resources, and community engagement, we aim to amplify Tigrean voices and foster a global community of support.

## ✨ Features

- **Podcast Series:** Engaging audio stories, interviews, and discussions that bring Tigray's narratives to the forefront.
- **News Aggregator:** A curated feed of up-to-date news concerning Tigray, powered by the News API.
- **In-Depth Blog:** A space for articles, impact stories, and updates on our programs and initiatives.
- **Community Events:** Information and registration for training sessions, scholarships, and community gatherings.
- **Multilingual Support:** Fully accessible in both English and Swedish.
- **Responsive Design:** A seamless experience across all devices, from mobile phones to desktops.

## 🛠️ Tech Stack

This project is built with a modern, robust technology stack:

- **Frontend:** React 18 & TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router
- **Icons:** Lucide React
- **Hosting & Serverless:** Netlify
- **Media Storage:** AWS S3

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js (v18.x or later recommended)
- npm (v9.x or later recommended)

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**

   ```bash

git clone <https://github.com/your-username/ternafit.git>

```
2. **Navigate to the project directory**
   ```bash
cd ternafit
```

3. **Install NPM packages**

   ```bash

npm install

```
4. **Set up environment variables**
   Create a `.env` file in the root of the project and add any necessary environment variables. You can copy the example file:
   ```bash
cp .env.example .env
```

   Then, fill in the required values (e.g., API keys).

   ```env
# .env
VITE_NEWS_API_URL=https://your-netlify-function-url/.netlify/functions/fetch-news
```

5. **Run the development server**

   ```bash

npm run dev

```
   Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

## 📂 Project Structure
The project follows a standard Vite/React structure. Key directories and files are outlined below:

```

/
├── public/                  # Static assets (images, logos, documents)
│   └── images/
│       ├── blog/
│       ├── documentation/
│       ├── figures/
│       ├── hero/
│       ├── logos/
│       └── ...
├── src/                     # Main source code
│   ├── assets/              # Static assets processed by Vite
│   ├── components/          # Reusable UI components (buttons, cards, etc.)
│   │   └── ui/              # shadcn/ui components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components mapped to routes
│   │   ├── Home.tsx
│   │   ├── Blog.tsx
│   │   ├── News.tsx
│   │   └── ...
│   ├── App.tsx              # Root component with routing
│   └── main.tsx             # Application entry point
├── netlify/                 # Netlify serverless functions
│   └── functions/
│       └── fetch-news.ts    # Serverless function for News API
└── package.json

```

## 🔗 APIs & Integrations
- **News API:** News articles are fetched via a Netlify serverless function (`/netlify/functions/fetch-news.ts`) to securely handle the API key.
- **Podcast Hosting:** Audio files are hosted on and streamed from an AWS S3 bucket for reliable delivery.
- **Contact Form:** The contact page uses Netlify Forms for seamless, backend-free form handling.
- **Event Registration:** Events utilize QR codes and direct links to platforms like Google Meet for registration and access.

## 🌐 Deployment
This application is deployed and hosted on Netlify. The CI/CD pipeline is configured for automatic deployments.
- Push your changes to the main branch.
- Netlify will automatically build and deploy the new version of the site.

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📞 Contact
For inquiries or to get in touch, please email us at [info@ternafit.org](mailto:info@ternafit.org).

---

Made with ❤️ for Tigray
