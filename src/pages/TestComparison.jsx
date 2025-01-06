import React from 'react';
import SearchBar from '../components/SearchBar';

export default function TestComparison() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Fixed Width */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">1. Fixed Width (600px)</h2>
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="w-[600px] border-2 border-blue-200 p-2">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Percentage with Max-Width */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">2. Percentage with Max-Width</h2>
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="w-full max-w-[600px] border-2 border-green-200 p-2">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Responsive Breakpoints */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">3. Responsive Breakpoints</h2>
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] border-2 border-purple-200 p-2">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Container Based */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">4. Container Based</h2>
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="w-[min(600px,90%)] border-2 border-orange-200 p-2">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Real Context Examples */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Real Context Examples</h2>
        
        {/* Header Context */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Header Context</h3>
          <div className="bg-white shadow-sm rounded">
            <div className="h-16 flex items-center px-4">
              <div className="w-32 text-blue-600 font-bold">Logo</div>
              <div className="flex-1 max-w-2xl mx-8">
                <SearchBar />
              </div>
              <div className="w-32">Actions</div>
            </div>
          </div>
        </div>

        {/* Hero Context */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Hero Context</h3>
          <div className="bg-gray-800 p-8 rounded">
            <div className="max-w-2xl mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* Map Context */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Map Context</h3>
          <div className="bg-gray-100 p-4 rounded">
            <div className="w-64">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
