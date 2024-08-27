import html2pdf from 'html2pdf.js';

export const exportToPDF = (resumeData) => {
  console.log('Exporting to PDF:', resumeData);
  // Implement PDF export logic here
  alert('PDF export functionality not yet implemented');
};

export const exportToHTML = (resumeData) => {
  console.log('Exporting to HTML:', resumeData);
  // Implement HTML export logic here
  alert('HTML export functionality not yet implemented');
};

const generateResumeHTML = (filledData) => `
  <h1>${filledData.contactInfo.name || 'Resume'}</h1>
  ${filledData.contactInfo.email ? `<p>Email: ${filledData.contactInfo.email}</p>` : ''}
  ${filledData.contactInfo.phone ? `<p>Phone: ${filledData.contactInfo.phone}</p>` : ''}
  ${filledData.contactInfo.linkedin ? `<p>LinkedIn: ${filledData.contactInfo.linkedin}</p>` : ''}
  
  ${filledData.summary ? `<h2>Summary</h2><p>${filledData.summary}</p>` : ''}
  
  ${filledData.experience.length > 0 ? `
    <h2>Experience</h2>
    ${filledData.experience.map(exp => `
      <h3>${exp.title} at ${exp.company}</h3>
      <p>${exp.startDate} - ${exp.endDate}</p>
      <ul>
        ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
      </ul>
    `).join('')}
  ` : ''}
  
  ${filledData.skills.length > 0 ? `
    <h2>Skills</h2>
    <ul>
      ${filledData.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
  ` : ''}
  
  ${filledData.education.length > 0 ? `
    <h2>Education</h2>
    ${filledData.education.map(edu => `
      <h3>${edu.degree}</h3>
      <p>${edu.institution}, ${edu.graduationDate}</p>
    `).join('')}
  ` : ''}
`;