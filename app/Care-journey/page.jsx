"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, Hospital, Apple, Baby, ChevronRight, Heart } from "lucide-react";
import Downbar from "@/components/Downbar"
import Navbar from "@/components/Navbar";

export default function CareDashboard() {
 const careOptions = [
  {
    id: 'monthly-tracker',
    title: 'मासिक ट्रैकर',
    description: 'गर्भावस्था की निगरानी',
    icon: Calendar,
    href: '/iec',
    gradient: 'from-pink-400 to-purple-500',
    bgGradient: 'from-pink-50 to-purple-50',
    borderColor: 'border-pink-200'
  },
  {
    id: 'birth-plan',
    title: 'प्रसव योजना',
    description: 'सुरक्षित प्रसव की तैयारी',
    icon: Hospital,
    href: '/birth-plan',
    gradient: 'from-blue-400 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'nutrition',
    title: 'पोषण सुझाव',
    description: 'स्वस्थ आहार की जानकारी',
    icon: Apple,
    href: '/nutrition',
    gradient: 'from-green-400 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'baby-care',
    title: 'बच्चे की देखभाल',
    description: 'नवजात की पूर्ण देखभाल',
    icon: Baby,
    href: '/pnc',
    gradient: 'from-orange-400 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'anganwadi-contact',
    title: 'आंगनवाड़ी नंबर',
    description: 'नजदीकी आंगनवाड़ी से संपर्क करें',
    icon: Phone, // You can use Lucide’s Phone or Contact icon here
    href: '/anganwadi',
    gradient: 'from-teal-400 to-cyan-500',
    bgGradient: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-200'
  }
];



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4F4] via-[#FFF8F8] to-[#F8F4FF] w-full max-w-sm mx-auto md:max-w-4xl lg:max-w-6xl">
      <Navbar />
      
     <div className="pt-8 pb-32 px-6 md:px-12 lg:px-20 md:pt-12 md:pb-40">
        {/* Enhanced Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center md:w-16 md:h-16">
              <Heart className="text-white" size={24} />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-[#9E79B9] mb-3 font-mukta leading-tight md:text-3xl lg:text-4xl md:mb-6">
            आपकी देखभाल यात्रा<br />शुरू करें
          </h1>
          
          <p className="text-gray-600 text-base font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            नीचे दिए गए विकल्पों में से चुनें और जानें हर महीने के अनुसार जरूरी बातें
          </p>
        </div>

        {/* Enhanced Grid Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {careOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card
                key={option.id}
                onClick={() => (window.location.href = option.href)}
                className={`bg-gradient-to-r ${option.bgGradient} ${option.borderColor} border-2 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group overflow-hidden md:rounded-3xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 relative md:p-8 lg:p-10">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10 md:w-24 md:h-24"></div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1 md:gap-6">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${option.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg md:w-20 md:h-20 lg:w-24 lg:h-24 md:rounded-3xl`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800 font-mukta mb-1 group-hover:text-[#9E79B9] transition-colors md:text-xl lg:text-2xl md:mb-2">
                          {option.title}
                        </h3>
                        <p className="text-gray-600 text-sm font-noto leading-relaxed md:text-base lg:text-lg">
                          {option.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="ml-2 md:ml-4">
                      <ChevronRight 
                        className="text-gray-400 group-hover:text-[#9E79B9] group-hover:translate-x-1 transition-all duration-300 md:w-7 md:h-7 lg:w-8 lg:h-8" 
                        size={24} 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Tips Section */}
        <div className="mt-10 mb-6 md:mt-16 md:mb-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 text-center md:p-12">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 md:w-16 md:h-16 md:mb-8">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-800 font-mukta mb-2 md:text-xl lg:text-2xl md:mb-4">
                आपकी सेहत, हमारी प्राथमिकता
              </h3>
              <p className="text-gray-600 text-sm font-noto md:text-base lg:text-lg">
                नियमित जांच और सही पोषण से आपका और बच्चे का स्वास्थ्य बेहतर रहेगा
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Component */}
      <Downbar />
    </div>
  );
}
