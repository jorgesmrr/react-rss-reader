import React, { useState } from "react";
import FeedList, { FeedListProps } from "../feed/list/FeedList";
import IconPlus from "../icons/IconPlus";
import Modal from "@bit/jorgemoreira.react.surface.modal";
import FeedSubscriber from "../feed/subscriber/FeedSubsriber";

interface SudebarProps extends FeedListProps {}

const Sidebar: React.FC<SudebarProps> = ({
  feeds,
  selectedId,
  onFeedClick: onItemClick,
}) => {
  const [showAddFeedModal, setShowAddFeedModal] = useState(false);
  const dismissAddFeedModal = () => setShowAddFeedModal(false);

  return (
    <div className="bg-neutral-2">
      <span className="flex uppercase text-sm text-neutral-8 font-bold my-6 px-4">
        <span className="mr-auto">Subscriptions</span>
        <IconPlus
          testId="add-feed-action"
          width={20}
          height={20}
          onClick={() => setShowAddFeedModal(true)}
        />
        <Modal
          title="Add feed"
          onDismiss={dismissAddFeedModal}
          show={showAddFeedModal}
        >
          <FeedSubscriber onDone={dismissAddFeedModal} />
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
