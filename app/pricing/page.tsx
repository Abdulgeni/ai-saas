import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      features: ['AI Summarizer', '5 summaries/day', 'Email support', 'Basic analytics'],
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: ['Unlimited summaries', 'Priority AI queue', 'API access', 'Advanced analytics', 'Custom templates'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      features: ['Everything in Pro', 'Custom AI models', 'Dedicated support', 'SLA guarantee', 'SSO integration'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">💰 Pricing</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-500">Start free. Upgrade when you need more power.</p>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular ? 'border-blue-500 shadow-xl shadow-blue-500/10 scale-105' : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-600">
                    <span className="text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`block text-center py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                    : 'border-2 border-gray-200 text-gray-700 hover:border-blue-300'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}