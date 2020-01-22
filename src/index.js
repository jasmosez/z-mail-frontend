// additional seed data
dataObj = []
dataTime = "2020-01-16"

document.addEventListener('DOMContentLoaded', function(){
  console.log("DOM loaded")
  const emails = {}

  fetchMessages()

  function fetchMessages() {
    // fetch('https://z-mail.ngrok.io/messages')
    fetch('src/messages.json')
    .then(response => response.json())
    .then(messages => {
      organizeMessages(messages)
    })
    .catch(error => {alert(error.messages)})
  }

  function organizeMessages(messages) {
    messages.forEach(message => {
      console.log(message)
    //   const date = message.date
    //   if (!!emails[date]){
    //     emails[date].push(message)
    //   } else {
    //     emails[date] = []
    //     emails[date].push(message)
    //   }
    })
    // generateDataObj()
  }

  function generateDataObj() {
    for (const key in email) {
      email[key].label_ids.reduce((tally, label) => {
        tally[label] = (tally[label] || 0)
        return tally
      }, {})
    }
  }

  function generateDisplayArrays() {
    

    let date = ['x']
    let emailIn = ['Email In']
    let emailOut = ['Email Out']
    let inbox = ['Inbox']

    dataObj.forEach(obj => {
      date.push(obj.date)
      emailIn.push(obj.emailIn)
      emailOut.push(obj.emailOut)
      inbox.push(obj.inbox)
    })

    // return array of four arrays: date, emailIn, emailOut, inbox
    return [date, emailIn, emailOut, inbox]
  }

  function clickHandler(arguments) {
    // debugger
    const listGroup = document.getElementById('list-group')
    // const id = arguments[0].id
    const itemCount = arguments[0].value
    // const date = arguments[0].x
    // const showPanel = document.getElementById('show')
    // showPanel.innerText = `${id} on ${date}`
    // ul = document.createElement('ul')
    while (listGroup.hasChildNodes()) {  
      listGroup.removeChild(listGroup.firstChild);
    }
    
    for (let i = 1; i <= itemCount; i++) {
      // li = document.createElement('li')
      // li.innerText = `Message #${i}`
      // ul.appendChild(li)
      displayEmails(arguments, i)
    }

    // showPanel.appendChild(ul)
    // value: 4
    // id: "Inbox"
    // index: 34
    // name: "Inbox"
    // for as many messages as we would expect, generate a little table of results

    // mock up gmails for 1 or 2 days
    // date, label, message
    

    function displayEmails(arguments, num) {
      const id = arguments[0].id
      const itemCount = num
      const date = arguments[0].x
      const href = document.createElement('a')
      href.href = '#'
      href.className = "list-group-item"
      href.innerHTML = `
        <div class="checkbox"><label><input type="checkbox"></label></div>
        <span class="glyphicon far fa-star"></span>
        <span class="name" style="min-width: 120px;
              display: inline-block;">${id}</span>
        <span class="">${date} Message #${itemCount}</span>
        <span class="text-muted" style="font-size: 11px;">Random Message</span>
        <span class="badge">12:10 AM</span>
        <span class="pull-right"><span class="glyphicon glyphicon-paperclip"></span></span>`
      listGroup.append(href)
    }

    
  }

  const chart = c3.generate({
    data: {
      x: 'x',
      //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
      columns: generateDisplayArrays(),
      onclick: function () {
        clickHandler(arguments)
      },
      axes: {
        "Inbox": 'y2'
      },
      types: {
        "Inbox": 'bar'
      }
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d'
        }
      },
      y: {
        label: {
          text: 'Daily Throughput',
          position: 'outer-middle'
        }
      },
      y2: {
        show: true,
        label: {
          text: `Inbox as of ${dataTime}`,
          position: 'outer-middle'
        }
      }
    }
  });



  

})


// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }


// })