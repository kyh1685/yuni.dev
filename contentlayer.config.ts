import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: {
      type: "list",
      required: true,
      of: {
        type: "string",
      },
      default: [],
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
