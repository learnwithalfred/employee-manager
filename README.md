# cardio-tracker

> Description the project.In this application we will learn to build, a REAL production Rails application

## Built With

- Javascript
- Ruby
- Ruby on Rails

### Prerequisites

- Node.js version 16.4.2
- Ruby version 2.7.6
- Rails version 6.1.6.1

I was using MacOS when building this app. To change ruby version on other operating system you can google search

### Setup

- Install ruby version 2.7.6 and use it

  ```
  rvm install 2.7.6 && rvm use 2.7.6
  ```

- Install rails version 6

  ```
  gem install rails -v 6.1.6.1
  ```

- Start new rails application with a specific version

  ```
  rails _6.1.6.1_ new app_name -d=postgresql
  ```

- Setup specific webpack version and remove unnecessary gems

```
bundle remove rack-mini-profiler
yarn remove @rails/webpacker webpack-dev-server webpack webpack-cli
yarn add @rails/webpacker@5.4.0
yarn add -D webpack-dev-server@3.11.2 --exact

```

- Update stylesheet pack tag in `app/views/layout/application.html.erb` from `<%= stylesheet_link_tag 'application', media: 'all' %>` to
  ```
  <%= stylesheet_pack_tag 'application' %>
  ```
- Create database
  ```
  rails db:create
  ```
- Start ruby application

  ```
  rails server
  ```

## Install
`bundle install`

## Test

 `rails test -v test/models/user_test.rb`
 Full test coverage `COVERAGE=true bundle exec rails test -v`

## Author

Alfred Boateng

- GitHub: [@learnwithalfred](https://github.com/learnwithalfred)
- Twitter: [@kb_alfred](https://twitter.com/kb_alfred)
- LinkedIn: [Alfred Boateng](https://www.linkedin.com/in/learnwithalfred/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
