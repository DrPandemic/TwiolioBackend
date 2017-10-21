# TwiolioBackend
This is the backend project of
[TwiolioRN](https://github.com/DrPandemic/TwiolioRN). It's written in ReasonML
and uses bucklescript to be able to run on Google Functions. It uses Twilio and
Google Datastore.

## Run the project
You need to setup a `.env` file. Set the `PWD` to your project path on your
computer. The docker build image will mimic this path. I did that to let the
build image set the `.merlin` file and be able to use it from my editor on the
host machine. `PROJECT_ID` is the Google project id.

Run `docker-compose up` and wait for everything to be up. Once it's done you
can deploy a function with `npm run deploy-dev functionName`. The function can
be tested with something like
```bash
curl -v -X POST http://localhost:8010/my-project/us-central1/helloWorldJSON  -H "Content-Type:application/json" --data '{"message":"Keyboard Cat"}'
```
