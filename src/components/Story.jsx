import { useState, useEffect } from "react";
import { getStory } from "../services/hackerApi";
import { mapTime } from "../mappers/mapTime";

const Story = ({ storyId }) => {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);
  return story && story.url ? (
    <>
      <div className="p-2 m-2 bottom-1 border">
        <a href="{story.url" className="">
          <p className="bg-yellow-400 p-2 w-fit font-bold text-xl">{story.title}</p>
        </a>
        <div className="italics ">
          <span className="font-bold">By:</span> {` `}
           {story.by}
        </div>
        <div className="italics ">
          <span className="font-bold">Posted:</span> {` `}
           {mapTime(story.time)}
        </div>
      </div>
    </>
  ) : null;
};

export default Story;
