import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPost() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '<AIzaSyC4PyNrSU9y7nDnIDbVnVb7iaXPyv-1FuI>';
      const blogId = '<5919729310825416607>';
      const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;

      const response = await axios.get(url);
      const posts = response.data.items;

      setLatestPosts(posts);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Latest Posts</h2>
      <ul>
        {latestPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPost;
