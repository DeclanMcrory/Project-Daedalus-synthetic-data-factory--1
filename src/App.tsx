import React, { useState } from 'react';
import { Brain, Database, Settings } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('generate');

  return (
    <div className="w-96 min-h-[600px] bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Project Daedalus</h1>
        <p className="text-sm">Synthetic Data Factory</p>
      </header>

      <nav className="bg-blue-500 text-white flex">
        <button
          className={`flex-1 py-2 ${activeTab === 'generate' ? 'bg-blue-600' : ''}`}
          onClick={() => setActiveTab('generate')}
        >
          <Database className="inline-block mr-1" size={16} /> Generate
        </button>
        <button
          className={`flex-1 py-2 ${activeTab === 'train' ? 'bg-blue-600' : ''}`}
          onClick={() => setActiveTab('train')}
        >
          <Brain className="inline-block mr-1" size={16} /> Train
        </button>
        <button
          className={`flex-1 py-2 ${activeTab === 'settings' ? 'bg-blue-600' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings className="inline-block mr-1" size={16} /> Settings
        </button>
      </nav>

      <main className="flex-1 p-4">
        {activeTab === 'generate' && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Generate Synthetic Data</h2>
            <textarea
              className="w-full h-32 p-2 border rounded"
              placeholder="Describe the dataset you want to generate..."
            ></textarea>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Generate Data
            </button>
          </div>
        )}
        {activeTab === 'train' && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Train AI Model</h2>
            <p>Select a model and dataset to start training.</p>
            {/* Add model selection and training options here */}
          </div>
        )}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Settings</h2>
            <p>Configure extension settings and preferences.</p>
            {/* Add settings options here */}
          </div>
        )}
      </main>

      <footer className="bg-gray-200 p-2 text-center text-sm">
        v0.1.0 | © 2024 Project Daedalus
      </footer>
    </div>
  );
}

export default App;