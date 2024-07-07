import React, { useState } from 'react';

const RudiJetson = () => {
  const initialCourses = [
    { code: "CS 101", name: "Introduction to Computing and AI", department: "Computer Science" },
    { code: "ENGL 105", name: "Digital Writing and Communication", department: "English" },
    { code: "PSYC 110", name: "Technology and Human Behavior", department: "Psychology" },
    { code: "BUS 120", name: "Digital Transformation in Business", department: "Business" },
    { code: "MATH 240", name: "Data Analysis and Modeling", department: "Mathematics" },
    { code: "PHIL 220", name: "Ethics in the Digital Age", department: "Philosophy" },
    { code: "HIST 310", name: "Digital Humanities and Historical Research", department: "History" },
    { code: "POLS 330", name: "Technology Policy and Governance", department: "Political Science" },
    { code: "ART 350", name: "Digital Media and Creative Technologies", department: "Art" },
    { code: "BIOL 405", name: "Bioinformatics and Computational Biology", department: "Biology" },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [newCourse, setNewCourse] = useState({ code: '', name: '', department: '' });

  const outcomes = [
    "1. Critically evaluate and utilize digital technologies for problem-solving",
    "2. Analyze and interpret complex data sets and information systems",
    "3. Assess ethical implications and societal impacts of emerging technologies",
    "4. Design innovative solutions integrating traditional and cutting-edge methods"
  ];

  const [mappings, setMappings] = useState({});

  const handleChange = (courseCode, outcome, value) => {
    setMappings(prev => ({
      ...prev,
      [courseCode]: {
        ...(prev[courseCode] || {}),
        [outcome]: value
      }
    }));
  };

  const addCourse = () => {
    if (newCourse.code && newCourse.name && newCourse.department) {
      setCourses([...courses, newCourse]);
      setNewCourse({ code: '', name: '', department: '' });
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">AI-Integrated Curriculum Map</h1>
      
      <div className="mb-8 bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Competency Levels Key</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-3 rounded">
            <h3 className="font-bold text-blue-700">Awareness (A)</h3>
            <p>Students are introduced to the concept and can recognize its relevance.</p>
          </div>
          <div className="bg-green-100 p-3 rounded">
            <h3 className="font-bold text-green-700">Proficiency (P)</h3>
            <p>Students can apply the concept in familiar contexts and are developing deeper understanding.</p>
          </div>
          <div className="bg-purple-100 p-3 rounded">
            <h3 className="font-bold text-purple-700">Mastery (M)</h3>
            <p>Students can apply the concept in novel situations, critically evaluate its use, and innovate.</p>
          </div>
        </div>
      </div>

      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            className="border p-2 rounded flex-grow"
            placeholder="Course Code" 
            value={newCourse.code}
            onChange={(e) => setNewCourse({...newCourse, code: e.target.value})}
          />
          <input 
            className="border p-2 rounded flex-grow"
            placeholder="Course Name" 
            value={newCourse.name}
            onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
          />
          <input 
            className="border p-2 rounded flex-grow"
            placeholder="Department" 
            value={newCourse.department}
            onChange={(e) => setNewCourse({...newCourse, department: e.target.value})}
          />
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            onClick={addCourse}
          >
            Add Course
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2">Course</th>
              <th className="border border-gray-300 p-2">Department</th>
              {outcomes.map(outcome => (
                <th key={outcome} className="border border-gray-300 p-2">{outcome}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.code}>
                <td className="border border-gray-300 p-2 font-semibold">{course.code}: {course.name}</td>
                <td className="border border-gray-300 p-2">{course.department}</td>
                {outcomes.map(outcome => (
                  <td key={outcome} className="border border-gray-300 p-2">
                    <select 
                      onChange={(e) => handleChange(course.code, outcome, e.target.value)}
                      className="w-full p-1 rounded"
                    >
                      <option value="">Select...</option>
                      <option value="A">Awareness</option>
                      <option value="P">Proficiency</option>
                      <option value="M">Mastery</option>
                    </select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RudiJetson;