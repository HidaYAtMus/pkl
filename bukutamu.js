const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://autotest.divmu.pindad.co.id/");

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
        driver.findElement(webdriver.By.id("username")).sendKeys("mus").then(function(){
            driver.findElement(webdriver.By. id("nama")).sendKeys("mus")
            driver.findElement(webdriver.By.id("password")).sendKeys("mus123").then(function(){
                driver.findElement(webdriver.By.name("level")).click()
                {
                  dropdown = driver.findElement(webdriver.By.name("level"))
                  dropdown.findElement(webdriver.By.xpath("//option[. = 'Penerima Tamu']")).click()
                }
                driver.findElement(webdriver.By.xpath("//input[@name='btnSubmit']")).click().then(function(){
                    driver.getTitle().then(function(title) {
                        if(title === title) {
                            console.log('Test passed = ', title);
                            ioClient.emit ('judul', title);
                            var json = {nama_web : ["http://bukutamu-dev.divmu.pindad.co.id/"],
                                        fitur : ["add_user"],
                                        hasil : ["passed"]
                                       }
                                    
                             console.log(json);
                             ioClient.emit('kirim', json);
                             } else {
                              console.log('Test failed =', title);
                              ioClient.emit ('judul', title);
                              var json = {nama_web : ["http://bukutamu-dev.divmu.pindad.co.id/"],
                                          fitur : ["add_user"],
                                          hasil : ["fail"]
                              }
                              console.log(json);
                              ioClient.emit('kirim', json);
                             }
                });
                driver.findElement(webdriver.By.linkText("Logout")).click().then(function(){
                    driver.getTitle().then(function(title) {
                        if(title === title) {
                            console.log('Test passed = ', title);
                            ioClient.emit ('judul', title);
                            var json = {nama_web : ["http://bukutamu-dev.divmu.pindad.co.id/"],
                                        fitur : ["logout"],
                                        hasil : ["passed"]
                                       }
                                    
                             console.log(json);
                             ioClient.emit('kirim', json);
                             } else {
                              console.log('Test failed =', title);
                              ioClient.emit ('judul', title);
                              var json = {nama_web : ["http://bukutamu-dev.divmu.pindad.co.id/"],
                                          fitur : ["logout"],
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
}
pindad();


        

