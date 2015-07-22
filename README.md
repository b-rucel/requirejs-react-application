# requirejs-react-application

web application build stack

use bower:

    npm install -g bower

---

    .bowerrc
    {
        "directory": "vendor"
    }

---

    bower.json
    {
        "name": "webapp",
        "version": "0.0.1",
        "authors": [
            "bruce-lim <bruce.lim@theaudience.com>"
        ],
        "description": "starter template for webapp",
        "main": "main",
        "dependencies": {
            "backbone-amd": "~1.1.0",
            "bootstrap": "~3.2.0",
            "less": "~1.7.4",
            "lodash-amd": "~2.4.1",
            "font-awesome": "~4.1.0",
            "react": "~0.11.1"
        }
    }

---

    bower install bootstrap less font-awesome backbone-amd lodash jquery requirejs react --save

---

    tree -d -L 2

---

    ROOT/
        public/
            css/
            js/
            vendor/
                backbone-amd/
                bootstrap/
                jquery/
                less/
                lodash/
                react/
                requirejs/
                underscore/
            .bowerrc
            index.php

---

    tree -d -L 2:
    public
    ├── css
    ├── js
    │   └── application
    └── vendor
        ├── backbone-amd
        ├── bootstrap
        ├── font-awesome
        ├── jquery
        ├── less
        ├── lodash-amd
        ├── react
        ├── require
        └── requirejs
    ├── bower.json
    ├── css
    │   └── application.css
    ├── index.php
    ├── js
    │   └── application
    │       ├── app.js
    │       ├── main.js
    │       ├── router.js
    │       └── view
    │           └── index.js
    └── vendor
        └── react
            └── jsx.js <-- this file is not part of bower build

---

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />

        <title>HTML5 template</title>
        <meta name="description" content="Description of App" />
        <meta name="author" content="Bruce Lim" />

        <link rel="stylesheet" href="css/styles.css?v=1.0" />

        <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    </head>

    <body>
     
    </body>
    </html>