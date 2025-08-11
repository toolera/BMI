'use client';

import { useState } from 'react';

interface BMIResult {
  bmi: number;
  category: string;
  description: string;
  color: string;
}

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const getBMICategory = (bmi: number): Omit<BMIResult, 'bmi'> => {
    if (bmi < 18.5) {
      return {
        category: 'Underweight',
        description: 'Consider consulting a healthcare provider about healthy weight gain.',
        color: 'text-blue-600'
      };
    } else if (bmi < 25) {
      return {
        category: 'Normal weight',
        description: 'Great! You have a healthy weight. Maintain your current lifestyle.',
        color: 'text-green-600'
      };
    } else if (bmi < 30) {
      return {
        category: 'Overweight',
        description: 'Consider healthy diet and regular exercise to reach ideal weight.',
        color: 'text-yellow-600'
      };
    } else {
      return {
        category: 'Obese',
        description: 'Consider consulting a healthcare provider for personalized advice.',
        color: 'text-red-600'
      };
    }
  };

  const calculateBMI = () => {
    if (!weight || !height) return;

    setIsCalculating(true);
    
    setTimeout(() => {
      let weightInKg = parseFloat(weight);
      let heightInM = parseFloat(height);

      if (unit === 'imperial') {
        weightInKg = weightInKg * 0.453592;
        heightInM = heightInM * 0.0254;
      } else {
        heightInM = heightInM / 100;
      }

      const bmi = weightInKg / (heightInM * heightInM);
      const category = getBMICategory(bmi);

      setResult({
        bmi: parseFloat(bmi.toFixed(1)),
        ...category
      });
      setIsCalculating(false);
    }, 300);
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="card animate-fade-in">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">BMI Calculator</h1>
          <p className="text-gray-600">Calculate your Body Mass Index</p>
        </div>

        {/* Unit Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            onClick={() => setUnit('metric')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              unit === 'metric'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Metric
          </button>
          <button
            onClick={() => setUnit('imperial')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              unit === 'imperial'
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Imperial
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {/* Weight Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? 'Enter weight in kg' : 'Enter weight in lbs'}
              className="input-field"
              min="1"
              step="0.1"
            />
          </div>

          {/* Height Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height ({unit === 'metric' ? 'cm' : 'inches'})
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === 'metric' ? 'Enter height in cm' : 'Enter height in inches'}
              className="input-field"
              min="1"
              step="0.1"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateBMI}
          disabled={!weight || !height || isCalculating}
          className="btn-primary w-full mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCalculating ? 'Calculating...' : 'Calculate BMI'}
        </button>

        {/* Results */}
        {result && (
          <div className="animate-slide-up">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">{result.bmi}</div>
                <div className={`text-lg font-semibold mb-2 ${result.color}`}>
                  {result.category}
                </div>
                <p className="text-sm text-gray-600">{result.description}</p>
              </div>
            </div>

            {/* BMI Scale */}
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-700 mb-2">BMI Scale</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-blue-600">Underweight</span>
                  <span>&lt; 18.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600">Normal</span>
                  <span>18.5 - 24.9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-600">Overweight</span>
                  <span>25.0 - 29.9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-600">Obese</span>
                  <span>&gt;= 30.0</span>
                </div>
              </div>
            </div>

            <button
              onClick={resetCalculator}
              className="w-full py-2 px-4 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Calculate Again
            </button>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 text-center mt-4 px-4">
        * This calculator is for informational purposes only. Consult a healthcare provider for medical advice.
      </p>
    </div>
  );
}