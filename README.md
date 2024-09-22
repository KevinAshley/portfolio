This is a **_Next.js_** website that runs on **_Docker_**.

While the default **_Next.js_** scripts work just fine,
my preference is to run **_Docker_** for development.

## First-time Local Setup

1. Create a .env file at the root. For cloned projects, copy .env.example

2. Set up the SQLite Database

    Assuming this is a cloned repo with no DB already configured, do the following:

    - Delete any existings migrations:

        ```bash
        rm -rf /prisma/migrations
        ```

    - Create the SQLite database

        ```bash
        npm run prisma:create_dev_db
        ```

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

## Database Migrations

After making any change to schema.prisma, run this command (DEV environment only):

```bash
npm run prisma:migrate
```

Your DB migration has been created and ran against your DEV database, and your Prisma client has been updated.
You WILL need to restart your DEV **_Docker_** container.

-   NOTE: Production migrations are handled by the production build

## Production Build

To build a production docker image, run this:

```bash
npm run docker:build
```

You can test the production image locally with this:

```bash
npm run docker:run
```

-   NOTE: Pending migrations are deployed when the production container starts

## Deployment

AWS deployment scripts and instructions will be added at some point.
For now, I am doing these manually via the AWS dashboard.
