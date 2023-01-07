import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
      </Head>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link style={{ fontSize: '2rem' }} href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
            <p style={{ color: 'gray', marginTop: 0, marginBottom: '14px' }}>{post.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      ...frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
