const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");
let url = ('https://pindad.com/');

// ioClient.emit('pesan', function(msg){
    // socket.emit ('judul').append(text(title));
// });

function pindad(){
    let driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://pindad.com/').then(function(){
    driver.findElement(webdriver.By.css(".top-menu:nth-child(1) > .submeny-top")).click().then(function(){
            driver.findElement(webdriver.By.css(".submeny:nth-child(1) > .submeny-top > .fa")).click()
            driver.findElement(webdriver.By.css(".submeny:nth-child(1) > .sub-menu > .scroll-to-link:nth-child(1) > a")).click()
            function sleep(){
                driver.sleep(100).then(function() {
                    driver.getTitle().then(function(title) {
                      if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        let json = {nama_web : [title],
                          fitur : ["click_searchtxtbox"],
                                    hasil : ["passed"]
                                  }
                        
                        console.log(json);
                        ioClient.emit('kirim', json);
                      } else {
                        console.log('Test failed =', title);
                        ioClient.emit ('judul', 'gagal');
                        let json = {nama_web : [title],
                          fitur : ["click_searchtxtbox"],
                                    hasil : ["fail"]
                                  }
                        
                        console.log(json);
                        ioClient.emit('kirim', json);
                    }
                    });
                  });
                }
                sleep();
    });

    driver.findElement(webdriver.By.css(".top-menu:nth-child(1) > .submeny-top")).click().then(function(){
      driver.findElement(webdriver.By.css(".submeny:nth-child(1) > .submeny-top > .fa")).click()
      driver.findElement(webdriver.By.css(".submeny:nth-child(1) > .sub-menu > .scroll-to-link:nth-child(2) > a")).click()
      function sleep(){
          driver.sleep(100).then(function() {
              driver.getTitle().then(function(title) {
                if(title === title) {
                  console.log('Test passed = ', title);
                  ioClient.emit ('judul', title);
                  let json = {nama_web : [title],
                    fitur : ["click_searchtxtbox"],
                              hasil : ["passed"]
                            }
                  
                  console.log(json);
                  ioClient.emit('kirim', json);
                } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', 'gagal');
                  let json = {nama_web : [title],
                    fitur : ["click_searchtxtbox"],
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