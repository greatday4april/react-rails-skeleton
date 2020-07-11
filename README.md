# React-Rails Fullstack Application Skeleton

## Pre-requisites

1. run `ruby -v` to make sure you have version >=2.5.0 (use rbenv to switch if not)
2. run `gem install pg` and make sure you have postgreSQL running
3. Make sure you have node.js installed by running `node -v`

## Workflow to use this skeleton

- **FORK** the repository and clone to your computer.
- run `gem update --system`
- cd into the folder and run `bundle install && yarn install`
- We will use `yarn` instead of `npm` so `yarn add` `yarn run` etc instead of `npm`
- you may need turn off "Auto Attach" in the bottom bar of VS code if you have it

### DB setup

run `rails db:setup`

### Auto-generate the backend resource chain

run `rails g resource api/user` (for api resource) (replace with your model name), it will generate the following files for you:

- DB migration file
- model
- controller
- standard route

### Backend implementation

- Fill in DB migration and migrate
- Add custom validators, callbacks, functions to model if needed
- use `Faker` in `seeds.rb` to add some fake data and then `db:migrate` to help with testing in console
- Add `index`, `show`, `create`, `update`, `destroy` etc to the controller and return json or delegate to jbuilder

### Frontend implementation

- run `rails g react:component Users users:array` based on react component name and props it takes. reference: https://github.com/reactjs/react-rails#component-generator
- add `Route` to `app.jsx` for your new top-level component
- `yarn add react-redux redux redux-logger redux-thunk` if you need redux

### Run server
- run `rails s` and it will load webpack as well, supports auto-reloading when there's code change

## * Instructions to build this skeleton on your own (as you may have issue reusing this skeleton)

1. `rails new PROJECT_NAME -BT --webpack=react --database=postgresql` (or you could use default option sqlite3) (dont worry about the yello warnings)
2. cd into the folder and `bundle add react-rails`
3. `yarn add webpack react-router-dom`
4. `yarn upgrade @rails/webpacker`
5. `rails g react:install`
6. `bundle add faker`
7. `rails db:create`
8. `rails g controller static_pages root`
9. add `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">` `<%= javascript_pack_tag 'root' %>` to application.html.erb
10. rename `hello_react.jsx` to `root.jsx`
11. add `root "static_pages#root"` to routes.rb
11. `git add . && git commit -m "initial skeleton"`

[reference]

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend
