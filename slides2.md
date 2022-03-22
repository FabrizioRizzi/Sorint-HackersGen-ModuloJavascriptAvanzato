
<!------------------------------- SLIDE ------------------------------>

# Asynchronous calls with XMLHttpRequest

<p>
  AJAX enables HTTP requests to be made not only during the load
  time of a web page but also anytime after a page initially
  loads. This allows adding dynamic behavior to a webpage. This is
  essential for giving a good user experience without reloading
  the webpage for transferring data to and from the web server.
  The XMLHttpRequest (XHR) web API provides the ability to make
  the actual asynchronous request and uses AJAX to handle the data
  from the request. The given code block is a basic example of how
  an HTTP GET request is made to the specified URL.
</p>

```js
const xhr = new XMLHttpRequest();

xhr.open("GET", "mysite.com/api/getjson");
```
