const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://simpro.divmu.pindad.co.id/');
    driver.findElement(webdriver.By.id("uname")).sendKeys("testing").then(function(){
        driver.findElement(webdriver.By.id("pass")).sendKeys("testing")
        
        driver.findElement(webdriver.By.css(".btn")).click().then(function(){
            function sleep(){
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
                 
            }sleep(); 
                
        driver.findElement(webdriver.By.css(".nav-item:nth-child(2) p")).click().then(function(){
            function sleep(){
            driver.sleep(2000).then(function() {
            driver.getTitle().then(function(title) {
                if(title === title) {
                    console.log('Test passed = ', title);
                    ioClient.emit ('judul', title);
                    var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                fitur : ["laporan"],
                                hasil : ["passed"]
                               }
                            
                     console.log(json);
                     ioClient.emit('kirim', json);
                     } else {
                      console.log('Test failed =', title);
                      ioClient.emit ('judul', title);
                      var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                  fitur : ["laporan"],
                                  hasil : ["fail"]
                      }
                      console.log(json);
                      ioClient.emit('kirim', json);
                     }
        });
        });              
        }sleep(); 
        driver.findElement(webdriver.By.css(".nav-item:nth-child(3) p")).click().then(function(){
            function sleep(){
            driver.sleep(2000).then(function() {
            driver.getTitle().then(function(title) {
                if(title === title) {
                    console.log('Test passed = ', title);
                    ioClient.emit ('judul', title);
                    var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                fitur : ["mesin"],
                                hasil : ["passed"]
                               }
                            
                     console.log(json);
                     ioClient.emit('kirim', json);
                     } else {
                      console.log('Test failed =', title);
                      ioClient.emit ('judul', title);
                      var json = {nama_web : ["http://simpro.divmu.pindad.co.id/"],
                                  fitur : ["mesin"],
                                  hasil : ["fail"]
                      }
                      console.log(json);
                      ioClient.emit('kirim', json);
                     }
            });          
        });
        
        }sleep(); 
        driver.findElement(webdriver.By.id("userDropdown")).click().then(function(){
            driver.findElement(webdriver.By.css(".fa-sign-out-alt")).click().then(function(){
            driver.findElement(webdriver.By.xpath("//a[contains(text(),'Logout')]")).click();
            function sleep(){
                driver.sleep(2000).then(function() {
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
        });
        });
        }sleep();    
        });
        });
    });
        });
        });   
        
    });  
}
pindad();


        

    