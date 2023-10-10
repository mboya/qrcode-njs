const QRCode = require('qrcode');

QRCode.toString('welcome to qr', { type: 'terminal' }, (err, url) => {
  console.log(url)
})
