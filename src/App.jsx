import { useEffect, useState } from "react"
import { getStoryIds, getStory } from "./services/hackerApi";
import StoryContainer from "./containers/StoryContainer";

const App = () => {

  // const [storyIds, setStoryIds] = useState([]);

  // useEffect(()=> {
  //   getStoryIds().then(data => setStoryIds(data));
  //   getStory(209).then((data) => console.log(data))
  // },[])

  return (
    
    <div className="">
      <StoryContainer />
    </div>
  )
}

export default App