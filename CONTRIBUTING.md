# Contributing

We are open to, and grateful for, any contributions made by the community. By contributing to Redux, you agree to abide by the [code of conduct](https://github.com/reduxjs/redux/blob/master/CODE_OF_CONDUCT.md).

## Reporting Issues and Asking Questions

Before opening an issue, please search the [issue tracker](https://github.com/reduxjs/redux/issues) to make sure your issue hasn't already been reported.

### Bugs and Improvements

We use the issue tracker to keep track of bugs and improvements to Redux itself, its examples, and the documentation. We encourage you to open issues to discuss improvements, architecture, theory, internal implementation, etc. If a topic has been discussed before, we will ask you to join the previous discussion.

As Redux is stable software, changes to its behavior are very carefully considered. Any pull requests that involve breaking changes should be made against the `next` branch.

### Getting Help

**For support or usage questions like “how do I do X with Redux” and “my code doesn't work”, please search and ask on [StackOverflow with a Redux tag](https://stackoverflow.com/questions/tagged/redux?sort=votes&pageSize=50) first.**

We ask you to do this because StackOverflow has a much better job at keeping popular questions visible. Unfortunately good answers get lost and outdated on GitHub.

Some questions take a long time to get an answer. **If your question gets closed or you don't get a reply on StackOverflow for longer than a few days,** we encourage you to post an issue linking to your question. We will close your issue but this will give people watching the repo an opportunity to see your question and reply to it on StackOverflow if they know the answer.

Please be considerate when doing this as this is not the primary purpose of the issue tracker.

### Help Us Help You

On both websites, it is a good idea to structure your code and question in a way that is easy to read to entice people to answer it. For example, we encourage you to use syntax highlighting, indentation, and split text in paragraphs.

Please keep in mind that people spend their free time trying to help you. You can make it easier for them if you provide versions of the relevant libraries and a runnable small project reproducing your issue. You can put your code on [JSBin](https://jsbin.com) or, for bigger projects, on GitHub. Make sure all the necessary dependencies are declared in `package.json` so anyone can run `npm install && npm start` and reproduce your issue.

## Development

Visit the [issue tracker](https://github.com/reduxjs/redux/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```sh
git clone https://github.com/your-username/redux.git
```

### Building

This repo uses Yarn 3 for all package management. Please ensure that Yarn 1.x is installed globally on your system, so that Yarn 3 will run properly inside this repo.

#### Building Redux

Running the `build` task will build the artifacts into the `./dist` folder

```sh
yarn build
```

### Testing and Linting

To only run linting:

```sh
yarn lint
```

To only run tests:

```sh
yarn test
```

To continuously watch and run tests, run the following:

```sh
yarn test:watch
```

### Docs

Improvements to the documentation are always welcome. You can find them in the [`docs`](/docs) path. We use [Docusaurus](https://docusaurus.io/) to build our documentation website. The website is published automatically whenever the `master` branch is updated.

### Examples

Redux comes with [official examples](https://redux.js.org/introduction/examples) to demonstrate various concepts and best practices.

When adding a new example, please adhere to the style and format of the existing examples, and try to reuse as much code as possible. For example, `index.html`, `server.js`, and `webpack.config.js` can typically be reused.

#### Testing the Examples

To test the official Redux examples, run the following:

```sh
yarn examples:test
```

Not all examples have tests. If you see an example project without tests, you are very welcome to add them in a way consistent with the examples that have tests.

Please visit the [Examples page](https://redux.js.org/introduction/examples) for information on running individual examples.

### Sending a Pull Request

For non-trivial changes, please open an issue with a proposal for a new feature or refactoring before starting on the work. We don't want you to waste your efforts on a pull request that we won't want to accept.

On the other hand, sometimes the best way to start a conversation _is_ to send a pull request. Use your best judgement!

In general, the contribution workflow looks like this:

- Open a new issue in the [Issue tracker](https://github.com/reduxjs/redux/issues).
- Fork the repo.
- Create a new feature branch based off the `master` branch.
- Make sure all tests pass and there are no linting errors.
- Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, we'll try to get back to you as soon as possible. We may suggest some changes or improvements.

Thank you for contributing!
