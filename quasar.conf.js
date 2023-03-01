// Note ctx will be undefined currently, eventually
// support will be added to emulate the Quasar Context object
// allowing for dyanmic configuration
module.exports = function(ctx) {
  return {
    
   
    framework: {
      config: {
        brand: {
          primary: "#ffffff",
          // ...
        },
      },
      components: [
        "QAvatar",
        "QBtn",
        // ...
      ],
      directives: ["ClosePopup"],
      plugins: ["Cookies"],
      
      cssAddon: true
    },
    supportIE: true
  };
};
