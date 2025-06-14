import { type AppRouter } from "@repo/trpc";
import { createTRPCReact } from "@trpc/react-query";

export const api = createTRPCReact<AppRouter>();
