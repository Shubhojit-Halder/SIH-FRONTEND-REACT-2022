import React from "react";
import {motion} from 'framer-motion';
const Svg = () => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#5858fc44"></stop>
            <stop offset="95%" stop-color="#eb144c44"></stop>
          </linearGradient>
        </defs>
        <motion.path
          animate={{ y: 20 }}
          transition={{ yoyo: Infinity, duration: 1 }}
          d="M 0,700 C 0,700 0,140 0,140 C 109.96172248803828,115.29186602870814 219.92344497607655,90.58373205741627 307,103 C 394.07655502392345,115.41626794258373 458.26794258373207,164.95693779904303 535,161 C 611.7320574162679,157.04306220095697 701.0047846889953,99.58851674641149 811,93 C 920.9952153110047,86.41148325358851 1051.712918660287,130.68899521531102 1160,147 C 1268.287081339713,163.31100478468898 1354.1435406698565,151.6555023923445 1440,140 C 1440,140 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></motion.path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#5858fc66"></stop>
            <stop offset="95%" stop-color="#eb144c66"></stop>
          </linearGradient>
        </defs>
        <motion.path
          animate={{ y: 30 }}
          transition={{ yoyo: Infinity, duration: 2 }}
          d="M 0,700 C 0,700 0,280 0,280 C 104.04784688995213,294.9569377990431 208.09569377990425,309.9138755980861 307,304 C 405.90430622009575,298.0861244019139 499.665071770335,271.30143540669854 592,271 C 684.334928229665,270.69856459330146 775.2440191387559,296.8803827751196 880,312 C 984.7559808612441,327.1196172248804 1103.3588516746413,331.177033492823 1199,324 C 1294.6411483253587,316.822966507177 1367.3205741626793,298.4114832535885 1440,280 C 1440,280 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
        ></motion.path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#5858fc88"></stop>
            <stop offset="95%" stop-color="#eb144c88"></stop>
          </linearGradient>
        </defs>
        <motion.path
          animate={{ y: 15 }}
          transition={{ yoyo: Infinity, duration: 0.6 }}
          d="M 0,700 C 0,700 0,420 0,420 C 84.19138755980859,397.86602870813397 168.38277511961718,375.732057416268 272,394 C 375.6172248803828,412.267942583732 498.6602870813398,470.93779904306217 608,463 C 717.3397129186602,455.06220095693783 812.9760765550238,380.51674641148327 889,372 C 965.0239234449762,363.48325358851673 1021.4354066985647,420.99521531100476 1110,440 C 1198.5645933014353,459.00478468899524 1319.2822966507176,439.5023923444976 1440,420 C 1440,420 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-2"
        ></motion.path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#5858fcff"></stop>
            <stop offset="95%" stop-color="#eb144cff"></stop>
          </linearGradient>
        </defs>
        <motion.path
          animate={{ y: 50 }}
          transition={{ yoyo: Infinity, duration: 2 }}
          d="M 0,700 C 0,700 0,560 0,560 C 112.25837320574166,581.0717703349283 224.51674641148333,602.1435406698564 326,596 C 427.4832535885167,589.8564593301436 518.1913875598085,556.4976076555024 598,533 C 677.8086124401915,509.50239234449754 746.7177033492825,495.86602870813397 839,517 C 931.2822966507175,538.133971291866 1046.9377990430623,594.0382775119617 1151,607 C 1255.0622009569377,619.9617224880383 1347.531100478469,589.9808612440191 1440,560 C 1440,560 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-3"
        ></motion.path>
      </svg>
    </div>
  );
};

export default Svg;
