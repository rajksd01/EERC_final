import Head from 'next/head';
import { PostCard,PostWidget, Categories } from '../components/';
import { getPosts } from '@/services';
import { FeaturedPosts } from '@/sections';

// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'




export default function Home({ posts }) {
    const reversedPost = posts.reverse()

  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {
           
            reversedPost.map((post, index) => (
            
            <PostCard key={index} post={post.node } />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}



// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
