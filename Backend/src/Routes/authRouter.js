import express from "express";
import { httpApiAdapters } from "../utils/httpApiAdapters.js";
import { Auth } from "@auth/core";
import { authConfig } from "../Config/authConfig.js";

const authRouter = express.Router();

authRouter.post("/_log", async (req, res) => {
  res.json(200);
})

authRouter.all("/*", async (req, res) => {
  const request = httpApiAdapters.request.fromExpressToFetch(req);
  const response = await Auth(request, authConfig);
  await httpApiAdapters.response.fromFetchToExpress(response, res);
});

export default authRouter;
