"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const UserProfile = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const username = searchParams.get("name");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (userId) fetchPosts();
  }, [userId]);
  return (
    <Profile
      name={username}
      desc={`Welcome to ${username} personalized profile page`}
      data={posts}
    />
  );
};

export default UserProfile;
