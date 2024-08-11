This is a **_Next.js_** website that runs on **_Docker_**.

While the default **_Next.js_** scripts work just fine,
my preference is to run **_Docker_** for development.

## Development

First, make sure you have **_Docker Desktop_** installed.

Then run this command from the project root:

```bash
npm run docker:dev
```

That's it! You should now have a new **_Docker_** image and a new **_Docker_** container that is running on port 3000:

[http://localhost:3000](http://localhost:3000)

Hot reloading and everything should work just as well as if you were running the **_Next.js_** dev script.

Use **_Docker Desktop_** to review the logs, execute terminal commands, stop, start, reboot, etc.

## Deployment

To build a production docker image, run this:

```bash
npm run docker:build
```

You can test the production image locally with this:

```bash
npm run docker:run
```

AWS deployment scripts and instructions will be added at some point.
For now, I am doing these manually via the AWS dashboard.
