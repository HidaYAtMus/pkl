const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://video.divmu.pindad.co.id/').then(function(){
    driver.findElement(webdriver.By.id("searchtxtbox")).click().then(function(){
      function sleep(){
        driver.sleep(2000).then(function() {
          driver.getTitle().then(function(title) {
            if(title === title) {
                console.log('Test passed = ', title);
                ioClient.emit ('judul', title);
                var json = {nama_web : ["click searchbox"],
                            hasil : ["passed"]
                           }
                        
                 console.log(json);
                 ioClient.emit('vid', json);
                 } else {
                    console.log('Test failed =', title);
                    ioClient.emit ('vid', 'gagal');
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
                var json = {nama_web : ["input music"],
                            hasil : ["passed"]
                           }
                        
                 console.log(json);
                 ioClient.emit('vid', json);
                 } else {
                    console.log('Test failed =', title);
                    ioClient.emit ('vid', 'gagal');
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
                var json = {nama_web : ["click search_btn"],
                            hasil : ["passed"]
                           }
                        
                 console.log(json);
                 ioClient.emit('vid', json);
                 } else {
                    console.log('Test failed =', title);
                    ioClient.emit ('vid', 'gagal');
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

// driver.findElement(webdriver.By.id("searchtxtbox")).sendKeys("music")
//             driver.findElement(webdriver.By.id("search_btn")).click()
//             driver.findElement(webdriver.By.css(".clsvideos:nth-child(4) > li:nth-child(4) .tipimage")).click()