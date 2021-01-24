## Personal Site

This is personal website to have an introduction to my development profile and host a small blog. Created with Next and Typescript. Currently deployed to vercel on: https://personal-site.jorgepasco1.vercel.app/

## Instructions to run locally.

### Github

This projects connects to the GitHub API to get my most recent projects. To have a less limited amount of requests to the API, you will need to have a [GitHub Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to pass along with the requests. Note that this is not necessary, but could potentially limit you.

### Mailing

To get the contact form functionality to work, you first will need to have a [verified sender email on SendGrid](https://sendgrid.com/docs/ui/sending-email/sender-verification). With that you will get an API key, in the form of `SG.<random_characters>`.

Create an enviroment file (`.env`) and include your SendGrid API key, and your verified email:

```shell
GH_ACCESS_TOKEN=<random_characters>
SENDGRID_API_KEY=SG.random.characters
GMAIL_USER=youremail@gmail.com
```

### Running the server

Once you have your environment variables, you can go ahead and install the project dependencies with:

```shell
npm install
```

And then start the server with:

```shell
npm run dev
```
