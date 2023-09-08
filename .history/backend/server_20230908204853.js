const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001; // You can choose any port you like

// Connect to MongoDB (Make sure you have MongoDB installed and running)
mongoose.connect('mongodb://localhost/courses_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Course schema and model (assuming you have a 'Course' model)
const Course = mongoose.model('Course', {
  slug: String,
  name: String,
  lessons: String,
  students: Number,
  level: String,
  rating: Number,
  // You can add more fields as needed
});

app.use(express.json());

// API endpoint to retrieve all courses
app.get('/api/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// API endpoint to retrieve a single course by slug
app.get('/api/courses/:slug', async (req, res) => {
  const { slug } = req.params;
  const course = await Course.findOne({ slug });
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }
  res.json(course);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
