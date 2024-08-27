# Job Hoppr - Professional Resume Builder

## Overview

Job Hoppr is a modern, React-based web application designed to help users create professional resumes quickly and easily. With an intuitive interface and AI-powered optimization, Job Hoppr streamlines the resume creation process, allowing users to focus on showcasing their skills and experiences effectively.

## Features

- User-friendly interface for building resumes
- AI-powered resume optimization based on job descriptions
- Real-time editing and preview
- Multiple resume sections: Contact, Summary, Experience, Skills, and Education
- Import existing resume data
- Export resumes to PDF and HTML formats
- Responsive design for desktop and mobile use

## Technologies Used

- React.js
- Node.js
- Express.js
- Anthropic's Claude AI (for resume optimization)
- Tailwind CSS
- Recharts (for data visualization, if applicable)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/job-hoppr.git
   ```

2. Navigate to the project directory:
   ```
   cd job-hoppr
   ```

3. Install dependencies for both client and server:
   ```
   npm install
   cd server && npm install
   ```

4. Create a `.env` file in the server directory and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000`

## Usage

1. Fill in your personal information in the Contact section
2. Add a professional summary
3. Input your work experiences, including job titles, companies, dates, and responsibilities
4. List your skills
5. Add your educational background
6. Use the AI optimization feature by providing a job description
7. Preview your resume in real-time
8. Export your completed resume as a PDF or HTML file

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Anthropic](https://www.anthropic.com) for providing the AI technology
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [React](https://reactjs.org) for the frontend library