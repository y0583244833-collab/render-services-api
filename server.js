import renderApi from '@api/render-api';
import express from 'express';

const app = express();
renderApi.auth(process.env.RENDER_API_KEY);
renderApi.listServices({ includePreviews: 'true', limit: '20' })
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

///////////////////////////////
app.get("/services", async (req, res) => {
  try {
    const { data } = await renderApi.listServices({ includePreviews: 'true', limit: '20' });
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(502).json({ error: "Could not reach Render" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});