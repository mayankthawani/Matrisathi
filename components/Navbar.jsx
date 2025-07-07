  import { Baby } from "lucide-react";
  export default function Navbar() {
  return (
  <nav className="w-full px-4 py-4 bg-white/90 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center">
              <Baby className="text-white" size={20} />
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-[#9E79B9] to-[#B899D1] bg-clip-text text-transparent font-mukta">
              मातृसाथी
            </div>
          </div>
          <div className="text-[#7A5C99] text-sm font-medium font-hindi truncate max-w-[180px]">
  चेतना चाइल्ड केयर
</div>

        </div>
      </nav>
    );
}