
# Ternafit

A modern web platform dedicated to amplifying Tigrean voices, sharing stories of resilience, and supporting humanitarian efforts in the Tigray region.

**Live Site → [www.ternafit.org](https://www.ternafit.org)**

---

## 🔗 Quick Links

- [Live Site](https://www.ternafit.org)
- [Strategic Roadmap](GEMINI_IMPLEMENTATION.md)
- [Annual Report](public/reports/ternafit-annual-report-2024.pdf)
- [Contributing Guide](CONTRIBUTING.md)
- [License](LICENSE)

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

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v18.x or later recommended)
- npm (v9.x or later recommended)

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yosephdev/ternafit.git
   cd ternafit
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
    - Copy the example file:

      ```bash
       cp .env.example .env
      ```

    - Fill in required values (e.g., API keys):

      ```env
       VITE_NEWS_API_URL=https://your-netlify-function-url/.netlify/functions/fetch-news
      ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view in your browser.

## 📂 Project Structure

The project follows a standard Vite/React structure. Key directories and files:

```text
/
├── public/                  # Static assets (images, logos, documents)
│   └── images/
│       ├── blog/
│       ├── documentation/
│       ├── figures/
│       ├── hero/
│       ├── logos/
│       ├── podcast/
│       ├── projects/
│       ├── stories/
│       ├── team/
│       └── ...
├── src/                     # Main source code
│   ├── components/          # Reusable UI components
│   │   └── ui/              # shadcn/ui components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components mapped to routes
│   ├── contexts/            # Language and translation contexts
│   ├── data/                # Static data (blog posts, news, team)
│   ├── translations/        # Translation files
│   ├── types/               # TypeScript types
│   └── main.tsx             # Application entry point
├── netlify/                 # Netlify serverless functions
│   └── functions/
│       └── fetch-news.ts    # News API serverless function
└── package.json
```

## 🔗 APIs & Integrations

- **News API:** Fetched via Netlify serverless function (`/netlify/functions/fetch-news.ts`) to securely handle API keys.
- **Podcast Hosting:** Audio files streamed from AWS S3 for reliability.
- **Contact Form:** Uses Netlify Forms for backend-free submissions.
- **Event Registration:** QR codes and direct links to Google Meet for access.

## 🌐 Deployment

Deployed and hosted on Netlify. CI/CD pipeline is configured for automatic deployments:

- Push changes to the main branch.
- Netlify builds and deploys the new version automatically.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on code of conduct and submitting pull requests.

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 📞 Contact

For inquiries, email: [info@ternafit.org](mailto:info@ternafit.org)

---

Made with ❤️ for Tigray
