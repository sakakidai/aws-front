import { useEffect } from "react";
import { useAllPosts } from "../../hooks/useAllPosts";

export const Posts = () => {
  const { getPosts, posts, loading } = useAllPosts();

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginRight: 50, marginLeft: 50 }}>
      {posts.map((post, index) => {
        return (
          <div key={post.id} style={{ margin: 20 }}>
            <div>ID: {post.id}</div>
            <div>タイトル：　{post.title}</div>
            <div>{post.body}</div>
          </div>
        );
      })}
    </div>
  );
};
