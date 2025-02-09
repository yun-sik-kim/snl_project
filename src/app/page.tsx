import Image from "next/image";
import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-400">
      {/* Page 1 */}
      <div className="relative w-full h-screen flex">
        <div className="w-2/3 bg-slate-800 h-full"></div>
        <div className="w-1/3 bg-slate-700 h-full"></div>
      </div>

      {/* Page 2 - Fixed Layout */}
      <div className="relative w-full h-screen bg-gray-600 flex justify-center items-center">
        {/* <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg">
          <Calculator />
        </div> */}
      </div>
    </div>
  );
}
