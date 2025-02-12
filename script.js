/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #ffffff;
    scroll-behavior: smooth;
}

/* Header */
header {
    background: #1f1f1f;
    text-align: center;
    padding: 30px;
    font-size: 24px;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

/* Navigation */
nav {
    background: #252525;
    padding: 10px 0;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}
nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
nav ul li {
    display: inline;
    margin: 0 15px;
}
nav a {
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
}
nav a:hover {
    color: #ff9800;
}

/* Containers */
.container {
    width: 80%;
    margin: auto;
    padding: 20px;
    background: #1a1a1a;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

/* Blog Post */
.blog-post {
    border-bottom: 1px solid #444;
    padding: 20px 0;
}
.blog-post h3 {
    color: #ff9800;
}
.read-more {
    display: inline-block;
    background: #ff9800;
    border: none;
    padding: 10px 15px;
    color: white;
    font-size: 16px;
    text-decoration: none;
    margin-top: 10px;
    border-radius: 5px;
    transition: 0.3s;
}
.read-more:hover {
    background: #e68900;
}

/* Back Button */
.back-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background: #ff9800;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}
.back-btn:hover {
    background: #e68900;
}
