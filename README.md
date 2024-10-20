This is a **_Next.js_** website that runs in a **_Docker_** container, deployed on **_AWS_** using the **_ECS_** service.

Before starting, make sure you have **_Docker Desktop_** (or at least **_Docker_**) installed.

## First-time Setup

1. Create a .env file at the root. For cloned projects, copy .env.example

    - Update all .env values to taste before proceeding to next step

2. Initialize the SQLite Database

    - If you are cloning the repo for a new project, you'll probably want to...

        - Delete any existings migrations:

            ```bash
            rm -rf /prisma/migrations
            ```

        - Review / adjust the schema.prisma file to suit your needs

    - Build the "Initializer" container with this command:

        ```bash
        npm run docker:build_first_time
        ```

    - Then, run the "Initializer" container (which creates and seeds the DB) with this command:

        ```bash
        npm run docker:run
        ```

        Once the database is created and seeded, the docker container will stop.

    Q: Why do I use a special Docker container to create the DB?

    A: Because it works for both local development AND your first deploy to AWS. Simple and consistent.

## Development

For local development, run this command from the project root:

```bash
npm run docker:dev
```

That's it! You should now have a new **_Docker_** image and a new **_Docker_** container that is running on port 3000:

[http://localhost:3000](http://localhost:3000)

Hot reloading and everything should work just as if you were running the **_Next.js_** dev script.

I use **_Docker Desktop_** to review the logs, execute terminal commands, stop, start, reboot, etc.

## Database Migrations

After making any change to schema.prisma, run this command (DEV environment only):

```bash
npm run prisma:migrate
```

Your DB migration has been created and ran against your DEV database, and your Prisma client has been updated.
You WILL need to restart your DEV **_Docker_** container.

\*\*\* NOTE: Production migrations are handled by the production build

## Production Build

To build a production docker image, run this:

```bash
npm run docker:build
```

You can test the production image locally with this:

```bash
npm run docker:run
```

\*\*\* NOTE: As previously mentioned, pending migrations are ran automatically when the production container starts.
So simply build and deploy your new container to AWS (or wherever) and the migrations will have run.

## Deployment

For AWS deployments, my process is this:

1. Build the production image (as described above)
2. Tag and push the container to the **_AWS_** Elastic Container Registry (ECR)
    - (The push commands are provided by the ECR interface)
3. Update the **_AWS_** "Task Definition" to pick up the new image
4. Update the **_AWS_** "Service" to use the new "Task Definition"

Of course, this assumes you already configured your "cluster" and "service" via **_ECS_**.

IMPORTANT: To have a persistent database, your task definition needs to have a "bind mount" to **_AWS_** Elastic File System (EFS).

I intend to detail all of this at some later date.
