import React from "react";
function Card({username,btnText}){
    console.log(username);
    return (
        <div
  class="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
>
  <div
    class="text-white rounded-3xl border border-green-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-green-500/40 overflow-hidden hover:shadow-green-500/10 hover:shadow-3xl w-[350px]"
  >
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-green-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
      ></div>
      <div
        class="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-green-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500"
      ></div>
      <div
        class="absolute top-10 left-10 w-16 h-16 rounded-full bg-green-500/5 blur-xl animate-ping"
      ></div>
      <div
        class="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-green-500/5 blur-lg animate-ping delay-1000"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"
      ></div>
    </div>

    <div class="p-8 relative z-10">
      <div class="flex flex-col items-center text-center">
        <div class="relative mb-6">
          <div
            class="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping"
          ></div>
          <div
            class="absolute inset-0 rounded-full border border-green-500/10 animate-pulse delay-500"
          ></div>
          <div
            class="p-6 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-green-500/20"
          >
            <div
              class="transform group-hover:rotate-180 transition-transform duration-700"
            >
              <svg
                class="w-8 h-8 text-green-500 fill-current group-hover:text-green-400 transition-colors duration-300 filter drop-shadow-lg"
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div
          class="mb-4 transform group-hover:scale-105 transition-transform duration-300"
        >
          <p
            class="text-3xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-pulse"
          >
            Spotify
          </p>
        </div>

        <div class="space-y-1 max-w-sm">
          <p
            class="text-white font-semibold text-base transform group-hover:scale-105 transition-transform duration-300"
          >
            {username}
          </p>
          <p
            class="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300"
          >
            showcase your playlists,
          </p>
          <p
            class="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300"
          >
            top tracks, and let others
          </p>
          <p
            class="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300"
          >
            <button>{btnText}</button>
          </p>
        </div>

        <div
          class="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"
        ></div>

        <div
          class="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <div
            class="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"
          ></div>
          <div
            class="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"
          ></div>
        </div>
      </div>
    </div>

    <div
      class="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-green-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
  </div>
</div>

    )
}
export default Card