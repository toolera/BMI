import BMICalculator from '@/components/BMICalculator';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            BMI Calculator
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate your Body Mass Index quickly and easily. Get instant results 
            and understand your weight status with our free online BMI calculator.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator */}
          <div className="order-2 lg:order-1">
            <BMICalculator />
          </div>

          {/* Information Panel */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                What is BMI?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Body Mass Index (BMI) is a measure of body fat based on your height and weight. 
                It provides a quick and easy way to categorize your weight status and assess 
                potential health risks.
              </p>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                BMI Categories
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span className="text-blue-700 font-medium">Underweight</span>
                  <span className="text-blue-600">BMI &lt; 18.5</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="text-green-700 font-medium">Normal weight</span>
                  <span className="text-green-600">BMI 18.5-24.9</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                  <span className="text-yellow-700 font-medium">Overweight</span>
                  <span className="text-yellow-600">BMI 25-29.9</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="text-red-700 font-medium">Obese</span>
                  <span className="text-red-600">BMI ≥ 30</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                How to Use
              </h2>
              <ol className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">1</span>
                  Choose your preferred unit system (Metric or Imperial)
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">2</span>
                  Enter your current weight
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">3</span>
                  Enter your height
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5 flex-shrink-0">4</span>
                  Click "Calculate BMI" to get your results instantly
                </li>
              </ol>
            </div>

            <div className="card bg-amber-50 border-amber-200">
              <h2 className="text-xl font-semibold text-amber-800 mb-3">
                Important Note
              </h2>
              <p className="text-amber-700 text-sm leading-relaxed">
                BMI is a screening tool and not a diagnostic tool. It doesn't account for 
                muscle mass, bone density, or other factors. Always consult with a healthcare 
                provider for personalized medical advice.
              </p>
            </div>
          </div>
        </div>

        {/* Schema.org JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "BMI Calculator",
              "description": "Free online BMI calculator to calculate your Body Mass Index with metric and imperial units.",
              "url": "https://bmi-calculator.vercel.app",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Calculate BMI with metric units (kg/cm)",
                "Calculate BMI with imperial units (lbs/inches)",
                "Instant BMI results and categorization",
                "Mobile-friendly responsive design",
                "Free to use"
              ]
            })
          }}
        />
      </div>
    </div>
  );
}