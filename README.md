# unit-testing-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue

### Vue コンポーネントにおけるインプットとアウトプットの一覧

- Inputs
  - Component Data
  - Component Props
  - User Interaction  
  Ex: user clicks a button
  - Lifecycle Methods  
  mounted(), created(), etc.
  - Vuex Store
  - Route Params

- Outputs
  - What is rendered to the DOM
  - External function calls
  - Events emitted by the component
  - Route Changes
  - Updates to the Vuex Store
  - Connection with children  
  i.e. changes in child components

refference at vue master page

### UT 対象のコンポーネントのインプット & アウトプットを確認する

first step, create a list
- input
  - Props  
  min & max
  - User Interaction  
  Clicking of the Generate Random Number button
- output
  - Rendered Output (DOM)
  Is the number displayed on the screen between min and max?

## mount vs shalloMount


## UT の自動化が必要になるタイミング
機能追加が発生するタイミング。
