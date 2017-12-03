;
(function() {

   /**
   * Contact factory
   *
   * You can fetch here some data from API and the use them
   * in controller
   *
   */
   app.factory('Contact', Contact);

   function Contact() {
       __construct = function(cellPhone,phone) {
           this.cellPhone  = cellPhone;
           this.phone      = phone; 
       }
       return __construct;
   }
})();
