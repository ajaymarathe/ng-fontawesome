# ng-fontawesome
🍺 Hi there, Font-awesome icons for Angular lovers &lt;3

## Installation
Using NPM:
```
npm i ng-fontawesome-icon

npm i font-awesome
```

In your `styles.scss` file import font-awesome css
```js
/* You can add global styles to this file, and also import other style files */
@import "font-awesome/css/font-awesome.min.css";

```

## Usage
Import direct in your .ts file:
```js

//import your FontAwesomeComponent component
import { FontAwesomeComponent } from "ng-fontawesome-icon/src/app/font-awesome/font-awesome.component";

@NgModule({
  declarations: [
    AppComponent,
    //add font-awesome-component here
    FontAwesomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

In your components html file:
```html
  <ng-fontawesome icon="file" size="4" color="orange"></ng-fontawesome>
```

## Note
[![vue-fontawesome](https://raw.githubusercontent.com/ajaymarathe/image-store/master/vue-fontawesome/img2.png)](https://github.com/ajaymarathe/vue-fontawesome)
- add only name to icon, i.e `icon="file"`
- no need to add full name like i.e `icon="fa fa-file"`
- **icon** - font-awesome icon name will find here [here](https://fontawesome.com/v4.7.0/icons/)
- **size** - icon size in `rem`.
- **color** - you can give any valid value `i.e red, yellow, #fffff, #ff0000.`

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/vue-fontawesome/blob/master/LICENSE) license.
