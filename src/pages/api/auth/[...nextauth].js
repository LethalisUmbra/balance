import NextAuth from "next-auth"
import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from "pg"
import CredentialsProvider from 'next-auth/providers/credentials'

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export default NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Aquí puedes validar las credenciales manualmente
        const user = { id: 1, name: "User", email: "user@example.com" }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
})
