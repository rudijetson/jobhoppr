const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Function to analyze resume
export async function analyzeAndFormatResume(resume, jobDescription) {
  try {
    const response = await fetch(`${API_BASE_URL}/analyze-resume`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resume, jobDescription }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze resume');
    }

    return await response.json();
  } catch (error) {
    console.error("Error analyzing resume:", error);
    throw new Error("Failed to analyze and format resume");
  }
}

// Function to save resume
export async function saveResume(resumeData) {
  const response = await fetch(`${API_BASE_URL}/save-resume`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Remove the Authorization header
    },
    body: JSON.stringify(resumeData),
  });

  if (!response.ok) {
    throw new Error('Failed to save resume');
  }

  return response.json();
}

// Function to get resume
export async function getResume(resumeId) {
  const response = await fetch(`${API_BASE_URL}/get-resume/${resumeId}`);

  if (!response.ok) {
    throw new Error('Failed to get resume');
  }

  return response.json();
}

// Function to update resume
export async function updateResume(resumeId, resumeData) {
  const response = await fetch(`${API_BASE_URL}/update-resume/${resumeId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resumeData),
  });

  if (!response.ok) {
    throw new Error('Failed to update resume');
  }

  return response.json();
}

// Function to delete resume
export async function deleteResume(resumeId) {
  const response = await fetch(`${API_BASE_URL}/delete-resume/${resumeId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete resume');
  }

  return response.json();
}
