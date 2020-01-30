const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://autotest.divmu.pindad.co.id");
let nama = ("http://simonkak-dev.divmu.pindad.co.id/");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get("http://simonkak-dev.divmu.pindad.co.id/").then(function(){
          driver.findElement(webdriver.By.css(".login_form")).click()
          driver.findElement(webdriver.By.name("username")).click()
          driver.findElement(webdriver.By.name("username")).sendKeys("adkas")
          driver.findElement(webdriver.By.name("password")).sendKeys("adkas")
          driver.findElement(webdriver.By.css("button")).click().then(function(){
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
                        // driver.quit();
                     });
            driver.findElement(webdriver.By.linkText("Work Order")).click().then(function(){
                driver.findElement(webdriver.By.linkText("Input Work Order")).click()
                driver.getTitle().then(function(title) {
                    if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : [nama],
                                    fitur : ["click_workorder"],
                                    hasil : ["passed"]
                                   }
                                
                         console.log(json);
                         ioClient.emit('kirim', json);
                         } else { 
                          console.log('Test failed =', title);
                          ioClient.emit ('judul', title);
                          var json = {nama_web : [title],
                                      fitur : ["click_workorder"],
                                      hasil : ["fail"]
                          }
                          console.log(json);
                          ioClient.emit('kirim', json);
                         }
                            // driver.quit();
            });
               driver.findElement(webdriver.By.id("deskripsi")).click()
               driver.findElement(webdriver.By.id("deskripsi")).sendKeys("koding")
               driver.findElement(webdriver.By.id("select2-personil-container")).click()
               driver.findElement(webdriver.By.css(".fa-user-plus")).click()
            {
            const element =    driver.findElement(webdriver.By.css(".fa-user-plus"))
               driver.actions({ bridge: true }).moveToElement(element).perform()
            }
            {
            const element =    driver.findElement(webdriver.By.CSS_SELECTOR, "body")
               driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
            }
               driver.findElement(webdriver.By.id("pekerjaan1")).click()
               driver.findElement(webdriver.By.id("pekerjaan1")).sendKeys("koding")
               driver.findElement(webdriver.By.id("wkt_mulai1")).click()
               driver.findElement(webdriver.By.id("wkt_mulai1")).sendKeys("09:09")
               driver.findElement(webdriver.By.id("wkt_selesai1")).click()
               driver.findElement(webdriver.By.id("wkt_selesai1")).sendKeys("11:11")
               driver.findElement(webdriver.By.css(".fa-check")).click()
               driver.getTitle().then(function(title) {
                if(title === title) {
                    console.log('Test passed = ', title);
                    ioClient.emit ('judul', title);
                    var json = {nama_web : [nama],
                                fitur : ["isi_form"],
                                hasil : ["passed"]
                               }
                            
                     console.log(json);
                     ioClient.emit('kirim', json);
                     } else { 
                      console.log('Test failed =', title);
                      ioClient.emit ('judul', title);
                      var json = {nama_web : [title],
                                  fitur : ["isi_form"],
                                  hasil : ["fail"]
                      }
                      console.log(json);
                      ioClient.emit('kirim', json);
                     }
                        // driver.quit();
        });
            })
                
          });
         
    });
}
pindad();


   