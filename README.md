# DummyAuthenticator (dum-auth)
Let's face it, at some point in our frontend development journey, we just want to test out our auth feature in realtime with the closest simulation to a backend server as possible (but we don't have a server to work with... yet)

## About DummyAuthenticator
DummyAuthenticator is an easy solution for an easy problem, A standalone server for testing auth features.

## How it works
Dum-auth is easy to use, just make a post request to the url [https://dum-auth.onrender.com] with two properties, `username` and `password` and you'll get back a json response containing an `error`, `message` and a `data` object, the `data` object in itself contains your `username`, an `email` forged with your username as raw material, and a jwt `token` generated from the login details

```
{
  "error": boolean,
  "message": string,
  "data": {
            "username": string,
            "email": string,
            "token": Bearer token
          }
}
```

### Simulating a successful login
A request to the url with the `username` and `password` fields populated would return a success response

### Simulating a failed login
Leave either of the fields blank to simulate a failed login


#### Note:
The project is simple and very bare still, and as such is still very open to the dev community for collaborations and new ideas.. Feel free to fork, work on, and pitch new ideas for the project ❤
