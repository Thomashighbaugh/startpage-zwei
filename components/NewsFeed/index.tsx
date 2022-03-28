import { useEffect, useState } from "react";
import clsx from "clsx";
import useKeyPress from "../../hooks/useKeyPress.hook";
import { HalfCircleSpinner, ScalingSquaresSpinner } from "react-epic-spinners";

const storiesURL =
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
const storyURL = (id: string | number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

const NewsList = () => {
  const [feed, setFeed] = useState<any>([]);
  const [current, setCurrent] = useState<number>(0);

  const downPressed: boolean = useKeyPress("ArrowDown");
  const upPressed: boolean = useKeyPress("ArrowUp");
  const rightPressed: boolean = useKeyPress("ArrowRight");

  useEffect(() => {
    async function getFeed() {
      const res = await fetch(storiesURL);
      let ids = await res.json();
      ids = (ids as any[]).slice(0, 10);

      setFeed(ids);

      const stories = [];

      for (const i in ids) {
        const storyres = await fetch(storyURL(ids[i]));
        stories[i] = await storyres.json();
      }

      setFeed(stories);
    }

    getFeed();
  }, []);

  useEffect(() => {
    downPressed && current < feed?.length - 1 && setCurrent(current + 1);
    upPressed && current > 0 && setCurrent(current - 1);

    if (typeof window !== "undefined")
      rightPressed && window.open(feed[current]?.url);
  }, [downPressed, upPressed, rightPressed]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.getElementById("news-" + current)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [current]);

  return (
    <div className="lg:relative lg:flex w-full h-full">
      {!feed?.length ? (
        <span className="m-auto">
          <HalfCircleSpinner color="#8b9cbe" />
        </span>
      ) : (
        <ul
          className="lg:h-90 lg:overflow-y-auto lg:relative w-full"
          onKeyDown={(e) => alert(e)}
        >
          {feed.map((story, index) => (
            <li
              key={index}
              id={"news-" + index}
              className={clsx(
                "h-36 bg-gray-900 border-4 border-solid bg-opacity-90 rounded-xl my-2 flex flex-col p-8",
                current === index ? "border-white" : "border-gray-500"
              )}
              onMouseEnter={() => setCurrent(index)}
            >
              {story.title ? (
                <>
                  <p className="text-gray-300 m-auto text-md">{story.title}</p>
                  <p className="text-gray-500 m-auto text-sm">
                    Score: {story.score}
                  </p>
                </>
              ) : (
                <span className="m-auto">
                  <ScalingSquaresSpinner color="#8b9cbe" />
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
      <span
        className={clsx(
          "absolute top-0 h-20 w-full",
          current < feed?.length - 1 && "hidden"
        )}
      />
      <span
        className={clsx(
          "absolute bottom-0 h-20 w-full",
          current === feed?.length - 1 && "hidden"
        )}
      />
    </div>
  );
};

export default NewsList;
