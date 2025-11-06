import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { account, session, user, verification } from "@/db/schema/auth";

/**
 * Better Auth 配置
 * 
 * 会话配置：
 * - expiresIn: 24 小时（86400 秒）
 * - updateAge: 24 小时内更新会话
 * 
 * 这意味着用户登录后，会话将保持 24 小时有效。
 */
export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET || "change-me-in-production",
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: user,
      account: account,
      session: session,
      verification: verification,
    }
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24, // 24 小时（以秒为单位）
    updateAge: 60 * 60 * 24, // 24 小时内更新会话
  },
});
