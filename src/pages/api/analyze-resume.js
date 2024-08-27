import { analyzeAndFormatResume } from '../../src/utils/api';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { resume, jobDescription } = req.body;
      const result = await analyzeAndFormatResume(resume, jobDescription);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error in API route:', error);
      res.status(500).json({ error: error.message || 'An error occurred while analyzing the resume' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}