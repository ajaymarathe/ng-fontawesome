# NG Fontawesome Icon
🍺 NG Fontawesome Icon for Angular Lovers. Coded by [Bootcatch](http://bootcatch.com).

[![NPM](https://img.shields.io/npm/v/ng-fontawesome-icon.svg)](https://www.npmjs.com/package/ng-fontawesome-icon) 
[![NPM](https://img.shields.io/npm/dt/ng-fontawesome-icon.svg)](https://www.npmjs.com/package/ng-fontawesome-icon) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 

## Installation
Using NPM:
```
npm i ng-fontawesome-icon --save

npm i font-awesome --save
```

In your `styles.scss` file import font-awesome css
```js
/* You can add global styles to this file, and also import other style files */
@import "font-awesome/css/font-awesome.min.css";

```

## Usage
Import direct in your `app.module.ts` file:
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//import NgFontawesomeModule from ng-fontawesome
import { NgFontawesomeModule } from 'ng-fontawesome';

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
  <ng-fontawesome icon="file" size="2" color="orange"></ng-fontawesome>
```

## Note
[![ng-fontawesome](https://raw.githubusercontent.com/ajaymarathe/image-store/master/vue-fontawesome/img2.png)](https://github.com/ajaymarathe/ng-fontawesome)
- *Add only name to icon, e.g `icon="file"`*
- *No need to add full name like e.g `icon="fa fa-file"`*
- ***icon** - font-awesome icon name will find here [here](https://fontawesome.com/v4.7.0/icons/)*
- ***size** - icon size in `rem`.*
- ***color** - you can give any valid value `e.g red, yellow, #fffff, #ff0000.`*

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/ng-fontawesome/blob/master/LICENSE) license.
