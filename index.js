const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

// ioClient.emit('pesan', function(msg){
    // socket.emit ('judul').append(text(title));

// });

function searchTextOnGoogle(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://www.google.com').then(function(){
    driver.findElement(webdriver.By.name('q')).sendKeys('Youtube\n').then(function(){
            driver.findElement(webdriver.By.css('div:nth-child(2) > .rc .LC20lb')).click()
            function sleep(){
                driver.sleep(2000).then(function() {
                    driver.getTitle().then(function(title) {
                      if(title === 'YouTube') {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        var json = {
                          "test" : "passsed",
                          "Name test" : title
                        }
                        console.log(json);
                        ioClient.emit('kirim', json);
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
searchTextOnGoogle();
