import { Post } from "./Post";

export interface Feed {
  id: number;
  title: string;
  url: string;
  icon?: string;
  posts: Array<Post>;
}
