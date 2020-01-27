const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://video.divmu.pindad.co.id/').then(function(){
      driver.findElement(webdriver.By.name("loginbtn")).click().then(function(){
        function sleep(){
          driver.sleep(2000).then(function() {
            driver.getTitle().then(function(title) {
              if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [title],
                              fitur : ["click_searchtxtbox"],
                              hasil : ["passed"]
                             }
                          
                   console.log(json);
                   ioClient.emit('kirim', json);
                   } else { 
                    console.log('Test failed =', title);
                    ioClient.emit ('judul', title);
                    var json = {nama_web : [title],
                                fitur : ["click_searchtxtbox"],
                                hasil : ["fail"]
                    }
                    console.log(json);
                    ioClient.emit('kirim', json);
                   }
                      // driver.quit();
                   });
              });
            }
            driver.findElement(webdriver.By.name("signupbtn")).click().then(function(){
              driver.findElement(webdriver.By.id("jform_name")).sendKeys("deby")
              driver.findElement(webdriver.By.css("#jform_username")).sendKeys("sintong")
              driver.findElement(webdriver.By.id("jform_password1")).sendKeys("123qwerty")
              driver.findElement(webdriver.By.css("#jform_password2")).sendKeys("123qwerty")
              driver.findElement(webdriver.By.id("jform_email1")).sendKeys("debyprast@gmail.com")
              driver.findElement(webdriver.By.css("#jform_email2")).sendKeys("debyprast@gmail.com")
              driver.findElement(webdriver.By.css(".validate")).click()
              function sleep(){
                driver.sleep(2000).then(function() {
                  driver.getTitle().then(function(title) {
                    if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : [title],
                                    fitur : ["click_searchtxtbox"],
                                    hasil : ["passed"]
                                   }
                                
                         console.log(json);
                         ioClient.emit('kirim', json);
                         } else { 
                          console.log('Test failed =', title);
                          ioClient.emit ('judul', title);
                          var json = {nama_web : [title],
                                      fitur : ["click_searchtxtbox"],
                                      hasil : ["fail"]
                          }
                          console.log(json);
                          ioClient.emit('kirim', json);
                         }
                            // driver.quit();
                         });
                    });
                  }
            
                  driver.findElement(webdriver.By.id("searchtxtbox")).click().then(function(){
                    function sleep(){
                      driver.sleep(2000).then(function() {
                        driver.getTitle().then(function(title) {
                          if(title === title) {
                              console.log('Test passed = ', title);
                              ioClient.emit ('judul', title);
                              var json = {nama_web : [title],
                                          fitur : ["click_searchtxtbox"],
                                          hasil : ["passed"]
                                         }
                                      
                               console.log(json);
                               ioClient.emit('kirim', json);
                               } else { 
                                console.log('Test failed =', title);
                                ioClient.emit ('judul', title);
                                var json = {nama_web : [title],
                                            fitur : ["click_searchtxtbox"],
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
                  driver.findElement(webdriver.By.id("searchtxtbox")).sendKeys("music").then(function(){
                    function sleep(){
                      driver.sleep(2000).then(function() {
                        driver.getTitle().then(function(title) {
                          if(title === title) {
                              console.log('Test passed = ', title);
                              // ioClient.emit ('vid', title);
                              var json = {nama_web : [title],
                                          fitur : ["input_music"],
                                          hasil : ["passed"]
                                         }
                                      
                               console.log(json);
                               ioClient.emit('kirim', json);
                               } else {
                                console.log('Test failed =', title);
                                ioClient.emit ('judul', title);
                                var json = {nama_web : [title],
                                            fitur : ["input_music"],
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
                  driver.findElement(webdriver.By.id("search_btn")).click().then(function(){
                    function sleep(){
                      driver.sleep(2000).then(function() {
                        driver.getTitle().then(function(title) {
                          if(title === title) {
                              console.log('Test passed = ', title);
                              // ioClient.emit ('vid', title);
                              var json = {nama_web : [title],
                                          fitur : ["click_searchbtn"],
                                          hasil : ["passed"]
                                         }
                                      
                               console.log(json);
                               ioClient.emit('kirim', json);
                               } else {
                                console.log('Test failed =', title);
                                ioClient.emit ('judul', title);
                                var json = {nama_web : [title],
                                            fitur : ["click_searchbtn"],
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
                });

      });

      
});    
}
pindad();

// driver.findElement(webdriver.By.id("searchtxtbox")).sendKeys("music")
//             driver.findElement(webdriver.By.id("search_btn")).click()
//             driver.findElement(webdriver.By.css(".clsvideos:nth-child(4) > li:nth-child(4) .tipimage")).click()