# Pin npm packages by running ./bin/importmap

################ Default Pins
pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"

################ Vue
pin "vue", to: "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js"
################ First Vue Components
pin "vue_components/first_vue_component"
pin "vue_components/second_vue_component"
pin "vue_components/vue_posts"

################ React
pin "htm", to: "https://ga.jspm.io/npm:htm@3.1.0/dist/htm.module.js"
pin "react", to: "https://ga.jspm.io/npm:react@17.0.2/index.js"
pin "react-dom", to: "https://ga.jspm.io/npm:react-dom@17.0.2/index.js"
pin "object-assign", to: "https://ga.jspm.io/npm:object-assign@4.1.1/index.js"
pin "scheduler", to: "https://ga.jspm.io/npm:scheduler@0.20.2/index.js"

################ First React Components
### Example of pinning individual files
pin "react_components/htm_create_element"
pin "react_components/first_react_component"
pin "react_components/second_react_component"
pin "react_components/third_react_component"
pin "react_components/react_posts"

################ React Examples
### Example of pinning all files from a directory with a namespace
pin_all_from "app/javascript/react", under: "react"

# pin "react_examples/props"
# pin "react_examples/state_and_lifecycle"

################
