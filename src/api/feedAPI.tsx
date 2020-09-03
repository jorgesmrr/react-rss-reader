import axios from "axios";
import { Feed } from "../models/Feed";
import { feedMockFactory } from "../utils/mocks";

export async function fetchFeed(url: string): Promise<any> {
  try {
    //const response = await axios.get<Feed[]>(url);
    const response = await axios.get("/api/feed?url=" + url);

    console.log(response);

    return feedMockFactory.one();
  } catch (err) {
    throw err;
  }
}
