import express from "express";
import cors from "cors";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;

env.config();


const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));



app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM tasks ORDER BY id ASC");
    const tasks = result.rows;
    console.log(tasks);
    res.json(tasks); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching tasks");
  }
});



app.post('/tasks', async (req, res) => {
  const { text, completed } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO tasks (text, completed) VALUES ($1, $2) RETURNING *',
      [text, completed || false]
    );
    const newTask = result.rows[0];
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error inserting task', err);
    res.status(500).json({ error: 'Database insertion error' });
  }
});



app.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  const { text, completed } = req.body;

  try {
    
    const result = await db.query(
      'UPDATE tasks SET text = COALESCE($2, text), completed = COALESCE($3, completed) WHERE id = $1 RETURNING *',
      [taskId, text, completed]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating task', err);
    res.status(500).json({ error: 'Database update error' });
  }
});



app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const result = await db.query('DELETE FROM tasks WHERE id = $1', [taskId]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(204).send(); 
  } catch (err) {
    console.error('Error deleting task', err);
    res.status(500).json({ error: 'Database deletion error' });
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
