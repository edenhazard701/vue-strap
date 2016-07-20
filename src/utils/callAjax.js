export default (url, callback)=> {
  var httpRequest = new XMLHttpRequest()
  var data = {}
  // p (promise)
  var p = {
    then(fn1,fn2,fn3){
      done(fn1)
      fail(fn2)
      always(fn3)
      return p
    }
  }
  for (let name of ['done','fail','always']){
    data[name] = []
    p[name] = (fn) => {
      if(fn instanceof Function) data[name].push(fn)
      return p
    }
  }
  p.done(callback)
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        try {
          let response = JSON.parse(httpRequest.responseText)
          for (let done of data.done) done(response)
        }catch (e) {
          for (let fail of data.fail) fail(e)
        }
      } else {
        for (let fail of data.fail) fail({
          status: httpRequest.status
        })
      }
      for (let always of data.always) always({
        status: httpRequest.status
      })
    }
  }
  httpRequest.open('GET', url)
  httpRequest.setRequestHeader("Accept", "application/json")
  httpRequest.send()
  return p
}
