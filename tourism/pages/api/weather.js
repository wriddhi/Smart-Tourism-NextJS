// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const place = req.headers.place
  res.status(200).json({ name: 'John Doe', place: place})
}
