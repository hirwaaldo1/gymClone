module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        clone:"#FF385C"
      },
      width:{
        'fill':"fill content"
      },
   
      border:{
        "1":"1px"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor:["active"]
    },
  },
  plugins: [],
}
