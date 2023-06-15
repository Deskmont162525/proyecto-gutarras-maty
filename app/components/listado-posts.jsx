import Post from "./post";

export default function ListadoPosts({ posts }) {
  return (
    <>
      <h2 className="heading">B l o g</h2>
      <div className="blog">
        {posts &&
          posts?.map((post) => <Post key={post.id} post={post.attributes} />)}
      </div>
    </>
  );
}
