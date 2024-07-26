# Real-Time Chat Application with Couchbase and SvelteKit

![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![Couchbase Capella](https://img.shields.io/badge/Couchbase_Capella-Enabled-red)
[![License: MIT](https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd9eb5aaca434fac4f1c34_License-MIT-blue.svg)](/LICENSE)
![Static Badge](https://img.shields.io/badge/Code_of_Conduct-Contributor_Covenant-violet.svg)

This is a simple real-time chat application built with SvelteKit, Couchbase, and WebSockets. The application allows users to send and receive messages in real-time.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [License](#license)

## Features
- Real-time messaging using WebSockets
- Messages stored in [Couchbase Capella](https://cloud.couchbase.com/)
- Simple, elegant UI with Tailwind CSS

## Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/hummusonrails/real-time-chat-svelte-couchbase.git
   cd real-time-chat-svelte-couchbase
    ```

2. **Install Dependencies**
   ```bash
   npm install
   npm install express ws couchbase dotenv
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Set Environment Variables**
    Copy the `.env.example` file in the root of the project to `.env` and set the required environment variables.
    ```bash
    COUCHBASE_BUCKET=your_bucket_name
    COUCHBASE_CONNECTION_STRING=your_connection_string
    COUCHBASE_USER=your_username
    COUCHBASE_PASSWORD=your_password
    ```

## Running the Application

1. Start the Node.js Server
    ```bash
    node server.cjs
    ```
2. Start the SvelteKit Application
    ```bash
    npm run dev -- --open
    ```

## Usage

Open your browser and navigate to http://localhost:5173. Open multiple tabs or windows to simulate multiple users. Send messages and verify they appear in all open instances in real-time.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

