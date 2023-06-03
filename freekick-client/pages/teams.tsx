import Head from "next/head";

export default function Teams() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <div className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex w-80 h-96">
        <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
          <div className="mb-3">
            <h1 className="text-3xl font-bold">Today</h1>
            <p className="text-sm text-gray-500 uppercase font-bold">
              THURSDAY 6 AUGUST
            </p>
          </div>
          <div className="mb-5">
            <a
              href="#"
              className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div className="absolute top-0 right-0 -mt-3 mr-3">
                <div className="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none">
                  <i className="mdi mdi-fire text-base align-middle"></i>{" "}
                  <span className="align-middle">FRESH</span>
                </div>
              </div>
              <div className="h-48"></div>
              <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
                Tasnim Lacey New Album Out&nbsp;Now
              </h2>
              <div className="flex w-full items-center text-sm text-gray-300 font-medium">
                <div className="flex-1 flex items-center">
                  <div className="rounded-full w-8 h-8 mr-3"></div>
                  <div>Gwen Thomson</div>
                </div>
                <div>
                  <i className="mdi mdi-thumb-up"></i> 18
                </div>
              </div>
            </a>
          </div>
          <div className="mb-5">
            <a
              href="#"
              className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div className="h-48"></div>
              <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
                Top 5 Cocktail Bars in&nbsp;NYC
              </h2>
              <div className="flex w-full items-center text-sm text-gray-300 font-medium">
                <div className="flex-1 flex items-center">
                  <div className="rounded-full w-8 h-8 mr-3"></div>
                  <div>Kayden Buckley</div>
                </div>
                <div>
                  <i className="mdi mdi-thumb-up"></i> 7
                </div>
              </div>
            </a>
          </div>
          <div className="mb-3">
            <h1 className="text-3xl font-bold">Yesterday</h1>
            <p className="text-sm text-gray-500 uppercase font-bold">
              WEDNESDAY 5 AUGUST
            </p>
          </div>
          <div className="flex -mx-1 mb-5">
            <div className="w-1/2 px-1">
              <a
                href="#"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              >
                <div className="h-24"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  DJ Dan Spins The Wheels
                </h3>
              </a>
              <a
                href="#"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              >
                <div className="h-32"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Top Travels Destinations For 2020
                </h3>
              </a>
            </div>
            <div className="w-1/2 px-1">
              <a
                href="#"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              >
                <div className="h-32"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  M&S Launches New Makeup Range!
                </h3>
              </a>
              <a
                href="#"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              >
                <div className="h-24"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  APT Set To Be A&nbsp;Ripper
                </h3>
              </a>
            </div>
          </div>
          <div className="mb-3">
            <h1 className="text-3xl font-bold">Previous</h1>
          </div>
          <div>
            <a
              href="#"
              className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div className="block h-24 w-2/5 rounded overflow-hidden"></div>
              <div className="pl-3 w-3/5">
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  SPORTS
                </p>
                <h3 className="text-md font-semibold leading-tight mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
                <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                  <div className="rounded-full w-5 h-5 mr-3"></div>
                  <div>Jack Ryan</div>
                </div>
              </div>
            </a>
          </div>
          <hr className="border-gray-200 my-3" />
          <div>
            <a
              href="#"
              className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div className="block h-24 w-2/5 rounded overflow-hidden"></div>
              <div className="pl-3 w-3/5">
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  ART
                </p>
                <h3 className="text-md font-semibold leading-tight mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
                <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                  <div className="rounded-full w-5 h-5 mr-3"></div>
                  <div>Kevin Jackson</div>
                </div>
              </div>
            </a>
          </div>
          <hr className="border-gray-200 my-3" />
          <div>
            <a
              href="#"
              className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div className="block h-24 w-2/5 rounded overflow-hidden"></div>
              <div className="pl-3 w-3/5">
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  MUSIC
                </p>
                <h3 className="text-md font-semibold leading-tight mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
                <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                  <div className="rounded-full w-5 h-5 mr-3"></div>
                  <div>Rowena Wheeler</div>
                </div>
              </div>
            </a>
          </div>
          <hr className="border-gray-200 my-3" />
          <div>
            <a
              href="#"
              className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
            >
              <div className="block h-24 w-2/5 rounded overflow-hidden"></div>
              <div className="pl-3 w-3/5">
                <p className="text-xs text-gray-500 uppercase font-semibold">
                  WORLD
                </p>
                <h3 className="text-md font-semibold leading-tight mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
                <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                  <div className="rounded-full w-5 h-5 mr-3"></div>
                  <div>Gwen Thomson</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
          <a
            href="#"
            className="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500"
          >
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-newspaper-variant-outline"></i>
              </span>
              <span className="block text-xs leading-none">Today</span>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
          >
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-apps"></i>
              </span>
              <span className="block text-xs leading-none">Categories</span>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
          >
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-star-outline"></i>
              </span>
              <span className="block text-xs leading-none">Favorites</span>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
          >
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8">
                <i className="mdi mdi-magnify"></i>
              </span>
              <span className="block text-xs leading-none">Search</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}