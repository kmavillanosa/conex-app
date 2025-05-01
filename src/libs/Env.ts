import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const Env = createEnv({
  server: {
    GRAPHQL_API_URL: z.string({
      required_error: "GRAPHQL_API_URL is required",
      invalid_type_error: "GRAPHQL_API_URL must be a string",
    }),
  },
  client: {
    NEXT_PUBLIC_GRAPHQL_API_URL: z.string({
      required_error: "NEXT_PUBLIC_GRAPHQL_API_URL is required",
      invalid_type_error: "NEXT_PUBLIC_GRAPHQL_API_URL must be a string",
    }),
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },
  shared: {
    NODE_ENV: z.enum(["development", "test", "production"]).optional(),
  },
  runtimeEnv: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    NEXT_PUBLIC_GRAPHQL_API_URL: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
