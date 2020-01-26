const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");
let nama_web = ('http://dev.tempramas.divmu.pindad.co.id/home');

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://dev.tempramas.divmu.pindad.co.id/home').then(function(){
    driver.findElement(webdriver.By.linkText("5.56")).click().then(function(){
      function sleep(){
        driver.sleep(2000).then(function() {
          driver.getTitle().then(function(title) {
            if(title === title) {
                console.log('Test passed = ', title);
                ioClient.emit ('judul', title);
                var json = {nama_web : [nama_web],
                            fitur : ["click_5.56"],
                            hasil : ["passed"]
                           }
                        
                 console.log(json);
                 ioClient.emit('kirim', json);
                 } else { 
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama_web],
                              fitur : ["click_5.56"],
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
    driver.findElement(webdriver.By.id("12.7")).click().then(function(){
      function sleep(){
        driver.sleep(2000).then(function() {
          driver.getTitle().then(function(title) {
            if(title === 'ok') {
                console.log('Test passed = ', title);
                var json = {nama_web : [nama_web],
                            fitur : ["click_12.7"],
                            hasil : ["passed"]
                           }
                        
                 console.log(json);
                 ioClient.emit('kirim', json);
                 } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama_web],
                              fitur : ["click_12.7"],
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
    driver.findElement(webdriver.By.id("7.62")).click().then(function(){
      function sleep(){
        driver.sleep(2000).then(function() {
          driver.getTitle().then(function(title) {
            if(title === title) {
                console.log('Test passed = ', title);
                var json = {nama_web : [nama_web],
                            fitur : ["click_7.62"],
                            hasil : ["passed"]
                           }
                        
                 console.log(json);
                 ioClient.emit('kirim', json);
                 } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama_web],
                              fitur : ["click_7.62"],
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
    driver.findElement(webdriver.By.id("Data History")).click().then(function(){
      function sleep(){
        driver.sleep(2000).then(function() {
          driver.getTitle().then(function(title) {
            if(title === title) {
                console.log('Test passed = ', title);
                var json = {nama_web : [nama_web],
                            fitur : ["click_DataHistory"],
                            hasil : ["passed"]
                           }
                        
                 console.log(json);
                 ioClient.emit('kirim', json);
                 } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama_web],
                              fitur : ["click_DataHistory"],
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
    driver.findElement(webdriver.By.id("Admin")).click().then(function(){
      function sleep(){
        driver.sleep(2000).then(function() {
          driver.getTitle().then(function(title) {
            if(title === title) {
                console.log('Test passed = ', title);
                var json = {nama_web : [nama_web],
                            fitur : ["click_Admin"],
                            hasil : ["passed"]
                           }
                        
                 console.log(json);
                 ioClient.emit('kirim', json);
                 } else {
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [nama_web],
                              fitur : ["click_Admin"],
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
});    
}
pindad();

// driver.findElement(webdriver.By.id("searchtxtbox")).sendKeys("music")
//             driver.findElement(webdriver.By.id("search_btn")).click()
//             driver.findElement(webdriver.By.css(".clsvideos:nth-child(4) > li:nth-child(4) .tipimage")).click()