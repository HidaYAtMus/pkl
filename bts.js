const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://autotest.divmu.pindad.co.id/");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://bts.divmu.pindad.co.id/');
    driver.findElement(webdriver.By.linkText("Register")).click().then(function(){
        driver.findElement(webdriver.By.name("username")).sendKeys("testing");
        driver.findElement(webdriver.By.name("password")).sendKeys("testing");
        driver.findElement(webdriver.By.name("nama")).sendKeys("testing");
        driver.findElement(webdriver.By.name("nik")).sendKeys("3456");
        driver.findElement(webdriver.By.name("tgl_lahir")).click("label=17");
        driver.findElement(webdriver.By.name("bln_lahir")).click("label=Okt");
        driver.findElement(webdriver.By.name("thn_lahir")).click("label=1989");
        driver.findElement(webdriver.By.name("jenis_kelamin")).click();
        driver.findElement(webdriver.By.name("pekerjaan")).sendKeys("mahasiswa");
        driver.findElement(webdriver.By.name("alamat")).sendKeys("smw");
        driver.findElement(webdriver.By.name("email")).sendKeys("g@gmail.com");
        driver.findElement(webdriver.By.name("no_hp")).sendKeys("08729279"),
        driver.findElement(webdriver.By.name("reset")).click().then(function(){
                  driver.getTitle().then(function(title) {
                    if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : ["http://bts.divmu.pindad.co.id/"],
                                    fitur : ["LoginUser"],
                                    hasil : ["passed"]
                                   }

                         console.log(json);
                         ioClient.emit('kirim', json);
                         } else {
                          console.log('Test failed =', title);
                          ioClient.emit ('judul', title);
                          var json = {nama_web : ["http://bts.divmu.pindad.co.id/"],
                                      fitur : ["loginUser"],
                                      hasil : ["fail"]
                          }
                          console.log(json);
                          ioClient.emit('kirim', json);
                         }
                            // driver.quit();
        });
        driver.findElement(webdriver.By.name("username")).sendKeys("testing");
        driver.findElement(webdriver.By.name("password")).sendKeys("testing");
        driver.findElement(webdriver.By.name("nama")).sendKeys("testing");
        driver.findElement(webdriver.By.name("nik")).sendKeys("3456");
        driver.findElement(webdriver.By.name("tgl_lahir")).click("label=17");
        driver.findElement(webdriver.By.name("bln_lahir")).click("label=Okt");
        driver.findElement(webdriver.By.name("thn_lahir")).click("label=1989");
        driver.findElement(webdriver.By.name("jenis_kelamin")).click();
        driver.findElement(webdriver.By.name("pekerjaan")).sendKeys("mahasiswa");
        driver.findElement(webdriver.By.name("alamat")).sendKeys("smw");
        driver.findElement(webdriver.By.name("email")).sendKeys("g@gmail.com");
        driver.findElement(webdriver.By.name("no_hp")).sendKeys("08729279"),
        driver.findElement(webdriver.By.name("Submit")).click().then(function(){
                  driver.getTitle().then(function(title) {
                    if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : ["http://bts.divmu.pindad.co.id/"],
                                    fitur : ["LoginUser"],
                                    hasil : ["passed"]
                                   }

                         console.log(json);
                         ioClient.emit('kirim', json);
                         } else {
                          console.log('Test failed =', title);
                          ioClient.emit ('judul', title);
                          var json = {nama_web : ["http://bts.divmu.pindad.co.id/"],
                                      fitur : ["loginUser"],
                                      hasil : ["fail"]
                          }
                          console.log(json);
                          ioClient.emit('kirim', json);
                         }
                            // driver.quit();
        });

        driver.findElement(webdriver.By.linkText("Login")).click().then(function(){
            driver.findElement(webdriver.By.name("username")).sendKeys("19216819700020");
            driver.findElement(webdriver.By.name("password")).sendKeys("rizky");
            driver.findElement(webdriver.By.css("input:nth-child(6)")).click().then(function(){
                
            driver.getTitle().then(function(title) {
                if(title === title) {
                    console.log('Test passed = ', title);
                    ioClient.emit ('judul', title);
                    var json = {nama_web : ["http://bts.divmu.pindad.co.id/"],
                                fitur : ["LoginUser"],
                                hasil : ["passed"]
                               }

                     console.log(json);
                     ioClient.emit('kirim', json);
                     } else {
                      console.log('Test failed =', title);
                      ioClient.emit ('judul', title);
                      var json = {nama_web : ["http://bts.divmu.pindad.co.id/"],
                                  fitur : ["loginUser"],
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
}
pindad();