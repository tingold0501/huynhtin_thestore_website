import React from "react";

function Select() {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-md mx-auto">
        <label htmlFor="select" className="font-semibold block py-2">
          Select Input:
        </label>
        <div className="relative">
          <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
            <input
              value="Javascript"
              name="select"
              id="select"
              className="px-4 appearance-none outline-none text-gray-800 w-full"
              checked
            />
            <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
              {/* Replace svg here */}
            </button>
            <label htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
              {/* Replace svg here */}
            </label>
          </div>
          <input
            type="checkbox"
            name="show_more"
            id="show_more"
            className="hidden peer"
            checked
          />
          <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
            <div className="cursor-pointer group">
              <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                Python
              </a>
            </div>
            <div className="cursor-pointer group border-t">
              <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">
                Javascript
              </a>
            </div>
            <div className="cursor-pointer group border-t">
              <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                Node
              </a>
            </div>
            <div className="cursor-pointer group border-t">
              <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                PHP
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right animate-bounce">
        <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
      </a>
    </div>
  );
}

export default Select;