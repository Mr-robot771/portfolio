export default function HeroSection() {
  return (
    <main>
      <div className=" grid grid-cols-2 h-80 relative top-15 shadow-sm  ">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-[20px]">Hi,it's me!</p>
          <h1 className="font-bold text-[2rem]">SUSHIL PARIYAR</h1>
          <p className="text-gray-600 mb-7">
            "Hi,I'm Sushil! I'm an aspiring creator passionate about learning
            design and coding.
          </p>
          <button className="bg-gradient-to-r from-violet-600 to-blue-500 pt-2 pb-2 pl-3 pr-3 rounded-sm text-white font-bold">
            Discover
          </button>
        </div>
        <div className="flex overflow-hidden object-cover justify-center">
          <img src="./image.jpg" className="" alt="" />
        </div>
      </div>
    </main>
  );
}
