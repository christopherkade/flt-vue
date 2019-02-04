# vue-flt

:construction: Work in progress :construction:

Lightweight flat components for Vue.js, inspired by Buefy and Vuetify.

All components can be found under `/src/components`.

Current list of components

| Name         | Description | Props                                                                                     |
| ------------ | ----------- | ----------------------------------------------------------------------------------------- |
| FltInput     | Input field | id: String<br>backgroundColor: String<br>color: String<br>label: String                   |
| FltTextField | Text field  | backgroundColor: String<br>color: String<br>label: String<br>rows: Number<br>cols: Number |
| FltButton    | Button      | backgroundColor: String<br>color: String<br>disabled: Boolean                             |
| FltLabel     | Label       | color: String<br>for: String                                                              |
| FltTag       | Tag         | backgroundColor: String<br>color: String                                                  |

### How to use components in development

Components may be imported individually like so:

`import { FltInput, FltTextField } from "./components/index.js";`

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

### Unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```
