---
layout: post
description: "To personalize eFrolic you must have knowledge of SASS and its configuration..."

# Post config
tag: Customize
color: "sky"
tag_color: "success"
image: "/assets/images/post/customize.jpg"

title:  " Customize imports."

# Short description
short_description: "To personalize eFrolic you must have knowledge of SASS and its configuration..."

---

Our framework was developed with flexibility in mind and users could play with it,
each component was developed independently, so that the import can be done without problems.


Almost all components and utilities act individually so you can customize eFrolic by importing
only the components you need and compiling a much lighter file.


To personalize eFrolic you must have knowledge of SASS and its configuration, once you have created your work environment you will be able to locate the file 'import.scss', which is the important file for importing elements.

Once there you can locate the first import 'setting' this is required and can not be deleted.

<img src="{{site.url}}/assets/images/post/cust.PNG" style="max-width:280px;">


You can play with others import.
```
// Optional import
```

Remove those you do not need and compile your CSS file and enjoy a lighter file and to your liking.


**Note:** Not all components are completely independent, some depend on animations, so you must import the animations or disable the animation for that component in the variables **$x-enable-animation.**

The components that depend on animations:

* **Navbar**
* **Modal**
* **Sidenav**
* **Dropdown**


To import only one of these, disable one of the following variables:

``` css

/* Enable animations */
$dropdown-enable-animation               : true !default;
$navegation-enable-animation             : true !default;
/* Cap Modal / Sidenav */
$cap-enable-animation                    : true !default;

/***********************************************************/

/* disable animations */
$dropdown-enable-animation               : false !default;
$navegation-enable-animation             : false !default;
/* Cap Modal / Sidenav */
$cap-enable-animation                    : false !default;

```
