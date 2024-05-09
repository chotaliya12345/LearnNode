const { hostname } = require("os")
const url = require("url")

const webUrl = "https://www.flipkart.com/poco-m6-pro-5g-forest-green-128-gb/p/itm151f47ed48eee?pid=MOBGRNZ3FZBVRYHQ&lid=LSTMOBGRNZ3FZBVRYHQLWWUJH&marketplace=FLIPKART&q=poco+m6+pro+5g&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=dfda5da5-bef8-4eef-b8ea-275fdae70f0e.MOBGRNZ3FZBVRYHQ.SEARCH&ppt=sp&ppn=sp&ssid=8mlv5avgao0000001715224253201&qH=121a76abfa53ab74"

// console.log(url.parse(webUrl).protocol);
// console.log(url.parse(webUrl, true).query.pid);

const urlData = {
    protocol: 'https://',
    hostname: 'www.fdgfdg.com',
    pathname: '/sdfgiafbm-fbf-vc',
    search: 'pid=10'
}

console.log(url.format(urlData));

const path1 = 'https://www.sdfdd.com/products/'
const path2 = '../34'

console.log(url.resolve(path1, path2));
