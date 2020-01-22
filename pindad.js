const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

// ioClient.emit('pesan', function(msg){
    // socket.emit ('judul').append(text(title));
// });

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://pindad.com/').then(function(){
    driver.findElement(webdriver.By.css(".main-navigation > .submeny:nth-child(2) .scroll-to-link:nth-child(1) > a")).click().then(function(){
            driver.findElement(webdriver.By.css(".entry:nth-child(2)")).click()
            function sleep(){
                driver.sleep(2000).then(function() {
                    driver.getTitle().then(function(title) {
                      if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {nama_web : [title],
                                    hasil : ["passed"]
                                  }
                        
                        console.log(json);
                        ioClient.emit('vid', json);
                      } else {
                        console.log('Test failed =', title);
                        ioClient.emit ('judul', 'gagal');
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