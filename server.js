const express = require('express');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));
});

app.get('/social-media', (req, res) => {
  res.sendFile(path.join(__dirname, 'social-media', 'index.html'));
});

app.get('/api/blogs', async (req, res) => {
  try {
    const response = await axios.get('https://blog.westerndigital.com');
    const html = response.data;
    const $ = cheerio.load(html);
    const blogs = [];

    $('.wdb-m-card').each((index, element) => {
      if (index >= 6) return; // Limit to 6 posts
      const title = $(element).find('.wdb-m-card__title h4 a').text().trim();
      const link = $(element).find('.wdb-m-card__title h4 a').attr('href');
      const image = $(element).find('.wdb-m-card__media img').attr('src');
      // Clean up byline to get just the date if possible, or use as is
      let byline = $(element).find('.wdb-m-card__byline').text().trim();
      // Remove extra whitespace/newlines
      byline = byline.replace(/\s+/g, ' ');

      if (title && link) {
        blogs.push({
          title,
          link,
          image,
          description: byline // Using byline as description/context
        });
      }
    });

    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
