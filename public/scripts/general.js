document.querySelectorAll('.phoneBtn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    dataLayer.push({ event: 'phone_click' })
  })
})

document.querySelectorAll('.whatsappBtn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    dataLayer.push({ event: 'whatsapp_click' })
  })
})
