/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'HeroImage' : 'url("https://getwallpapers.com/wallpaper/full/7/b/c/271228.jpg")',
        'BgImg2' : 'url("https://getwallpapers.com/wallpaper/full/8/1/7/271635.jpg")',
        'BgImg' : 'url("https://getwallpapers.com/wallpaper/full/1/6/7/271431.jpg")',
      },
      colors:{
        'Neon-green' : '#45FFCA',
      },
    },
  },
  plugins: [],
}

