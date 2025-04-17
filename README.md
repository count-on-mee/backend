#### How to Initialize the Project

- Clone the project.
    <pre>
    git clone https://github.com/count-on-mee/backend
    </pre>

- Install the node.js packages.
    <pre>
    cd backend
    npm install
    </pre>

#### Environment Configuration

- This project supports the following environments:

  1. development: Local development environment (.env.development)
  2. test: Test environment (.env.test)
  3. production: Production environment (.env.production)

- How to configure

  1. Create environment files based on .env.example
  2. Specify the environment using NODE_ENV:

  ```bash
  # Development (default)
  npm start

  # Test
  NODE_ENV=test npm test

  # Production
  NODE_ENV=production npm start
  ```

#### How to Deploy the Server APIs

- Use the nodemon to execute the server.
    <pre>
    npm start
    </pre>
