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

### [Video Tutorials](https://youtu.be/lw0sVsk0m7k)


Import direct in your `app.module.ts` file:
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//import NgFontawesomeModule from ng-fontawesome-icon
import { NgFontawesomeModule } from "ng-fontawesome-icon";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //import your NgFontawesomeModule here
    NgFontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then use wherever you want !! Goodluck:
```html
  <ng-fontawesome icon="file" size="3" color="red"></ng-fontawesome>
```

## Note
[![vue-fontawesome](https://raw.githubusercontent.com/ajaymarathe/image-store/master/vue-fontawesome/img2.png)](https://github.com/ajaymarathe/vue-fontawesome)
- add only name to icon, e.g `icon="file"`
- no need to add full name like e.g <del>`icon="fa fa-file`</del>

- **icon** - font-awesome icon name will find here [here](https://fontawesome.com/v4.7.0/icons/)
- **size** - icon size in `rem`.
- **color** - you can give any valid value `e.g red, yellow, #fffff, #ff0000.`

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/vue-fontawesome/blob/master/LICENSE) license.
