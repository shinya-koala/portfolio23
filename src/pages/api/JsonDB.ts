import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const dbBase = "../../../data/";

export default function JsonDB(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { userName } = req.query;
      if (userName) {
        const dbFilePath = `${dbBase}${userName}.json`;
        const fileContents = fs.readFileSync(dbFilePath, "utf-8");
        const data = JSON.parse(fileContents);
        res.status(200).json(data);
      } else {
        res.status(400).json({ error: "Invalid Parameter." });
      }
    } catch (e) {
      res.status(500).json({ error: "Error Read File", e });
    }
  } else if (req.method === "POST") {
    try {
      const { userName, data } = req.body;
      if (userName && data) {
        const dbFilePath = `${dbBase}${userName}.json`;
        fs.writeFileSync(dbFilePath, JSON.stringify(data), "utf-8");
        res.status(200).json({ message: "Write Successfully" });
      } else {
        res.status(400).json({ error: "Invalid Parameter." });
      }
    } catch (e) {
      res.status(500).json({ error: "Error Write File", e });
    }
  } else {
    res.status(405).json({ error: "Method Error." });
  }
}
