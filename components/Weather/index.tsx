import { useEffect, useState } from "react";
import { HalfCircleSpinner } from "react-epic-spinners";
import Lottie from "react-lottie";
import * as rainAnimationData from "../../lottiefiles/16477-rain-background-animation.json";
import * as cloudsAnimationData from "../../lottiefiles/8368-cloud.json";
import * as clearAnimationData from "../../lottiefiles/14444-sunny.json";
const Rain = (
  <span className="absolute top-0 left-0 opacity-20">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: rainAnimationData,
        rendererSettings: { preserveAspectRatio: "xMinYMin meet" },
      }}
      height={640}
      width={640}
    />
  </span>
);

const Clouds = (
  <span className="absolute top-0 left-0 opacity-5">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: cloudsAnimationData,
        rendererSettings: { preserveAspectRatio: "xMinYMin meet" },
      }}
      height={300}
      width={900}
    />
  </span>
);
const Clear = (
  <span className="absolute top-0 left-0 opacity-5">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: clearAnimationData,
        rendererSettings: { preserveAspectRatio: "xMinYMin meet" },
      }}
      height={300}
      width={900}
    />
  </span>
);
const Fog = (
  <span className="absolute top-0 left-0 opacity-25">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData:cloudsAnimationData,
        rendererSettings: { preserveAspectRatio: "xMinYMin meet" },
      }}
      height={300}
      width={900}
    />
  </span>
);

const Animations = { Rain, Clouds, Clear, Fog };

const Weather = ({ weatherInfo }) => {
  if (!weatherInfo)
    return (
      <span className="m-auto">
        <HalfCircleSpinner color="#00caff" />
      </span>
    );

  return (
    <div className="relative justify-center content-center overflow-hidden h-full w-full">
      {Animations[weatherInfo.current.weather[0].main]
        ? Animations[weatherInfo.current.weather[0].main]
        : null}
        <div className="flex flex-row mt-12 justify-around mx-12 align-middle">
      <img
        src={`http://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}@2x.png`}
        className="w-12 h-12 text-white bg-blue-500 rounded-xl bg-opacity-85 mx-auto mt-auto"
      />
      <p className="text-4xl mt-2 mx-auto text-center  text-gray-50">
        {weatherInfo.current.temp}<sup>°F</sup>
      </p>
      </div>
      <p
        className="text-sm mt-1 mx-auto mb-auto text-center"
        style={{ color: "#8b9cbe" }}
      >
        Feels like {weatherInfo.current.feels_like}<sup>°F</sup>
      </p>
    </div>
  );
};

export default Weather;
