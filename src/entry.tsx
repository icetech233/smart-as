
import React from 'react';
import ReactDOM from 'react-dom/client';
import './entry.css'; 
import { MessageAlert } from './index';
import { mockMessages } from './mockData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="min-h-screen bg-transparent p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Notify Sharp
      </h1>
      <MessageAlert messages={mockMessages} />
    </div>
  </div>
);