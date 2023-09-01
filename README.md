# DummyAuthenticator (dum-auth)
Let's face it, at some point in our frontend development journey, we just want to test out our auth feature in realtime with the closest simulation to a backend server as possible (but we don't have a server to work with... yet)

## About DummyAuthenticator
DummyAuthenticator is an easy solution for an easy problem, A standalone server for testing auth features.

## How it works
Dum-auth is easy to use, just make a post request to the url [https://dum-auth.onrender.com] with two properties, `username` and `password` and you'll get back a response containing your username, an email forged with your username as raw material, and a jwt token generated from the login details

### Simulating a successful login
A request to the url with the `username` and `password` fields populated would return a success response

### Simulating a failed login
Leave either of the fields blank to simulate a failed login