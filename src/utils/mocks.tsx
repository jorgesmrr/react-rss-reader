import faker from "faker";
import { Feed } from "../models/Feed";
import { Post } from "../models/Post";

interface MockFactory<T> {
  one: () => T;
  many: (count: number) => Array<T>;
}

// Feeds

const getFeed = () => ({
  id: faker.random.number(),
  title: faker.lorem.words(),
  url: "",
  posts: postMockFactory.many(10),
});

export const feedMockFactory: MockFactory<Feed> = {
  one: getFeed,
  many: (count) => [...new Array(count)].map(getFeed),
};

// Posts

const getPost = () => ({
  id: faker.random.number(),
  title: faker.lorem.words(),
  author: faker.name.findName(),
  published_at: faker.date.past(),
  content: faker.lorem.paragraph(),
  description: faker.lorem.paragraph(),
  link: "",
});

export const postMockFactory: MockFactory<Post> = {
  one: getPost,
  many: (count) => [...new Array(count)].map(getPost),
};
