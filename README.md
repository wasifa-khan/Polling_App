

<h1>Polling App</h1>

<p>A real-time polling application built with the MERN stack (MongoDB, Express, React, Node.js) and Vite for a faster frontend development experience. This app allows users to create polls, vote on them, and view results in real-time with support for anonymous voting, user authentication, and image optimization.</p>

<h2>Features</h2>
<ul>
  <li><strong>User Authentication:</strong> Secure login and registration.</li>
  <li><strong>Poll Creation and Management:</strong> Authenticated users can create, update, and delete polls.</li>
  <li><strong>Anonymous Voting:</strong> Non-logged-in users can vote, but only authenticated users can create and manage polls.</li>
  <li><strong>Real-time Updates:</strong> Poll results update live using Socket.io.</li>
  <li><strong>Image Optimization:</strong> Poll images are optimized using APIs like TinyPNG or ShortPixel before being displayed.</li>
</ul>

<h2>Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li><strong>Vite + React:</strong> Fast development environment and rich UI using React.</li>
  <li><strong>React Router:</strong> For navigation between views.</li>
  <li><strong>Socket.io Client:</strong> For real-time updates.</li>
</ul>

<h3>Backend</h3>
<ul>
  <li><strong>Node.js + Express:</strong> RESTful API with routing and middleware.</li>
  <li><strong>MongoDB + Mongoose:</strong> NoSQL database for storing poll and user data.</li>
  <li><strong>Socket.io:</strong> Real-time communication.</li>
  <li><strong>Multer:</strong> Handling file uploads.</li>
  <li><strong>Image Optimization API:</strong> Used for optimizing poll images.</li>
</ul>

<h2>Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li><strong>Node.js</strong> and <strong>npm</strong> installed.</li>
  <li><strong>MongoDB</strong> installed or a MongoDB Atlas account.</li>
  <li>Optional: TinyPNG or ShortPixel API key for image optimization.</li>
</ul>

<h3>Setup</h3>

<h4>Clone the Repository</h4>
<pre><code>git clone https://github.com/wasifa-khan/polling-app.git
cd polling-app
</code></pre>

<h4>Backend Setup</h4>
<p>Navigate to the server directory:</p>
<pre><code>cd server</code></pre>

<p>Install server dependencies:</p>
<pre><code>npm install</code></pre>

<p>Create a <code>.env</code> file in the <code>server</code> directory with the following variables:</p>
<pre><code>MONGO_URI=mongodb://localhost:27017/polling-app
JWT_SECRET=your-jwt-secret
PORT=5000
</code></pre>
<p>Replace <code>your-jwt-secret</code> with your desired secret key. If using MongoDB Atlas, replace the URI with your connection string.</p>

<p>Start the backend server:</p>
<pre><code>npm start</code></pre>

<p>The backend should now be running on <a href="http://localhost:5000">http://localhost:5000</a>.</p>

<h4>Frontend Setup</h4>
<p>Navigate to the client directory:</p>
<pre><code>cd polling-app</code></pre>

<p>Install client dependencies:</p>
<pre><code>npm install</code></pre>

<p>Start the frontend</p>
<pre><code>npm run dev</code></pre>

<p>The frontend should now be running on <a href="http://localhost:3000">http://localhost:3000</a>.</p>

<h2>Usage</h2>
<ul>
  <li><strong>Authentication:</strong> Register or log in to access poll creation and management features.</li>
  <li><strong>Create Polls:</strong> Authenticated users can create polls with a title, image, and options.</li>
  <li><strong>Vote Anonymously:</strong> Non-logged-in users can still vote on polls.</li>
  <li><strong>Real-Time Updates:</strong> See live results as votes are cast by other users.</li>
  <li><strong>Image Optimization:</strong> Poll images are optimized on upload.</li>
</ul>

<h2>API Endpoints</h2>

<h3>Authentication</h3>
<ul>
  <li><code>POST /api/auth/register</code>: Register a new user.</li>
  <li><code>POST /api/auth/login</code>: Authenticate a user and return a token.</li>
</ul>

<h3>Polls</h3>
<ul>
  <li><code>GET /api/polls</code>: Retrieve all polls.</li>
  <li><code>POST /api/polls</code>: Create a new poll (authenticated users only).</li>
  <li><code>GET /api/polls/:id</code>: Get details of a specific poll.</li>
  <li><code>PUT /api/polls/:id</code>: Update an existing poll (authenticated users only).</li>
  <li><code>DELETE /api/polls/:id</code>: Delete a poll (authenticated users only).</li>
</ul>

<h3>Voting</h3>
<ul>
  <li><code>POST /api/polls/:id/vote</code>: Cast a vote on a specific poll.</li>
</ul>

<h2>Image Optimization (Optional)</h2>
<p>To use TinyPNG or ShortPixel, configure the API key in the backend where image uploads are handled. Refer to the TinyPNG or ShortPixel documentation for detailed setup.</p>

<h2>Real-Time Voting with Socket.io</h2>
<p>Socket.io is used to broadcast vote updates in real-time. Open multiple browser tabs to see votes update live as they are cast.</p>


