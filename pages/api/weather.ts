export async function getWeatherInfo() {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.LOCATION_LATITUDE}&lon=${process.env.LOCATION_LONGITUDE}&units=imperial&appid=${process.env.OPENWEATHERMAP_API_KEY}`
  );

  return await data.json();
}

export default async function handler(req: any, res: any) {
  const weatherInfo = await getWeatherInfo();

  if (weatherInfo?.cod !== 200) console.dir({ weatherInfo }, { depth: null });

  return res.status(200).json(weatherInfo);
}
