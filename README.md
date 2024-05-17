```
npm install
npm run dev

curl http://localhost:3000/works -I &&
  curl http://localhost:3000/works-2 -I &&
  curl http://localhost:3000/does-not-work -I
```

prints

```
HTTP/1.1 200 OK
set-cookie: hello=world; Path=/
set-cookie: hello=world2; Path=/
content-type: text/plain; charset=UTF-8
Date: Fri, 17 May 2024 10:05:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5

HTTP/1.1 200 OK
set-cookie: hello=world; Path=/
set-cookie: hello=world2; Path=/
content-type: text/plain; charset=UTF-8
Date: Fri, 17 May 2024 10:05:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5

HTTP/1.1 200 OK
content-type: text/plain;charset=UTF-8
set-cookie: hello=world2; Path=/
Date: Fri, 17 May 2024 10:05:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
