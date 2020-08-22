import faker from "faker";
import { Channel } from "../models/Channel";
import { Post } from "../models/Post";

interface MockFactory<T> {
  one: () => T;
  many: (count: number) => Array<T>;
}

// Channels

const getChannel = () => ({
  id: faker.random.number(),
  title: faker.lorem.words(),
});

export const channelMockFactory: MockFactory<Channel> = {
  one: getChannel,
  many: (count) => [...new Array(count)].map(getChannel),
};

// Posts

const getPost = () => ({
  id: faker.random.number(),
  title: faker.lorem.words(),
  author: faker.name.findName(),
  published_at: faker.date.past(),
  content: faker.lorem.paragraph(),
});

export const postMockFactory: MockFactory<Post> = {
  one: getPost,
  many: (count) => [...new Array(count)].map(getPost),
};
