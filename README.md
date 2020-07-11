# React-Rails Fullstack Application Skeleton

## Pre-requisites

1. run `ruby -v` to make sure you have version >=2.5.0 (use rbenv to switch if not)
2. run `gem install pg` and make sure you have postgreSQL running
3. Make sure you have node.js installed by running `node -v`

## Workflow to use this skeleton

fork the repository and clone to your computer.

run `gem update --system`

cd into the folder and run `bundle install && yarn install`

### DB setup

run `rails db:setup`

### Auto-generate the backend resource chain

run `rails g resource user`  or `rails g resource api/user` (for api resource) (replace with the plural of the model name), it will generate the following files for you:

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
- Add `render 'component': 'Users', props: { users: @users }` to your controller action, for example `Users#index`. see https://github.com/reactjs/react-rails#controller-actions (you can also use `respond_to` along with it if you respond to multiple formats)

### Use `yarn` instead of `npm`

- You will need to use `yarn add` `yarn run` etc instead of `npm`

## \* Instructions to build this skeleton on your own (as you may have issue reusing this skeleton)

1. `rails new PROJECT_NAME -BT --webpack=react --database=postgresql` (or you could use default option sqlite3) (dont worry about the yello warnings)
2. cd into the folder and `bundle add react-rails`
3. `yarn add webpack`
4. `yarn upgrade @rails/webpacker`
5. `rails g react:install`
6. `bundle add faker`
7. `rails db:create`
8. `git add . && git commit -m "initial skeleton"`

reference:

https://medium.com/swlh/getting-started-with-rails-6-and-react-afac8255aecd
