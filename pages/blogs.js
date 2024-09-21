import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticProps() {
  const blogDirectory = path.join(process.cwd(), 'blog');
  const filenames = fs.readdirSync(blogDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Process markdown into HTML using remark
    const processedContent = remark()
      .use(html)
      .processSync(fileContents)
      .toString();

    return {
      filename,
      content: processedContent,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const Blog = ({ posts }) => (
  <div>
    <h1>Blog</h1>
    {posts.map((post) => (
      <div key={post.filename}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    ))}
  </div>
);

export default Blog;
