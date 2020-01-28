const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://simpro.divmu.pindad.co.id/').then(function(){
    driver.findElement(webdriver.By.id("uname")).sendKeys("testing").then(function(){
        driver.findElement(webdriver.By.id("pass")).sendKeys("testing")
        
        driver.findElement(webdriver.By.css(".btn")).click().then(function(){
                driver.sleep(2000).then(function() {
                  driver.getTitle().then(function(title) {
                    if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                    fitur : ["Login"],
                                    hasil : ["passed"]
                                   }
                                
                         console.log(json);
                         ioClient.emit('kirim', json);
                         } else {
                          console.log('Test failed =', title);
                          ioClient.emit ('judul', title);
                          var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                      fitur : ["login"],
                                      hasil : ["fail"]
                          }
                          console.log(json);
                          ioClient.emit('kirim', json);
                         }
                            // driver.quit();
                         });
                    });

            driver.findElement(webdriver.By.linkText("Detail")).click().then(function(){
                
                    driver.getTitle().then(function(title) {
                      if(title === title) {
                          console.log('Test passed = ', title);
                          ioClient.emit ('judul', title);
                          var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                      fitur : ["Mesin"],
                                      hasil : ["passed"]
                                     }
                                  
                           console.log(json);
                           ioClient.emit('kirim', json);
                           } else {
                            console.log('Test failed =', title);
                            ioClient.emit ('judul', title);
                            var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                        fitur : ["Mesin"],
                                        hasil : ["fail"]
                            }
                            console.log(json);
                            ioClient.emit('kirim', json);
                           }
                        });
                
                    driver.findElement(webdriver.By.linkText("Dashboard")).click().then(function(){
                        
                            driver.getTitle().then(function(title) {
                              if(title === title) {
                                  console.log('Test passed = ', title);
                                  ioClient.emit ('judul', title);
                                  var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                              fitur : ["Dashboard"],
                                              hasil : ["passed"]
                                             }
                                          
                                   console.log(json);
                                   ioClient.emit('kirim', json);
                                   } else {
                                    console.log('Test failed =', title);
                                    ioClient.emit ('judul', title);
                                    var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                                fitur : ["Mesin"],
                                                hasil : ["fail"]
                                    }
                                    console.log(json);
                                    ioClient.emit('kirim', json);
                                   }
                                   });
                             

                            driver.findElement(webdriver.By.css(".bg-warning > .small-box-footer")).click().then(function(){
                             
                                    driver.getTitle().then(function(title) {
                                      if(title === title) {
                                          console.log('Test passed = ', title);
                                          ioClient.emit ('judul', title);
                                          var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                                      fitur : ["Laporan"],
                                                      hasil : ["passed"]
                                                     }
                                                  
                                           console.log(json);
                                           ioClient.emit('kirim', json);
                                           } else {
                                            console.log('Test failed =', title);
                                            ioClient.emit ('judul', title);
                                            var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                                        fitur : ["Mesin"],
                                                        hasil : ["fail"]
                                            }
                                            console.log(json);
                                            ioClient.emit('kirim', json);
                                           }
                                           });
                                      });
                           
                                      driver.findElement(webdriver.By.css(".navbar-nav:nth-child(1) > .nav-item:nth-child(1) > .nav-link")).click().then(function(){
                             
                                        driver.getTitle().then(function(title) {
                                          if(title === title) {
                                              console.log('Test passed = ', title);
                                              ioClient.emit ('judul', title);
                                              var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                                          fitur : ["Slide"],
                                                          hasil : ["passed"]
                                                         }
                                                      
                                               console.log(json);
                                               ioClient.emit('kirim', json);
                                               } else {
                                                console.log('Test failed =', title);
                                                ioClient.emit ('judul', title);
                                                var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                                            fitur : ["Mesin"],
                                                            hasil : ["fail"]
                                                }
                                                console.log(json);
                                                ioClient.emit('kirim', json);
                                               }
                                               });
                                          });

                                          driver.findElement(webdriver.By.id("userDropdown")).click().then(function(){
                                            driver.findElement(webdriver.By.css(".fa-sign-out-alt")).click()
                                            driver.findElement(webdriver.By.xpath("//div[@id='logoutModal']/div/div/div[3]/a")).click()
                                            driver.getTitle().then(function(title) {
                                              if(title === title) {
                                                  console.log('Test passed = ', title);
                                                  ioClient.emit ('judul', title);
                                                  var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                                              fitur : ["Logout"],
                                                              hasil : ["passed"]
                                                             }
                                                          
                                                   console.log(json);
                                                   ioClient.emit('kirim', json);
                                                   } else {
                                                    console.log('Test failed =', title);
                                                    ioClient.emit ('judul', title);
                                                    var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                                                fitur : ["logout"],
                                                                hasil : ["fail"]
                                                    }
                                                    console.log(json);
                                                    ioClient.emit('kirim', json);
                                                   }
                                                      driver.quit();
                                                   });
                                            
                                                   
                                                });
                                               
                      });      
                      
              });   
             
        }); 
        
    });
});    
}
pindad();
