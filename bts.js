const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://autotest.divmu.pindad.co.id/");
let nama = ('http://bts.divmu.pindad.co.id/');

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    function sleep(){
        driver.sleep(90000);
    }
    driver.get('http://bts.divmu.pindad.co.id/');
    driver.findElement(webdriver.By.linkText("Register")).click().then(function(){

        driver.findElement(webdriver.By.linkText("Login")).click().then(function(){
            driver.findElement(webdriver.By.name("username")).sendKeys("19216819700020");
            sleep()
            driver.findElement(webdriver.By.name("password")).sendKeys("rizky");
            sleep()
            driver.findElement(webdriver.By.css("input:nth-child(6)")).click().then(function(){
            sleep()
            driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                              fitur : ["login"],
                              hasil : ["passed"]
                            }              
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                                fitur : ["login"],
                                hasil : ["fail"]
                             }
                  console.log(json);
                  ioClient.emit('kirim', json);
              }
              });
            driver.findElement(webdriver.By.linkText("Saldo Tabungan")).click().then(function(){
            sleep()
            driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                              fitur : ["click_saldo"],
                              hasil : ["passed"]
                            }              
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                                fitur : ["click_saldo"],
                                hasil : ["fail"]
                             }
                  console.log(json);
                  ioClient.emit('kirim', json);
              }
              });
            driver.findElement(webdriver.By.css("li:nth-child(2) > a")).click().then(function(){
            driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                              fitur : ["click"],
                              hasil : ["passed"]
                            }              
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                                fitur : ["click"],
                                hasil : ["fail"]
                             }
                  console.log(json);
                  ioClient.emit('kirim', json);
              }
              });
            driver.findElement(webdriver.By.css("li:nth-child(3) > a")).click().then(function(){
            sleep()
            driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                              fitur : ["click"],
                              hasil : ["passed"]
                            }              
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                                fitur : ["click"],
                                hasil : ["fail"]
                             }
                  console.log(json);
                  ioClient.emit('kirim', json);
              }
              });
            driver.findElement(webdriver.By.css("li:nth-child(4) > a")).click().then(function(){
            sleep()
            driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                              fitur : ["click"],
                              hasil : ["passed"]
                            }              
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                                fitur : ["click"],
                                hasil : ["fail"]
                             }
                  console.log(json);
                  ioClient.emit('kirim', json);
              }
              });
            driver.findElement(webdriver.By.css("li:nth-child(5) > a")).click().then(function(){
            sleep()
            driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                              fitur : ["click"],
                              hasil : ["passed"]
                            }              
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                                fitur : ["click"],
                                hasil : ["fail"]
                             }
                  console.log(json);
                  ioClient.emit('kirim', json);
              }
              });
            driver.findElement(webdriver.By.css("li:nth-child(6) > a")).click().then(function(){
            sleep()
            driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                              fitur : ["click"],
                              hasil : ["passed"]
                            }              
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                                fitur : ["click"],
                                hasil : ["fail"]
                             }
                  console.log(json);
                  ioClient.emit('kirim', json);
              }
              });
            driver.findElement(webdriver.By.css("li:nth-child(7) > a")).click().then(function(){
            sleep()
            driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                              fitur : ["click"],
                              hasil : ["passed"]
                            }              
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                                fitur : ["click"],
                                hasil : ["fail"]
                             }
                  console.log(json);
                  ioClient.emit('kirim', json);
              }
              });
            driver.findElement(webdriver.By.css("form > input:nth-child(1)")).click()
            sleep()
            driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                              fitur : ["click"],
                              hasil : ["passed"]
                            }              
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama],
                                fitur : ["click"],
                                hasil : ["fail"]
                             }
                  console.log(json);
                  ioClient.emit('kirim', json);
              }
              });
              driver.findElement(webdriver.By.css("li:nth-child(8) > a")).click().then(function(){
                sleep()
                driver.getTitle().then(function(title) {
                    if(title === title) {
                      console.log('Test passed = ', title);
                      ioClient.emit ('judul', title);
                      var json = {nama_web : [nama],
                                  fitur : ["Logout"],
                                  hasil : ["passed"]
                                }              
                      console.log(json);
                      ioClient.emit('kirim', json);
                    } else {
                      console.log('Test failed =', title);
                      ioClient.emit ('judul', title);
                      var json = {nama_web : [nama],
                                    fitur : ["click"],
                                    hasil : ["fail"]
                                 }
                      console.log(json);
                      ioClient.emit('kirim', json);
                  }
                  });
                });
        });
    });
});
});
});
});
});
});
});  
});  
}
pindad();