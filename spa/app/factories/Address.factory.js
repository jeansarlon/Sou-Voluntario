;
(function() {

   /**
   * Sample factory
   *
   * You can fetch here some data from API and the use them
   * in controller
   *
   */
   app.factory('Address', AdressObject);

   function AdressObject() {
       __construct = function(city, state, street, number, district, complement, CEP) {
           this.city        = city;
           this.state       = state; 
           this.street      = street; 
           this.number      = number; 
           this.district    = district;
           this.complement  = complement;
           this.CEP         = CEP;
       }
       return __construct;
   }

})();
