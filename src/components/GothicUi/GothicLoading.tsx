export default function LoadingGothic() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-[#881144] border-t-transparent rounded-full animate-spin"></div>

        <div className="absolute left-1/2 top-1/2 w-16 h-16 border-4 border-purple-400 border-b-transparent rounded-full animate-spin animate-reverse transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#881144] text-2xl animate-pulse">⚜</span>
        </div>

        <div className="absolute -inset-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[#881144] text-sm animate-float">
            ✠
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[#881144] text-sm animate-float-reverse">
            ◆
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#881144] text-sm animate-float">
            ❖
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#881144] text-sm animate-float-reverse">
            ✧
          </div>
        </div>
      </div>
    </div>
  );
}
