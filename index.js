// a example pasted from the text Alex gave        
      
      var signup = require('./src/githubsignin.js')
      var page = require('./src/profilepage.js')

      var button = signup(loadCode)
      document.body.appendChild(button)

      function loadCode (error, code) { // this is triggered when the user clicks the button
        if (error) return console.error(error)
        console.log(`github responded with "${code}", so let's fetch a lot of data :-)`)
        getgithubdata(code, loadData)
      }

      function loadData (error, data) {
        if (error) return console.error(error)
        console.log(`github sent us a lot of data, so let's use it to build the page :-)`)
        var el = page(data)
        document.body.innerHTML = '' // to clear and remove the signup button
        document.body.appendChild(el)
      }
