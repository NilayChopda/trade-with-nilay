import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example: fetch pattern from the local backend API
    fetch('http://localhost:8000/detect-patterns?symbol=BTC')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const chartData = [
    { name: 'Mon', value: 400 },
    { name: 'Tue', value: 300 },
    { name: 'Wed', value: 500 },
    { name: 'Thu', value: 200 },
    { name: 'Fri', value: 600 },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-green-400" />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Trade with Nilay Dashboard
          </h1>
        </div>

        <div className="bg-neutral-800 p-6 rounded-2xl shadow-xl shadow-black/50 border border-neutral-700">
          <h2 className="text-xl font-semibold mb-4 text-neutral-200">Recent Pattern Detected</h2>
          {data ? (
            <div className="p-4 bg-neutral-700/50 rounded-xl">
              <p className="text-lg">Symbol: <span className="font-bold text-white">{data.symbol}</span></p>
              <p className="text-lg">Pattern: <span className="font-bold text-green-400">{data.pattern}</span></p>
              <p className="text-lg">Confidence: <span className="font-bold text-blue-400">{(data.confidence * 100).toFixed(0)}%</span></p>
            </div>
          ) : (
            <p className="text-neutral-400 italic">No patterns detected currently... Is the backend running?</p>
          )}
        </div>

        <div className="bg-neutral-800 p-6 rounded-2xl shadow-xl shadow-black/50 border border-neutral-700 h-[400px]">
          <h2 className="text-xl font-semibold mb-4 text-neutral-200">Sample Activity</h2>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={chartData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#171717', border: '1px solid #404040', borderRadius: '8px' }} 
              />
              <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
