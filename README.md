#### How to Set-up

- Prepare the .env file in the root directory.

<pre>
PORT=8888
CLIENT_URL="http://localhost:5173"

JWT_SECRET={Your JWT key}

GOOGLE_CLIENT_ID={Your Google client ID}
GOOGLE_CLIENT_SECRET={Your Google client secret}
GOOGLE_CALLBACK_URI={Your Google callback uri}

</pre>

- Prepare the config/config.json file.
<pre>
{
  "development": {
    "username": "root",
    "password": "",
    "database": "sesac",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
</pre>

- Prepare the database in the MySQL.
<pre>
DROP DATABASE sesac;
CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
</pre>

#### How to Initialize the Project.

- Clone the project.
<pre>
git clone https://github.com/count-on-mee/backend
</pre>

- Install the node.js packages.
<pre>
cd backend
npm install
</pre>

- Generate the DB tables.
<pre>
npm run sequelize:migrate
</pre>

#### How to Deploy the Server APIs

- Use the nodemon to execute the server.
<pre>
nodemon index.js
</pre>
