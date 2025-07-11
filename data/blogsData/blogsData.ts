export type BlogPost = {
  path: string; 
  title: string;
  content: string;
};

export const BLOG_POST: BlogPost[] = [
  {
    path: "my-first-post",
    title: "My First Post",
    content: "Welcome to my blog!",
  },
  {
    path: "second-post",
    title: "Second Post",
    content: "This is my second post.",
  },
  {
    path: "third-post",
    title: "Third Post",
    content: "This is my third post.",
  },
  {
    path: "fourth-post",
    title: "Fourth Post",
    content: "This is my fourth post.",
  },
];
