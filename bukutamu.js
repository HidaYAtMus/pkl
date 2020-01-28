const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://bukutamu-dev.divmu.pindad.co.id/');
    driver.findElement(webdriver.By.id("username")).sendKeys("admin").then(function(){
        driver.findElement(webdriver.By.id("password")).sendKeys("admin123")
        
        driver.findElement(webdriver.By.css(".btn")).click().then(function(){
                  driver.getTitle().then(function(title) {
                    if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : ["http://bukutamu-dev.divmu.pindad.co.id/"],
                                    fitur : ["Login"],
                                    hasil : ["passed"]
                                   }
                                
                         console.log(json);
                         ioClient.emit('kirim', json);
                         } else {
                          console.log('Test failed =', title);
                          ioClient.emit ('judul', title);
                          var json = {nama_web : ["http://bukutamu-dev.divmu.pindad.co.id/"],
                                      fitur : ["login"],
                                      hasil : ["fail"]
                          }
                          console.log(json);
                          ioClient.emit('kirim', json);
                         }
                            // driver.quit();
        });
        driver.findElement(webdriver.By.linkText("Tambah User")).click().then(function(){
            driver.getTitle().then(function(title) {
                if(title === title) {
                    console.log('Test passed = ', title);
                    ioClient.emit ('judul', title);
                    var json = {nama_web : ["http://bukutamu-dev.divmu.pindad.co.id/"],
                                fitur : ["tambah_user"],
                                hasil : ["passed"]
                               }
                            
                     console.log(json);
                     ioClient.emit('kirim', json);
                     } else {
                      console.log('Test failed =', title);
                      ioClient.emit ('judul', title);
                      var json = {nama_web : ["http://bukutamu-dev.divmu.pindad.co.id/"],
                                  fitur : ["tambah_user"],
                                  hasil : ["fail"]
                      }
                      console.log(json);
                      ioClient.emit('kirim', json);
                     }
        });
        driver.findElement(webdriver.By.css(".nav-item:nth-child(3) p")).click().then(function(){
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
        driver.findElement(webdriver.By.id("userDropdown")).click().then(function(){
            driver.findElement(webdriver.By.css(".fa-sign-out-alt")).click().then(function(){
            driver.findElement(webdriver.By.xpath("//a[contains(text(),'Logout')]")).click();
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
            // driver.quit();   
        });
        });
        });   
        }); 
        
    });  
}
pindad();


        

