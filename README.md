# Morning Briefing

A browser homepage dashboard, with customizable config options

### [Demo](https://oddscenes.com/lab/morning-briefing)

&nbsp;&nbsp;

<img src="https://oddscenes.s3.amazonaws.com/screenshot-morning-briefing.png" width="500" />

&nbsp;&nbsp;

## Running on Startup

Because the [News API][1] only allows API requests from localhost, we can run the app on startup locally. Then bookmark localhost with a unique port (set in `/data/server.js`). Default port here is 11843.

_Based on operating system_: [https://pm2.keymetrics.io/docs/usage/startup][2]

1. `pm2 startup`
2. Copy & paste provided path in terminal
3. Startup the app via `npm run startup` (uses pm2, ensure no other processes are running)
4. Save to the pm2 startup list `pm2 save`

To disable, or reset pm2 startup scripts, use `pm2 unstartup`

### Usage:
- Dev: `npm run dev`
- Build: `npm run build`
- Production: `npm start`


### Depencencies:
- NextJS / ReactJS
- TailwindCSS
- News API
- Open Weather API
- Unsplash Source API


[1]: https://newsapi.org
[2]: https://pm2.keymetrics.io/docs/usage/startup
