

#### How to Set-up

* Prepare the .env file in the root directory.
<pre>
PORT=8888
CLIENT_URL="http://localhost:5173"

JWT_SECRET={Your JWT key}

GOOGLE_CLIENT_ID={Your Google client ID}
</pre>

* Prepare the config/config.json file.
<pre>

</pre>

#### How to Initialize the Project.

* Clone the project.
<pre>
git clone https://github.com/count-on-mee/backend
</pre>

* Install the node.js packages.
<pre>
cd backend
npm install
</pre>

* Prepare the database in the MySQL.
<pre>
DROP DATABASE sesac ...
CREATE DATABASE sesac ...
</pre>

* Generate the DB tables.
<pre>
npm run sequelize:migrate
</pre>

#### How to Deploy the Server APIs

* Use the nodemon to execute the server.
<pre>
nodemon index.js
</pre>
