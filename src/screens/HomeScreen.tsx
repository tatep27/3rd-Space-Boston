import React from 'react';

const HomeScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          ThirdSpace Boston
        </h1>
        <p className="text-lg text-muted-blue text-center mb-12">
          Find the perfect space for your community gathering
        </p>
        
        <div className="bg-white rounded-lg shadow-soft p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Setup Complete! 🎉
          </h2>
          <p className="text-gray-600 mb-4">
            The ThirdSpace Boston MVP project has been successfully initialized with:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>React with TypeScript</li>
            <li>Tailwind CSS for styling</li>
            <li>React-Leaflet for maps</li>
            <li>12 sample Boston third spaces</li>
            <li>Proper project structure</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Ready to start building the interactive map and components!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
