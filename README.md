# Node.js Proxy Server for Weather API

This is a Node.js proxy server project designed to bypass CORS (Cross-Origin Resource Sharing) policy issues and facilitate access to the weather API. The main focus of the project is the back-end, using Express to set up the server and manage routes.

## Features

- **Proxy Server**: Forwards requests to the weather API, resolving CORS issues.
- **Cache**: Implemented caching with apicache to optimize request performance.
- **Rate Limiting**: Rate limiting with express-rate-limit to prevent abuse.
- **CORS**: Enabled CORS to allow cross-origin requests.

## Technologies Used

- Node.js
- Express
- apicache
- express-rate-limit
- dotenv
- needle
- cors

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the project root and add your environment variables:

    ```env
    API_BASE_URL=your_api_base_url
    API_KEY_NAME=your_api_key_name
    API_KEY_VALUE=your_api_key_value
    PORT=your_port
    ```

5. Start the server:

    ```bash
    npm start
    ```

## Endpoints

- `GET /api`: Main route that forwards requests to the weather API.

## Project Structure

- `public/`: Contains static files (HTML, CSS, JS).
- `routes/`: Contains route definitions for the proxy server.
- `index.js`: Main server file.
- `package.json`: List of dependencies and project scripts.

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the MIT License.
