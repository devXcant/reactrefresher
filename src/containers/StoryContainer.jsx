import { useEffect, useState, memo } from "react";
import { getStoryIds } from "../services/hackerApi";
import Story from "../components/Story";
import UseInfiniteScroll from "../hooks/UseInfiniteScroll";

const StoryContainer = () => {
  const { count } = UseInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold">Hacker News Stories</h1>
      {storyIds.slice(0, count).map((storyId) => (
        <Story storyId={storyId} key={storyId} />
      ))}
    </>
  );
};

export default StoryContainer;
