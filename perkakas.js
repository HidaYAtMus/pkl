const webdriver = require('selenium-webdriver'), 
io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000");

function pindad(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://perkakas.divmu.pindad.co.id/').then(function(){
    driver.findElement(webdriver.By.linkText("MUNISI RINGAN")).click().then(function(){

      driver.findElement(webdriver.By.linkText("Kaliber 9 mm")).click(),
      driver.findElement(webdriver.By.linkText("MU1-TJ")).click(),
      driver.findElement(webdriver.By.linkText("Perkakas Susun Munisi")).click();
      function sleep(){
        driver.sleep(2000).then(function() {
          driver.getTitle().then(function(title) {
            if(title === title) {
                console.log('Test passed = ', title);
                ioClient.emit ('judul', title);
                var json = {nama_web : [title],
                            fitur : ["click_perkakas_susun"],
                            hasil : ["passed"]
                           }
                        
                 console.log(json);
                 ioClient.emit('kirim', json);
                 } else { 
                  console.log('Test failed =', title);
                  ioClient.emit ('judul', title);
                  var json = {nama_web : [title],
                              fitur : ["click_perkakas_susun"],
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
    // driver.findElement(webdriver.By.linkText("MU1-TJ")).click().then(function(){
    //   function sleep(){
    //     driver.sleep(2000).then(function() {
    //       driver.getTitle().then(function(title) {
    //         if(title === title) {
    //             console.log('Test passed = ', title);
    //             // ioClient.emit ('vid', title);
    //             var json = {nama_web : [title],
    //                         fitur : ["input_music"],
    //                         hasil : ["passed"]
    //                        }
                        
    //              console.log(json);
    //              ioClient.emit('kirim', json);
    //              } else {
    //               console.log('Test failed =', title);
    //               ioClient.emit ('judul', title);
    //               var json = {nama_web : [title],
    //                           fitur : ["input_music"],
    //                           hasil : ["fail"]
    //               }
    //               console.log(json);
    //               ioClient.emit('kirim', json);
    //              }
    //                 driver.quit();
    //              });
    //         });
    //       }
    //         sleep();
    // });
    // driver.findElement(webdriver.By.linkText("Perkakas Susun Munisi")).click().then(function(){
    //   function sleep(){
    //     driver.sleep(2000).then(function() {
    //       driver.getTitle().then(function(title) {
    //         if(title === 'ok') {
    //             console.log('Test passed = ', title);
    //             // ioClient.emit ('vid', title);
    //             var json = {nama_web : [title],
    //                         fitur : ["click_searchbtn"],
    //                         hasil : ["passed"]
    //                        }
                        
    //              console.log(json);
    //              ioClient.emit('kirim', json);
    //              } else {
    //               console.log('Test failed =', title);
    //               ioClient.emit ('judul', title);
    //               var json = {nama_web : [title],
    //                           fitur : ["click_searchbtn"],
    //                           hasil : ["fail"]
    //               }
    //               console.log(json);
    //               ioClient.emit('kirim', json);
    //              }
    //                 driver.quit();
    //              });
    //         });
    //       }
    //         sleep();
    // });
});    
}
pindad();