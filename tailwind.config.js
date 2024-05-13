/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        whitesmoke: {
          "100": "#f9f9fb",
          "200": "#f9f9f9",
          "300": "#f5f5f5",
          "400": "#f3f3f3",
          "500": "#f1f1f1",
          "600": "#f1f0f0",
          "700": "#eaeaea",
        },
        gray: {
          "100": "#fbfbfb",
          "200": "#858585",
          "300": "#28283c",
          "400": "#040404",
          "500": "rgba(0, 0, 0, 0.2)",
          "600": "rgba(0, 0, 0, 0.1)",
          "700": "rgba(0, 0, 0, 0.5)",
        },
        darkslategray: {
          "100": "#3c4758",
          "200": "#333",
          "300": "#2a313d",
          "400": "rgba(51, 51, 51, 0.1)",
        },
        lightgray: "#d1d1d1",
        slategray: "#74788d",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#e6e8ec",
          "300": "#d9e6de",
          "400": "#e6dbdb",
          "500": "#dcdcdc",
          "600": "#d9d9d9",
        },
        dimgray: "#68616d",
        red: {
          "100": "#f82424",
          "200": "#ff0000",
          "300": "rgba(248, 36, 36, 0.1)",
        },
        snow: "#fff5f5",
        tomato: "#ff4a4a",
        darkgray: {
          "100": "#9e9e9e",
          "200": "#9d9d9d",
        },
        lavender: {
          "100": "#edecf8",
          "200": "#e4e6ef",
          "300": "#cccfe0",
        },
        limegreen: {
          "100": "#2db742",
          "200": "#00cc45",
          "300": "rgba(45, 183, 66, 0.1)",
        },
        aliceblue: "#edf3f9",
        mistyrose: {
          "100": "#fee9e9",
          "200": "#e6cfcf",
        },
        blueviolet: {
          "100": "#4c40ed",
          "200": "rgba(76, 64, 237, 0.1)",
        },
        silver: "#bfbfbf",
        mintcream: "#f3fff6",
        lightgreen: "#6dcc76",
        mediumslateblue: {
          "100": "#0166ff",
          "200": "rgba(115, 102, 255, 0.1)",
        },
      },
      spacing: {
    '0': '0px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '0.75',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        "gothic-a1": "'Gothic A1'",
        montserrat: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "81xl": "100px",
        "41xl": "60px",
        "980xl": "999px",
        "6xs": "7px",
        "3xs": "10px",
        "10xs": "3px",
        "11xl": "30px",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      mini: "15px",
      "17xl": "36px",
      "3xl": "22px",
      "5xl": "24px",
      lgi: "19px",
      "8xs": "5px",
      xs: "12px",
      "3xs": "10px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      height: {
        '2/3': '66.666667%',
        '3/4': '75%',
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  }
}