require('dotenv').config();
const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are an AI assistant specialized in resume optimization. Your task is to:
1. Analyze the given resume and job description.
2. Create an optimized version of the resume that better matches the job description.
3. Output the optimized resume in a structured JSON format that can be easily used by a React resume builder component.

The JSON structure should include sections for personal information, summary, work experience, education, skills, and any other relevant sections. Each section should be an array of objects with appropriate fields.

Example output structure:
{
  "personalInfo": { "name": "", "email": "", "phone": "", "location": "" },
  "summary": "",
  "workExperience": [{ "title": "", "company": "", "date": "", "bullets": [] }],
  "education": [{ "degree": "", "school": "", "date": "", "details": "" }],
  "skills": []
}

Ensure that all relevant information from the original resume is included, optimized, and structured to match the job description requirements.`;

app.post('/api/optimize-resume', async (req, res) => {
  const { resume, jobDescription } = req.body;
  
  if (!resume || !jobDescription) {
    return res.status(400).json({ error: 'Resume and job description are required' });
  }

  try {
    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 6759,
      temperature: 0,
      system: SYSTEM_PROMPT,
      messages: [
        {
          "role": "user",
          "content": `Resume: ${resume}\n\nJob Description: ${jobDescription}\n\nPlease optimize the resume for this job description and provide the output in the specified JSON format.`
        }
      ]
    });

    // Assuming the AI returns a valid JSON string
    const optimizedResume = JSON.parse(msg.content[0].text);

    res.json({
      optimizedResume: optimizedResume,
    });
  } catch (error) {
    console.error('Error optimizing resume:', error);
    res.status(500).json({ error: 'Failed to optimize resume', details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));