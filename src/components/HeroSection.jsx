export default function HeroSection() {
  return (
    <>
      <main>
        <div className=" grid grid-cols-2 h-80 relative top-15 shadow-sm mb-20  ">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-[20px]">Hi,it's me!</p>
            <h1 className="font-bold text-[2rem]">SUSHIL PARIYAR</h1>
            <p className="text-gray-600 mb-7">
              "Hi,I'm Sushil! I'm an aspiring creator passionate about learning
              design and coding.
            </p>
            <button className="bg-gradient-to-r from-violet-600 to-blue-500 pt-2 pb-2 pl-3 pr-3 rounded-sm text-white font-bold">
              Discover me
            </button>
          </div>
          <div className="flex overflow-hidden object-cover justify-center">
            <img src="./image.jpg" className="" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-2 shadow-sm h-120 mb-1">
          <div>
            <img
              className="overflow-hidden w-[75% ] h-[75%] object-cover flex justify-center items-center"
              src="./about me.jpg"
              alt=""
            />
          </div>
          <div className="flex items-center flex-col mt-20 ">
            <p className="text-[20px] font-bold mb-10">About Me</p>
            <h1 className="text-[2rem] font-bold mb-8">PERSONAL DETAILS</h1>
            <p className="mb-11 text-gray-600">
              Here, I focus on a range of items and features that we use in life
              without giving them a second thought. such as Coca Cola. Dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </p>
            <button className="bg-gradient-to-r from-violet-600 to-blue-500 pt-2 pb-2 pl-3 pr-3 rounded-sm text-white font-bold">
              View Full Details
            </button>
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-gradient-to-r from-violet-600 to-blue-500 w-full h-40">
          <div className="flex justify-center pt-10 gap-10 mb-4">
            <div className="text-white font-bold text-2xl">
              Connect with me:
            </div>
            <img className=" h-10" src="./facebook.png" alt="" />
            <img className=" h-10" src="./instagram.png" />
            <img className=" h-10" src="./linkedin.png" alt="" />
            <img className=" h-10" src="./youtube.png" alt="" />
          </div>
          <div className="flex justify-center text-white font-bold ">
            copyright@2025:Designed by SUSHIL
          </div>
        </div>
      </footer>
    </>
  );
}
