module.exports = {
  plugins: [require("@tailwindcss/custom-forms")],
  purge: {
    enabled: true,
    content: ["./src/index.html", "./src/*.js"],
  },
};
