const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");
let nama_web = ('http://dev.tempramas.divmu.pindad.co.id/home');

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://dev.tempramas.divmu.pindad.co.id/home').then(function(){
        function sleep(){
            driver.sleep(20000).then(function() {
                driver.getTitle().then(function(title) {
                    if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : [nama_web],
                                    fitur : ["open"],
                                    hasil : ["passed"]
                                   }
                                
                         console.log(json);
                         ioClient.emit('kirim', json);
                         } else { 
                          console.log('Test failed =', title);
                          ioClient.emit ('judul', title);
                          var json = {nama_web : [nama_web],
                                      fitur : ["open"],
                                      hasil : ["fail"]
                          }
                          console.log(json);
                          ioClient.emit('kirim', json);
                         }
                            // driver.quit();
                });
            });
        }
        sleep();
    });
    driver.findElement(webdriver.By.linkText("5.56")).click().then(function(){
        function sleep(){
          driver.sleep(2000).then(function() {
            driver.getTitle().then(function(title) {
              if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama_web],
                              fitur : ["click_5.56"],
                              hasil : ["passed"]
                             }
                          
                   console.log(json);
                   ioClient.emit('kirim', json);
                   } else { 
                    console.log('Test failed =', title);
                    ioClient.emit ('judul', title);
                    var json = {nama_web : [nama_web],
                                fitur : ["click_5.56"],
                                hasil : ["fail"]
                    }
                    console.log(json);
                    ioClient.emit('kirim', json);
                   }
                      // driver.quit();
                   });
              });
            }
              sleep();
      });
      driver.findElement(webdriver.By.linkText("12.7")).click().then(function(){
        function sleep(){
          driver.sleep(2000).then(function() {
            driver.getTitle().then(function(title) {
              if(title === title) {
                  console.log('Test passed = ', title);
                  var json = {nama_web : [nama_web],
                              fitur : ["click_12.7"],
                              hasil : ["passed"]
                             }
                          
                   console.log(json);
                   ioClient.emit('kirim', json);
                   } else {
                    console.log('Test failed =', title);
                    ioClient.emit ('judul', title);
                    var json = {nama_web : [nama_web],
                                fitur : ["click_12.7"],
                                hasil : ["fail"]
                    }
                    console.log(json);
                    ioClient.emit('kirim', json);
                   }
                      driver.quit();
                   });
              });
            }
              sleep();
      });
}
pindad();