const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://perkakas.divmu.pindad.co.id/').then(function(){
    driver.findElement(webdriver.By.css("li:nth-child(2) strong")).click().then(function(){
            function sleep(){
                driver.sleep(10).then(function() {
                    driver.getTitle().then(function(title) {
                      if(title === 'ok') {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : [title],
                                    fitur : ["click 9"],
                                    hasil : ["passed"]
                                  }
                        
                        console.log(json);
                        ioClient.emit('kirim', json);
                      } else {
                        console.log('Test failed =', title);
                        ioClient.emit ('judul', 'gagal');
                        var json = {nama_web : [title],
                          fitur : ["click 9"],
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
     
    
    driver.findElement(webdriver.By.linkText("Kaliber 9 mm")).click().then(function(){
              function sleep(){
                driver.sleep(10).then(function() {
                    driver.getTitle().then(function(title) {
                      if(title === 'ok') {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : [title],
                                    fitur :["click 5.56"],
                                    hasil : ["fail"]
                                  }
                        
                        console.log(json);
                        ioClient.emit('kirim', json);
                      } else {
                        console.log('Test failed =', title);
                        ioClient.emit ('judul', 'gagal');
                        var json = {nama_web : [title],
                          fitur : ["click 9"],
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
            
            driver.findElement(webdriver.By.linkText("MU1-TJ")).click().then(function(){
              function sleep(){
                driver.sleep(10).then(function() {
                    driver.getTitle().then(function(title) {
                      if(title === 'ok') {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : [title],
                                    fitur   :["click 7.62"],
                                    hasil : ["passed"]
                                  }
                        
                        console.log(json);
                        ioClient.emit('kirim', json);
                      } else {
                        console.log('Test failed =', title);
                        ioClient.emit ('judul', 'gagal');
                        var json = {nama_web : [title],
                          fitur : ["click 9"],
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
           
            driver.findElement(webdriver.By.linkText("Perkakas Susun Munisi")).click().then(function(){
                function sleep(){
                  driver.sleep(10).then(function() {
                      driver.getTitle().then(function(title) {
                        if(title === 'ok') {
                          console.log('Test passed = ', title);
                          ioClient.emit ('judul', title);
                          var json = {nama_web : [title],
                                      fitur   :["click 7.62"],
                                      hasil : ["passed"]
                                    }
                          
                          console.log(json);
                          ioClient.emit('kirim', json);
                        } else {
                          console.log('Test failed =', title);
                          ioClient.emit ('judul', 'gagal');
                          var json = {nama_web : [title],
                            fitur : ["click 9"],
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
}
pindad();

