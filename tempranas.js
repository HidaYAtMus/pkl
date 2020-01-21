const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://dev.tempramas.divmu.pindad.co.id/home').then(function(){
    driver.findElement(webdriver.By.linkText("9")).click().then(function(){
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
                        ioClient.emit('tempramas', json);
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
            // driver.findElement(webdriver.By.linkText("5.56")).click().then(function(){
            //   function sleep(){
            //     driver.sleep(2000).then(function() {
            //         driver.getTitle().then(function(title) {
            //           if(title === title) {
            //             console.log('Test passed = ', title);
            //             ioClient.emit ('judul', title);
            //             var json = {nama_web : [title],
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
           
});    
}
pindad();


// driver.sleep(20000)
//             driver.findElement(webdriver.By.linkText("7.62")).click()
//             driver.sleep(20000)
//             driver.findElement(webdriver.By.linkText("12.7")).click()
//             driver.sleep(20000)
//             driver.findElement(webdriver.By.linkText("Data History")).click()