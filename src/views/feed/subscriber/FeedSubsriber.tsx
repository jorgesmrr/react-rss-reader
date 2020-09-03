import React, { useState } from "react";
import TextField from "@bit/jorgemoreira.react.input.text-field";
import { useDispatch } from "react-redux";
import { addFeed } from "../../../store/slices/feedsSlice";

export interface FeedSubscriberProps {
  onDone: () => void;
}

const FeedSubscriber: React.FC<FeedSubscriberProps> = ({ onDone }) => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(addFeed("https://hipsters.tech/feed/podcast/"));
    onDone();
  };

  return (
    <div>
      <div data-test="add-feed-form-url" className="card-block">
        <TextField label="URL" value={url} onChange={setUrl} />
      </div>
      <div className="card-block text-right">
        <button className="btn btn-danger mr-4" onClick={onDone}>
          Cancel
        </button>
        <button
          className="btn btn-primary"
          data-test="add-feed-submit"
          onClick={submit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default FeedSubscriber;
