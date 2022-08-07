import { useState, useCallback } from "react";
import { client } from "../lib/axios";

export const useAllPosts = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await client.get("/api/v1/posts");
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, []);

  return { getPosts, posts, loading };
};
