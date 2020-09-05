import axios from "axios";
import xml2js from "xml2js";
import faker from "faker";
import { Feed } from "../models/Feed";

export async function fetchFeed(url: string): Promise<any> {
  try {
    const response = await axios.get("/api/feed?url=" + url);

    var xml = response.data;

    try {
      const result = await xml2js.parseStringPromise(xml);

      console.log(result);

      const channel = result.rss.channel[0];
      const feed: Feed = {
        id: faker.random.number(),
        title: channel.title[0],
        url,
        posts: channel.item.map((i: any) => {
          let title, link, author, description, content;

          if (i.title && i.title.length) {
            title = i.title[0];
          }
          if (i.link && i.link.length) {
            link = i.link[0];
          }
          if (i["itunes:author"] && i["itunes:author"].length) {
            author = i["itunes:author"][0];
          }
          if (i.description && i.description.length) {
            description = i.description[0];
          }
          if (i["content:encoded"] && i["content:encoded"].length) {
            content = i["content:encoded"][0];
          }

          return {
            id: faker.random.number(),
            title,
            link,
            author,
            description,
            content,
          };
        }),
      };

      return feed;
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    throw err;
  }
}
