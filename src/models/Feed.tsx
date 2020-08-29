import { Post } from "./Post";

export interface Feed {
  id: number;
  title: string;
  icon?: string;
  posts: Array<Post>;
}
