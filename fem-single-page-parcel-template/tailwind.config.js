module.exports = {
  content: ["./src/**/*.{html,js,pug}"], // Ensure deep scanning of directories
  theme: {
    extend: {
      screens: {
        xs: "376px", // Custom breakpoint at 375px
      },
      // You can extend other theme values here as needed
    },
  },
  plugins: [], // Include plugins as needed
};
