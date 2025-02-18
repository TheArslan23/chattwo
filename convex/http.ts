import { httpRouter } from "convex/server";
import { auth } from "./auth";

const http = httpRouter();

// Middleware to add CORS headers
http.use(async (req, res, next) => {
  res.headers.set("Access-Control-Allow-Origin", "chrome-extension://YOUR_EXTENSION_ID");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Authorization, Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  await next();
});

// Add authentication routes
auth.addHttpRoutes(http);

export default http;
