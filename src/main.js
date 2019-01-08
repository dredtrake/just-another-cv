/* exported onloadCallback */

import templateHead from '../templates/head.tmpl'
import templateHeader from '../templates/header.tmpl'
import templateExperiences from '../templates/experiences.tmpl'
import templateSkills from '../templates/skills.tmpl'
import templateModal from '../templates/modal.tmpl'

// const Handlebars = require('handlebars/runtime')
var googleRecaptchaLoaded = false

ajax('data/data.json', init, 'GET', null)

// main fn
function init (data) {
  // var templateHead = Handlebars.templates['head.tmpl'] // your template minus the .js
  var contextHead = data.head // your data
  var head = templateHead(contextHead)
  document.getElementsByTagName('head')[0].innerHTML += head

  var contextHeader = data.header // your data
  // var templateHeader = Handlebars.templates['header.tmpl'] // your template minus the .js
  var header = templateHeader(contextHeader)
  document.getElementsByTagName('header')[0].innerHTML = header

  var contextExperiences = data.experiences // your data
  // var templateExperiences = Handlebars.templates['experiences.tmpl'] // your template minus the .js
  var experiences = templateExperiences({ items: contextExperiences })
  document.getElementsByClassName('half')[0].innerHTML = experiences

  var contextSkills = data.tiles // your data
  // var templateSkills = Handlebars.templates['skills.tmpl'] // your template minus the .js
  var skills = templateSkills({ items: contextSkills })
  document.getElementsByClassName('half')[1].innerHTML = skills

  bindContact(data.sendmail_url, data.recaptcha_key)
}

// some helper functions so far
function ajax (url, callback, method, data) {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      try {
        var data = JSON.parse(xmlhttp.responseText)
        callback(data)
      } catch (err) {
        console.log(err.message + ' in ' + xmlhttp.responseText)
      }
    }
  }
  if (method === 'POST') {
    xmlhttp.open(method, url, true)
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xmlhttp.send(data)
  } else {
    xmlhttp.open(method, url, true)
    xmlhttp.send()
  }
}

function bindContact (url, recaptchaKey) {
  var contactBtn = document.getElementsByClassName('js_contact-form')[0]
  contactBtn.addEventListener('click', function (e) {
    e.preventDefault()
    var modal = templateModal({ send_url: url, recaptcha_key: recaptchaKey })
    document.getElementsByClassName('modal')[0].innerHTML = modal
    // template is ready to use
    document.getElementsByClassName('init-focus')[0].focus()
    document.getElementsByClassName('overlay')[0].classList.add('fade')
    // timeout (0) to avoid a blink
    document.getElementsByClassName('overlay')[0].classList.add('in')
    document.getElementsByClassName('modal-content')[0].classList.add('in')
    var closeBtn = document.getElementsByClassName('close')[0]
    closeBtn.addEventListener('click', function (e) {
      closeModal()
      e.preventDefault()
    })
    var sendmailForm = document.getElementById('sendmail')
    sendmailForm.addEventListener('submit', function (e) {
      var formData = new FormData(this)
      ajax(url, function (data) {
      }, 'POST', formData)
      e.preventDefault()
    }, false)

    if (googleRecaptchaLoaded && typeof grecaptcha !== 'undefined') {
      grecaptcha.render('g-recaptcha', {
        'sitekey': recaptchaKey,
        'callback': checkCallback
      })
    }
  }, false)
}

function closeModal () {
  document.getElementsByClassName('overlay')[0].classList.remove('in')
  document.getElementsByClassName('modal-content')[0].classList.remove('in')
  // todo : add a animation event listener (onanimationstop)
  setTimeout(function () {
    document.getElementsByClassName('overlay')[0].classList.remove('fade')
  }, 500)
}

function checkCallback (response) {
  var recaptchaResponse = document.createElement('input')
  recaptchaResponse.type = 'hidden'
  recaptchaResponse.name = 'g-recaptcha'
  recaptchaResponse.value = response
  var sendmailForm = document.getElementById('sendmail')
  sendmailForm.appendChild(recaptchaResponse)
}

/* eslint-disable */
function onloadCallback () {
  googleRecaptchaLoaded = true
}
/* eslint-enable */
