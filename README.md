# SIGINT issue repro for Angular CLI 6.0.3

This repo exhibits an issue with killing tests run using `ng test`.
Running tests with Yarn is the most problematic but npm also requires
the user to send multiple SIGINT signals to kill tests. 

To reproduce:

* Clone the repo
* `$ npm install`
* [Install Yarn](https://yarnpkg.com/en/docs/install#mac-stable)
* Run `$ yarn test`
* Kill the test process using ctrl+c
* The tests will still be running, requiring a `$ killall -9 ng`

This issue only occurs when at least one library is present- a simple Angular CLI app with no libraries doesn't seem to exhibit this problem.
