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
    await driver.get("http://bts.divmu.pindad.co.id/")
    await driver.manage().window().setRect(1050, 708)
    {
      const element = await driver.findElement(By.linkText("Home"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.linkText("Home"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.linkText("Home"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.linkText("Home")).click()
    await driver.findElement(By.css("li:nth-child(2) u")).click()
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("username")).sendKeys("deby")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("aaaaaa")
    {
      const element = await driver.findElement(By.name("nama"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.name("nama"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.name("nama"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.name("nama")).click()
    await driver.findElement(By.name("nama")).sendKeys("deby")
    await driver.findElement(By.name("nik")).click()
    await driver.findElement(By.name("nik")).sendKeys("09876")
    await driver.findElement(By.name("tgl_lahir")).click()
    {
      const dropdown = await driver.findElement(By.name("tgl_lahir"))
      await dropdown.findElement(By.xpath("//option[. = '16']")).click()
    }
    await driver.findElement(By.name("tgl_lahir")).click()
    await driver.findElement(By.name("bln_lahir")).click()
    {
      const dropdown = await driver.findElement(By.name("bln_lahir"))
      await dropdown.findElement(By.xpath("//option[. = 'Okt']")).click()
    }
    await driver.findElement(By.name("bln_lahir")).click()
    await driver.findElement(By.name("thn_lahir")).click()
    await driver.findElement(By.name("pekerjaan")).click()
    await driver.findElement(By.name("pekerjaan")).sendKeys("mahasiswa")
    {
      const element = await driver.findElement(By.name("alamat"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.name("alamat"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.name("alamat"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.name("alamat")).click()
    await driver.findElement(By.name("alamat")).sendKeys("smw")
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("2gmail")
    await driver.findElement(By.name("no_hp")).click()
    await driver.findElement(By.name("no_hp")).sendKeys("0988")
    {
      const element = await driver.findElement(By.name("Submit"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.name("Submit"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.name("Submit"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.name("Submit")).click()
    await driver.findElement(By.linkText("Login")).click()
    {
      const element = await driver.findElement(By.name("username"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.name("username"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.name("username"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("username")).sendKeys("deby")
    await driver.findElement(By.css("form")).click()
    await driver.findElement(By.name("password")).click()
    {
      const element = await driver.findElement(By.css("input:nth-child(6)"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css("input:nth-child(6)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.css("input:nth-child(6)"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css("input:nth-child(6)")).click()
    {
      const element = await driver.findElement(By.name("username"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.name("username"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.name("username"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("username")).sendKeys("deby")
    {
      const element = await driver.findElement(By.name("password"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.name("password"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.name("password"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("aaaaaa")
    await driver.findElement(By.css("input:nth-child(6)")).click()
    await driver.findElement(By.name("password")).sendKeys("aaaaaa")
  })
})