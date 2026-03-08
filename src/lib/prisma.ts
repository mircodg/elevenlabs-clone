import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "@/env/server";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });

// prevent conneciton pool exhaustion  during next.js hot reloads

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export { prisma };
