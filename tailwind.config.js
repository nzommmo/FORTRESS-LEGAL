
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'custom-image': "url('https://plus.unsplash.com/premium_photo-1698084059484-021206e1c62a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdhdmVsfGVufDB8fDB8fHww')",
        'custom-image1':"url('https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3xlbnwwfHwwfHx8MA%3D%3D')",
      },
      colors:{
        customyellow: '#D4AF37',
        customlue: '#425884',
        custompik: '#F69E98',
        custompyellow: '#E6E96A',
        customgree: '#B6E9BB',
        customlue1:'#2C6CEC'
      }
    },
  },
  plugins: [],
}