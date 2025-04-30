import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// i created a schema to handle environments and prevent misconfiguration
export const Env = createEnv({
  server: {
    GRAPHQL_API_URL: z.string(),
    // server side environment variables
  },
  client: {
    // environment variables for client side, this will carry over the server side env
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_GRAPHQL_API_URL: z.string(),
  },
  shared: {
    NODE_ENV: z.enum(["test", "development", "production"]).optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GRAPHQL_API_URL: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
