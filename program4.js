// let foot = {
//        kick: function () {
//            this.yelp = "Ouch!";
//            setImmediate(function () {
//                console.log(this.yelp);
//            }.bind(this));
//        }
//    };
//    foot.kick();

   let runFade = {
          Asswhoopping: function () {
              this.yelp = "Ouch!";
              setImmediate( () => {
                  console.log(this.yelp);
              });
          }
      };

    runFade.Asswhoopping()
