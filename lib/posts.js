import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

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

/**
 * return the list of file names in the pots directory
 */

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

//return the post data based on the id
export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  //using gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  //use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  // combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
