const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.POSTGRES_HOST || "db",
  port: Number(process.env.POSTGRES_PORT || 5432),
  database: process.env.POSTGRES_DB || "jobs_demo",
  user: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
});

app.get("/", (req, res) => {
  res.json({
    message: "Node API connected to PostgreSQL with Docker Compose",
  });
});

app.get("/roles", async (req, res) => {
  const result = await pool.query("SELECT id, title, company, stage FROM roles ORDER BY id");
  res.json(result.rows);
});

app.get("/health", async (req, res) => {
  await pool.query("SELECT 1");
  res.json({ api: "ok", database: "ok" });
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
