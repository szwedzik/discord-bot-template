# Discord Bot Template

A template for creating a **Discord bot** using **TypeScript**. It provides a clean structure and essential setup to help you get started quickly.

## ✨ Features

- **TypeScript Support** – Write scalable and type-safe code.
- **Environment Variables** – Manage secrets securely with `.env`.
- **Linting & Formatting** – Enforce code quality with ESLint and Prettier.
- **Easy Development & Deployment** – Includes scripts for both dev and production modes.

## 🚀 Getting Started

### 📌 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) `>= 23.6.0`
- [pnpm](https://pnpm.io/) (or `npm` / `yarn`)

### 📥 Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/szwedzik/discord-bot-template.git
   cd discord-bot-template
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   ```

3. **Set up environment variables:**
   ```sh
   cp .env.example .env
   ```
   Open `.env` and fill in your **Discord bot token**.

### ▶️ Running the Bot

#### Development Mode

Start the bot in development mode with hot-reloading:

```sh
pnpm run dev
```

#### Production Mode

Build and run the bot for production:

```sh
pnpm run build
pnpm run start
```

### 🛠 Linting & Formatting

To check for linting issues:

```sh
pnpm run lint
```

To automatically fix linting issues:

```sh
pnpm run lint:fix
```

## 🤝 Contributing

We welcome contributions from the community! Follow these steps to contribute:

1. **Fork the repository:**

   ```sh
   git fork https://github.com/szwedzik/discord-bot-template.git
   ```

2. **Clone your fork:**

   ```sh
   git clone https://github.com/your-username/discord-bot-template.git
   cd discord-bot-template
   ```

3. **Create a new branch:**

   ```sh
   git checkout -b feature-name
   ```

4. **Make your changes and commit:**

   ```sh
   git add .
   git commit -m "Describe your changes"
   ```

5. **Push to your fork:**

   ```sh
   git push origin feature-name
   ```

6. **Create a Pull Request:**
   - Go to the original repository on GitHub.
   - Navigate to the "Pull Requests" tab.
   - Click "New Pull Request" and select your branch.
   - Fill out the template and submit your PR for review.

### ✅ Contribution Guidelines

- Follow the existing code style.
- Ensure your changes do not break existing functionality.
- Run `pnpm run lint` before submitting a PR.
- Add relevant tests if applicable.

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

💡 **Contributions are welcome!** Feel free to fork and improve this template.
