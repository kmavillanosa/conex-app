"use client";

import { Env } from "@/libs/Env";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: Env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

export const ApolloProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Provider client={client}>{children}</Provider>;
