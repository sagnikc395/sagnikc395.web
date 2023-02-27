import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = () => {
  //get the file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //remove the .md file to get the id
    const id = fileName.replace(/\.md$/, "");
    //read the content of the file as a string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // combine the result with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  //return possts by date ..i.e keep the recent posts at the top
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};
