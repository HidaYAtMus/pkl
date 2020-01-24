const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");
let url = ('http://dev.tempramas.divmu.pindad.co.id/');
function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://dev.tempramas.divmu.pindad.co.id/').then(function(){
    driver.findElement(webdriver.By.linkText("9")).click().then(function(){
            function sleep(){
                driver.sleep(2000).then(function() {
                    driver.getTitle().then(function(title) {
                      if(title === title) {
                        console.log('Test passed = ', title);
                        ioClient.emit ('judul', title);
                        let json = {nama_web : [url],
                                    fitur : ["click_9"],
                                    hasil : ["passed"]
                                  }
                        
                        console.log(json);
                        ioClient.emit('kirim', json);
                      } else {
                        console.log('Test failed =', title);
                        ioClient.emit ('judul', 'gagal');
                        let json = {nama_web : [url],
                          fitur : ["click_9"],
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
            // driver.findElement(webdriver.By.linkText("5.56")).click().then(function(){
            //   function sleep(){
            //     driver.sleep(2000).then(function() {
            //         driver.getTitle().then(function(title) {
            //           if(title === title) {
            //             console.log('Test passed = ', title);
            //             ioClient.emit ('judul', title);
            //             var json = {nama_web : [title],
            //                         fitur :["click_5.56"],
            //                         hasil : ["passed"]
            //                       }
                        
            //             console.log(json);
            //             ioClient.emit('kirim', json);
            //           } else {
            //             console.log('Test failed =', title);
            //             ioClient.emit ('judul', 'gagal');
            //         }
            //           // driver.quit();
            //         });
            //       });
            //     }
            //     sleep();
            // });
            
            // driver.findElement(webdriver.By.linkText("7.62")).click().then(function(){
            //   function sleep(){
            //     driver.sleep(2000).then(function() {
            //         driver.getTitle().then(function(title) {
            //           if(title === title) {
            //             console.log('Test passed = ', title);
            //             ioClient.emit ('judul', title);
            //             var json = {nama_web : [title],
            //                         fitur   :["click_7.62"],
            //                         hasil : ["passed"]
            //                       }
                        
            //             console.log(json);
            //             ioClient.emit('kirim', json);
            //           } else {
            //             console.log('Test failed =', title);
            //             ioClient.emit ('judul', 'gagal');
            //         }
            //           driver.quit();
            //         });
            //       });
            //     }
            //     sleep();
            // });
           
});    
}
pindad();


// driver.sleep(20000)
//             driver.findElement(webdriver.By.linkText("7.62")).click()
//             driver.sleep(20000)
//             driver.findElement(webdriver.By.linkText("12.7")).click()
//             driver.sleep(20000)
//             driver.findElement(webdriver.By.linkText("Data History")).click()