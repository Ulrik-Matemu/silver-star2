import React, { useState } from 'react';
import { ChevronDown, MapPin, Clock, Building2, HardHat } from 'lucide-react';

const vacancies = [
  {
    id: 1,
    role: 'Senior Logistics Coordinator',
    department: 'Supply Chain',
    location: 'Headquarters / Remote Hybrid',
    type: 'Full-time',
    description: 'Oversee the distribution of premium building materials across regional hubs. Ensure timely delivery and optimize fleet routes.',
    requirements: ['5+ years in logistics', 'Experience with ERP software', 'Strong negotiation skills']
  },
  {
    id: 2,
    role: 'Quality Assurance Specialist',
    department: 'Product Excellence',
    location: 'Manufacturing Site',
    type: 'Full-time',
    description: 'Inspect raw materials and finished building products to ensure they meet Silverstar’s rigorous durability standards.',
    requirements: ['Civil Engineering background', 'Knowledge of ISO standards', 'Attention to detail']
  },
  {
    id: 3,
    role: 'Regional Sales Manager',
    department: 'Commercial',
    location: 'On-site / Field',
    type: 'Commission Based',
    description: 'Expand our footprint by connecting contractors and developers with high-quality structural solutions.',
    requirements: ['B2B Sales experience', 'Industry network', 'Valid driver’s license']
  }
];

const CareersAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Build Your Future with Silverstar</h2>
        <p className="text-slate-600">Join Silverstar Resource Company Ltd and help us provide the foundation for tomorrow's infrastructure.</p>
      </div>

      <div className="space-y-4">
        {vacancies.map((job) => (
          <div 
            key={job.id} 
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md"
          >
            <button
              onClick={() => setOpenId(openId === job.id ? null : job.id)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <HardHat size={18} className="text-slate-500" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">{job.department}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">{job.role}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-slate-500 text-sm">
                  <div className="flex items-center gap-1"><MapPin size={14} /> {job.location}</div>
                  <div className="flex items-center gap-1"><Clock size={14} /> {job.type}</div>
                </div>
              </div>
              <div className={`transition-transform duration-300 ${openId === job.id ? 'rotate-180' : ''}`}>
                <ChevronDown className="text-slate-400" />
              </div>
            </button>

            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === job.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-0 border-t border-slate-50 bg-slate-50/50">
                <p className="text-slate-700 mb-4">{job.description}</p>
                <h4 className="font-bold text-slate-900 mb-2">What we’re looking for:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 mb-6">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                  Apply for this position
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersAccordion;