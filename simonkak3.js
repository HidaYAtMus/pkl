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
    await driver.get("http://simonkak-dev.divmu.pindad.co.id/")
    await driver.manage().window().setRect(1362, 732)
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("username")).sendKeys("adkas")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("adkas")
    await driver.findElement(By.css("button")).click()
    await driver.findElement(By.linkText("Detail")).click()
    await driver.findElement(By.css(".sidebar-menu > li:nth-child(1) span")).click()
    await driver.findElement(By.css(".bg-maroon:nth-child(3)")).click()
    await driver.findElement(By.linkText("Dashboard")).click()
    await driver.findElement(By.css(".bg-orange:nth-child(3)")).click()
    await driver.findElement(By.linkText("Dashboard")).click()
    await driver.findElement(By.css(".bg-olive:nth-child(3)")).click()
    await driver.findElement(By.css(".sidebar-menu > li:nth-child(1) span")).click()
    await driver.findElement(By.css("li:nth-child(3) span")).click()
    await driver.findElement(By.id("tomboltambah")).click()
    await driver.findElement(By.id("npp")).click()
    await driver.findElement(By.id("npp")).sendKeys("213")
    await driver.findElement(By.id("nama")).click()
    await driver.findElement(By.id("nama")).sendKeys("agnes")
    await driver.findElement(By.id("foto_link")).click()
    await driver.findElement(By.id("foto_link")).sendKeys("foto")
    await driver.findElement(By.id("submit-operators")).click()
    await driver.findElement(By.css(".btn-outline:nth-child(1)")).click()
    await driver.findElement(By.linkText("Mesin")).click()
    await driver.findElement(By.linkText("Data Mesin")).click()
    await driver.findElement(By.id("tomboltambah")).click()
    await driver.findElement(By.id("id_mesin")).click()
    await driver.findElement(By.id("id_mesin")).sendKeys("H.34")
    await driver.findElement(By.id("nama_mesin")).click()
    await driver.findElement(By.id("nama_mesin")).sendKeys("ww")
    await driver.findElement(By.id("jam_mesin_max")).click()
    await driver.findElement(By.id("jam_mesin_max")).sendKeys("23")
    await driver.findElement(By.id("tanggal_update")).click()
    await driver.findElement(By.css("tr:nth-child(5) > .day:nth-child(3)")).click()
    await driver.findElement(By.css(".fa-check")).click()
    await driver.findElement(By.id("batal")).click()
    await driver.findElement(By.linkText("History Mesin")).click()
    await driver.findElement(By.id("select2-id_mesin-container")).click()
    await driver.findElement(By.linkText("Order")).click()
    await driver.findElement(By.linkText("Data Order")).click()
    await driver.findElement(By.css(".btn-success:nth-child(2)")).click()
    await driver.findElement(By.id("tomboltambah")).click()
    await driver.findElement(By.id("id_order")).click()
    await driver.findElement(By.id("id_order")).sendKeys("23")
    await driver.findElement(By.id("nomor_material")).click()
    await driver.findElement(By.id("nomor_material")).sendKeys("44")
    await driver.findElement(By.id("deskripsi_material")).click()
    await driver.findElement(By.id("deskripsi_material")).sendKeys("wrr")
    await driver.findElement(By.id("nomor_gambar")).click()
    await driver.findElement(By.id("nomor_gambar")).sendKeys("45")
    await driver.findElement(By.id("select2-modal_jenis_order-container")).click()
    await driver.findElement(By.id("jumlah_order")).click()
    await driver.findElement(By.id("jumlah_order")).sendKeys("3")
    await driver.findElement(By.css("#submit-orders > .fa")).click()
    await driver.findElement(By.linkText("Order Internal")).click()
    await driver.findElement(By.css(".btn-success:nth-child(2)")).click()
    await driver.findElement(By.id("tomboltambah")).click()
    await driver.findElement(By.id("id_order")).click()
    await driver.findElement(By.id("id_order")).sendKeys("33")
    await driver.findElement(By.id("nomor_material")).click()
    await driver.findElement(By.id("nomor_material")).sendKeys("34")
    await driver.findElement(By.id("deskripsi_material")).click()
    await driver.findElement(By.id("deskripsi_material")).sendKeys("wr")
    await driver.findElement(By.id("nomor_gambar")).click()
    await driver.findElement(By.id("nomor_gambar")).sendKeys("33")
    await driver.findElement(By.id("select2-modal_jenis_order-container")).click()
    await driver.findElement(By.id("jumlah_order")).click()
    await driver.findElement(By.id("jumlah_order")).sendKeys("12")
    await driver.findElement(By.id("submit-orders")).click()
    await driver.findElement(By.id("batal")).click()
    await driver.findElement(By.linkText("Order Prioritas")).click()
    await driver.findElement(By.css("tr:nth-child(1) .btn-sm")).click()
    await driver.findElement(By.id("btn-kembali")).click()
    await driver.findElement(By.linkText("Order Super Prioritas")).click()
    await driver.findElement(By.id("tambahSuper")).click()
    await driver.findElement(By.id("select2-id_order-container")).click()
    await driver.findElement(By.id("submit-superprioritas")).click()
    {
      const element = await driver.findElement(By.id("submit-superprioritas"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.linkText("Tracking Order")).click()
    await driver.findElement(By.css(".select2-selection")).click()
    await driver.findElement(By.id("btn-kk")).click()
    {
      const element = await driver.findElement(By.id("btn-kk"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("hasil_afkir")).click()
    await driver.findElement(By.id("hasil_afkir")).sendKeys("0")
    await driver.findElement(By.id("jam_orang")).click()
    await driver.findElement(By.id("jam_orang")).sendKeys("3")
    await driver.findElement(By.id("jam_mesin")).click()
    await driver.findElement(By.id("hasil_baik")).click()
    await driver.findElement(By.id("hasil_baik")).sendKeys("2")
    await driver.findElement(By.id("select2-id_mesin-container")).click()
    await driver.findElement(By.id("jam_mesin")).sendKeys("3")
    await driver.findElement(By.css("#form-kk > .col:nth-child(2) > .form-group")).click()
    await driver.findElement(By.id("select2-npp-container")).click()
    await driver.findElement(By.id("submit-kk")).click()
    await driver.findElement(By.css("li:nth-child(7) span")).click()
    await driver.findElement(By.id("tomboltambah")).click()
    await driver.findElement(By.id("no_reservasi")).click()
    await driver.findElement(By.id("no_reservasi")).sendKeys("2")
    await driver.findElement(By.id("select2-id_order-container")).click()
    await driver.findElement(By.id("kode_barang")).click()
    await driver.findElement(By.id("kode_barang")).sendKeys("223")
    await driver.findElement(By.id("nama_barang")).click()
    await driver.findElement(By.id("nama_barang")).sendKeys("wws")
    await driver.findElement(By.id("jumlah")).click()
    await driver.findElement(By.id("jumlah")).sendKeys("3")
    await driver.findElement(By.id("submit-reservasi")).click()
    await driver.findElement(By.css(".treeview:nth-child(8) span:nth-child(2)")).click()
    await driver.findElement(By.linkText("Input Kartu Kerja")).click()
    await driver.findElement(By.id("tomboltambah")).click()
    {
      const element = await driver.findElement(By.id("tomboltambah"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("hasil_baik")).click()
    await driver.findElement(By.id("hasil_baik")).sendKeys("2")
    await driver.findElement(By.id("hasil_afkir")).click()
    await driver.findElement(By.id("hasil_afkir")).sendKeys("1")
    await driver.findElement(By.id("jam_orang")).click()
    await driver.findElement(By.id("jam_orang")).sendKeys("23")
    await driver.findElement(By.id("jam_mesin")).click()
    await driver.findElement(By.id("jam_mesin")).sendKeys("33")
    await driver.findElement(By.id("tanggal")).click()
    await driver.findElement(By.css("tr:nth-child(5) > .day:nth-child(2)")).click()
    await driver.findElement(By.id("submit-kk")).click()
    await driver.findElement(By.linkText("Tracking KK Operator")).click()
    await driver.findElement(By.id("select2-operator-container")).click()
    await driver.findElement(By.css(".treeview:nth-child(9) span:nth-child(2)")).click()
    await driver.findElement(By.linkText("Data Work Order")).click()
    await driver.findElement(By.id("tomboltambah")).click()
    await driver.findElement(By.linkText("Work Order")).click()
    await driver.findElement(By.linkText("Export Work Order")).click()
    await driver.findElement(By.css("li:nth-child(10) span")).click()
    await driver.findElement(By.id("tambah-penyerahan")).click()
    await driver.findElement(By.id("select2-id_order-container")).click()
    await driver.findElement(By.id("jumlah")).click()
    await driver.findElement(By.id("jumlah")).sendKeys("2")
    await driver.findElement(By.id("oleh")).click()
    await driver.findElement(By.id("oleh")).sendKeys("ws")
    await driver.findElement(By.id("keterangan")).click()
    await driver.findElement(By.id("keterangan")).sendKeys("\'_\'")
    await driver.findElement(By.id("submit-penyerahan")).click()
    await driver.findElement(By.css("li:nth-child(12) span")).click()
  })
})
