import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

const TerminalSimulator: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentCommand.trim()) {
      setCommandHistory([...commandHistory, currentCommand]);
      setCurrentCommand('');
    }
  };

  return (
    <div className="bg-black text-green-500 p-6 rounded-lg shadow-xl w-full h-[600px] font-mono">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-700">
        <Terminal className="w-5 h-5" />
        <h2 className="text-lg">Terminal Simulator</h2>
      </div>
      
      <div className="h-[500px] overflow-y-auto mb-4">
        {commandHistory.map((cmd, index) => (
          <div key={index} className="mb-2">
            <span className="text-blue-400">user@darkweb-intel</span>
            <span className="text-gray-400">:~$</span>
            <span className="ml-2">{cmd}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center">
        <span className="text-blue-400">user@darkweb-intel</span>
        <span className="text-gray-400">:~$</span>
        <input
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleCommand}
          className="flex-1 ml-2 bg-transparent border-none outline-none text-green-500"
          autoFocus
        />
      </div>
    </div>
  );
};

export default TerminalSimulator;