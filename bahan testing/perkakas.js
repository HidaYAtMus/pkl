// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Untitled', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Untitled', async function() {
    await driver.get("http://perkakas.divmu.pindad.co.id/index.php")
    await driver.manage().window().setRect(1050, 708)
    await driver.findElement(By.css("li:nth-child(2) strong")).click()
    await driver.findElement(By.linkText("Kaliber 9 mm")).click()
    await driver.findElement(By.linkText("MU1-TJ")).click()
    await driver.findElement(By.linkText("Perkakas Susun Munisi")).click()
    await driver.findElement(By.css("li:nth-child(3) strong")).click()
    await driver.findElement(By.linkText("PYROTEKNIK")).click()
    await driver.findElement(By.linkText("Penggalak")).click()
    {
      const element = await driver.findElement(By.linkText("Penggalak 113 (7,62 mm)"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.linkText("Penggalak 113 (7,62 mm)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.linkText("Penggalak 113 (7,62 mm)"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.linkText("Penggalak 113 (7,62 mm)")).click()
    await driver.findElement(By.linkText("Perkakas Cemuk")).click()
    {
      const element = await driver.findElement(By.css("li:nth-child(5) strong"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css("li:nth-child(5) strong"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.css("li:nth-child(5) strong"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css("li:nth-child(5) strong")).click()
    {
      const element = await driver.findElement(By.linkText("Berdasarkan Kaliber"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.linkText("Berdasarkan Kaliber"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.linkText("Berdasarkan Kaliber"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.linkText("Berdasarkan Kaliber")).click()
    {
      const element = await driver.findElement(By.linkText("Kaliber 5,56 mm"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.linkText("Kaliber 5,56 mm"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.linkText("Kaliber 5,56 mm"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.linkText("Kaliber 5,56 mm")).click()
    await driver.findElement(By.css("li:nth-child(6) strong")).click()
    await driver.findElement(By.css("html")).click()
  })
})