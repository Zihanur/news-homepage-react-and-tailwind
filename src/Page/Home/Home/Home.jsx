const Home = () => {
  return (
    <div className="mx-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:gap-4">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="">
            <img className="hidden md:block"
              src="https://i.ibb.co/JdcMp3j/image-web-3-desktop.jpg"
              alt=""
            />
            <img className="md:hidden" src="https://i.ibb.co/q55y3Fh/image-web-3-mobile.jpg" alt="" />
          </div>
          <div className="space-y-4 md:space-y-0 md:flex md:gap-2">
            <div className="bg-base-100 w-full text-5xl font-extrabold text-start">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="bg-base-100 w-full">
              <p className="text-slate-700">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="bg-red-600 md:bg-black text-white py-2 md:py-3 px-6 mt-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black p-6">
          <h1 className="text-orange-600 text-3xl font-bold">New</h1>
          <div className="my-6">
            <p className="text-lg text-white font-semibold mb-2">
              Hydrogen VS Electric Cars
            </p>
            <p className="text-slate-500">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr />
          <div className="my-6">
            <p className="text-lg md:text-orange-600 text-white font-semibold mb-2">
              The Downsides of AI Artistry
            </p>
            <p className="text-slate-500">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr />
          <div className="my-6">
            <p className="text-lg text-white font-semibold mb-2">
              Is VC Funding Drying Up?
            </p>
            <p className="text-slate-500">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex space-y-6 md:space-y-0 gap-3 my-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img src="https://i.ibb.co/9gJx5vv/image-top-laptops.jpg" alt="" />
          </div>
          <div className="col-span-2 space-y-2">
            <h1 className="text-slate-300 text-2xl font-bold">01</h1>
            <p className="text-black font-bold text-xl">Reviving Retro PCs</p>
            <p className="text-slate-500">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img src="https://i.ibb.co/M6KD5Sn/image-retro-pcs.jpg" alt="" />
          </div>
          <div className="col-span-2 space-y-2">
            <h1 className="text-slate-300 text-2xl font-bold">02</h1>
            <p className="text-black font-bold text-xl">Reviving Retro PCs</p>
            <p className="text-slate-500">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img src="https://i.ibb.co/Gk3ZrTW/image-gaming-growth.jpg" alt="" />
          </div>
          <div className="col-span-2 space-y-2">
            <h1 className="text-slate-300 text-2xl font-bold">03</h1>
            <p className="text-black font-bold text-xl">Reviving Retro PCs</p>
            <p className="text-slate-500">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
