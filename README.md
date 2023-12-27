# GPT_Ui


## Deploy

**Docker**

Setup enviroment variables:

```bash
cp .env.example .env
# specify OPENAI_API_KEY, MONGODB_URI, MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD
vim .env
```

Run with docker-compose:

```shell
docker compose up -d
```

## Running Locally

**1. Clone Repo**

```bash
git clone https://github.com/iababio/GPT_Ui-ai.git
```

**2. Install Dependencies**

```bash
npm i
```

**3. Provide OpenAI API Key**

Create a .env.local file in the root of the repo with your OpenAI API Key:

```bash
cp .env.example .env
# Specify OPENAI_API_KEY
vim .env
```

> You can set `OPENAI_API_HOST` where access to the official OpenAI host is restricted or unavailable, allowing users to configure an alternative host for their specific needs.

**4. Run MongoDB**

```bash
docker compose -f docker-compose.dev.yml up -d
```

**5. Run App**

```bash
npm run dev
```

**6. Use it**

You should be able to start chatting.

#### Supported Internal Tools

- wikipedia_search
- google_search
_Recommended for use with GPT-4_

## Vercel

- streaming response is not supported in vercel.
- plugin executing fails because of the timeout limit is too short in free plan.


