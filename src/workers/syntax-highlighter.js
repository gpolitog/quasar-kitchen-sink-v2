// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

onmessage = function (event) {
  // importScripts('/highlight.pack.js');
  console.log('received', event.data)
  console.log('highlighter method', self.hljs.highlightAuto)

  var result = self.hljs.highlightAuto(event.data)

  console.log('result', result)
  postMessage(result.value)
}