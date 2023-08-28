import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const dbFilePath = "data/db.json";

const writeJson = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const fileContents = fs.readFileSync(dbFilePath, "utf-8");
      const data = JSON.parse(fileContents);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ error: "Error Read File", e });
    }
  } else if (req.method === "POST") {
    try {
      fs.writeFileSync(dbFilePath, JSON.stringify(req.body), "utf-8");
      res.status(200).json({ message: "Write Successfully" });
    } catch (e) {
      res.status(500).json({ error: "Error Write File", e });
    }
  } else {
    res.status(405).json({ error: "Method Error." });
  }
};

export default writeJson;
