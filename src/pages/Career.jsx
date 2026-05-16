import React from 'react';
import { useState, useEffect } from 'react';
import { careerAPI } from '../api';
import toast from 'react-hot-toast';

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCareer, setSelectedCareer] = useState(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await careerAPI.getActive();
      setCareers(response.data);
    } catch (error) {
      toast.error('Failed to load careers');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Career Opportunities</h1>
        
        {selectedCareer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCareer(null)}>
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-full overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl font-bold mb-4">{selectedCareer.title}</h2>
              <div className="space-y-3">
                <p><strong>Department:</strong> {selectedCareer.department}</p>
                <p><strong>Location:</strong> {selectedCareer.location}</p>
                <p><strong>Type:</strong> {selectedCareer.type}</p>
                <p><strong>Salary:</strong> {selectedCareer.salary || 'Negotiable'}</p>
                <p><strong>Deadline:</strong> {new Date(selectedCareer.deadline).toLocaleDateString()}</p>
                <div>
                  <strong>Description:</strong>
                  <p className="mt-1">{selectedCareer.description}</p>
                </div>
                <div>
                  <strong>Requirements:</strong>
                  <p className="mt-1">{selectedCareer.requirements}</p>
                </div>
              </div>
              <button onClick={() => setSelectedCareer(null)} className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Close</button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careers.map((career) => (
            <div key={career._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2">{career.title}</h2>
              <p className="text-gray-600 mb-2">{career.department} • {career.location}</p>
              <p className="text-gray-500 mb-4">{career.type}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">{career.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Deadline: {new Date(career.deadline).toLocaleDateString()}</span>
                <button onClick={() => setSelectedCareer(career)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;