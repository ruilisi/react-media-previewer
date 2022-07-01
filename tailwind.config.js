module.exports = {
  content: ["./src/components/*.tsx"],
  theme: {
    extend: {
      zIndex: {
        2200: "2200",
        4396: "4396",
      },
      maxWidth: {
        "4/5": "80vw",
      },
      maxHeight: {
        "4/5": "80vh",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
