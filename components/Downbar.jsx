import { Baby, HomeIcon } from "lucide-react";
import { BookText , Smile , Heart } from "lucide-react";

export default function Downbar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#9E79B9] h-[80px] rounded-t-3xl shadow-md flex justify-around items-center px-4 z-50 w-full max-w-sm mx-auto md:max-w-4xl lg:max-w-6xl md:h-[90px] lg:h-[100px]">
      {/* Home */}
      <div className="flex flex-col items-center text-white text-xs md:text-sm lg:text-base cursor-pointer hover:scale-105 transition-transform duration-200">
<HomeIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
        <span className="mt-1 font-noto">होम</span>
      </div>

      {/* Care */}
      <div className="flex flex-col items-center text-white text-xs md:text-sm lg:text-base cursor-pointer hover:scale-105 transition-transform duration-200">
        <Heart className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
        <span className="mt-1 font-noto">देखभाल</span>
      </div>

      {/* Knowledge */}
      <div className="flex flex-col items-center text-white text-xs md:text-sm lg:text-base cursor-pointer hover:scale-105 transition-transform duration-200">
        <BookText className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
        <span className="mt-1 font-noto">जानकारी</span>
      </div>

      {/* Central Baby Icon */}
      <div className="relative -top-8 bg-[#D67D93] w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-[4px] border-[#FFF4F4] md:-top-10 md:w-20 md:h-20 lg:-top-12 lg:w-24 lg:h-24 cursor-pointer hover:scale-110 transition-transform duration-300">
        <Baby className="text-white md:w-6 md:h-6 lg:w-8 lg:h-8" size={20} />
      </div>

      {/* Didi Contact */}
      <div className="flex flex-col items-center text-white text-xs md:text-sm lg:text-base cursor-pointer hover:scale-105 transition-transform duration-200">
       <Smile className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
        <span className="mt-1 font-noto">दीदी</span>
      </div>
    </footer>
  );
}

