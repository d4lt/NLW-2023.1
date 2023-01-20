import Fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes)

app.listen({
    port: 6969

}).then( () => {
    console.log("Server listening on http://localhost:6969");
})