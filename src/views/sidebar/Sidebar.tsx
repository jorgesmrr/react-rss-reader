import React, { useState } from "react";
import FeedList, { FeedListProps } from "../feed/list/FeedList";
import IconPlus from "../icons/IconPlus";
import Modal from "@bit/jorgemoreira.react.surface.modal";
import TextField from "@bit/jorgemoreira.react.input.text-field";

interface SudebarProps extends FeedListProps {}

const Sidebar: React.FC<SudebarProps> = ({
  feeds,
  selectedId,
  onFeedClick: onItemClick,
}) => {
  const [showAddFeedModal, setShowAddFeedModal] = useState(false);

  return (
    <div className="bg-neutral-2">
      <span className="flex uppercase text-sm text-neutral-8 font-bold my-6 px-4">
        <span>Subscriptions</span>
        <IconPlus
          width={20}
          height={20}
          onClick={() => setShowAddFeedModal(!showAddFeedModal)}
        />
        <Modal title="Add feed" onDismiss={() => {}} show={showAddFeedModal}>
          <div className="card-block">
            <TextField label="URL" />
          </div>
        </Modal>
      </span>
      <FeedList
        selectedId={selectedId}
        feeds={feeds}
        onFeedClick={onItemClick}
      />
    </div>
  );
};

export default Sidebar;
