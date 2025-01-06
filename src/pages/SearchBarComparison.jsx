import React from 'react';
import SearchBar from '../components/SearchBar';

export default function SearchBarComparison() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Search Bar Width Comparison</h1>

        {/* Option 1: Fixed Width */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Option 1: Fixed Width (600px)</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm mb-4">
            <div className="w-[600px] mx-auto border-2 border-blue-200 p-4">
              <SearchBar />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p>Pros:</p>
            <ul className="list-disc ml-5 mb-2">
              <li>Consistent width across all views</li>
              <li>Clean, predictable layout</li>
            </ul>
            <p>Cons:</p>
            <ul className="list-disc ml-5">
              <li>Not responsive</li>
              <li>May overflow on mobile</li>
            </ul>
          </div>
        </section>

        {/* Option 2: Percentage with Max-Width */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Option 2: Percentage with Max-Width</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm mb-4">
            <div className="w-full max-w-[600px] mx-auto border-2 border-green-200 p-4">
              <SearchBar />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p>Pros:</p>
            <ul className="list-disc ml-5 mb-2">
              <li>Responsive while maintaining maximum size</li>
              <li>Works well on both mobile and desktop</li>
            </ul>
            <p>Cons:</p>
            <ul className="list-disc ml-5">
              <li>May look different in different containers</li>
            </ul>
          </div>
        </section>

        {/* Option 3: Responsive Breakpoints */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Option 3: Responsive Breakpoints</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm mb-4">
            <div className="w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto border-2 border-purple-200 p-4">
              <SearchBar />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p>Pros:</p>
            <ul className="list-disc ml-5 mb-2">
              <li>Most flexible</li>
              <li>Optimized for each screen size</li>
            </ul>
            <p>Cons:</p>
            <ul className="list-disc ml-5">
              <li>More complex to maintain</li>
              <li>May have slight variations between breakpoints</li>
            </ul>
          </div>
        </section>

        {/* Option 4: Container Based */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Option 4: Container Based</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm mb-4">
            <div className="w-[min(600px,90%)] mx-auto border-2 border-orange-200 p-4">
              <SearchBar />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p>Pros:</p>
            <ul className="list-disc ml-5 mb-2">
              <li>Self-contained sizing</li>
              <li>Good balance between consistency and responsiveness</li>
            </ul>
            <p>Cons:</p>
            <ul className="list-disc ml-5">
              <li>Might look slightly different in different contexts</li>
            </ul>
          </div>
        </section>

        {/* Real Context Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">In Context Examples</h2>
          
          {/* Header Context */}
          <div className="bg-white p-4 mb-8 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">Header Context</h3>
            <div className="h-16 bg-white border flex items-center px-4">
              <div className="w-32">Logo</div>
              <div className="flex-1 max-w-2xl mx-8">
                <SearchBar />
              </div>
              <div className="w-32">Actions</div>
            </div>
          </div>

          {/* Hero Context */}
          <div className="bg-gray-900 p-8 mb-8 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4 text-white">Hero Context</h3>
            <div className="max-w-2xl mx-auto">
              <SearchBar />
            </div>
          </div>

          {/* Map Context */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">Map Context</h3>
            <div className="w-64">
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Resize Instructions */}
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
          Resize the window to see how each option responds
        </div>
      </div>
    </div>
  );
}
