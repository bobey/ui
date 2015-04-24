angular.module("kickevent.ui.demo.templates").run(["$templateCache", function($templateCache) {$templateCache.put("buttons.html","<div class=\"pad-top\">\n    <h1>Buttons</h1>\n    <p>KickEvent UI provides two mixins to define your custom buttons : <em>.btn-empty-color(@color)</em> and <em>.btn-full-color(@color)</em>.</p>\n\n    <h2>Examples</h2>\n    <p>Primary Button Full</p>\n    <a href=\"\" class=\"btn btn-primary-full\">Button 1</a>\n\n    <p class=\"pad-top\">Primary Button Empty</p>\n    <a href=\"\" class=\"btn btn-primary\">Button 2</a>\n\n    <p class=\"pad-top\">Default Button Full</p>\n    <a href=\"\" class=\"btn btn-default-full\">Button 3</a>\n\n    <p class=\"pad-top\">Default Button Empty</p>\n    <a href=\"\" class=\"btn btn-default\">Button 4</a>\n</div>\n");
$templateCache.put("headings.html","<div class=\"pad-top\">\n    <h1>Headings</h1>\n\n    <p>From H1 To H6</p>\n\n    <h1>Heading 1</h1>\n    <h2>Heading 2</h2>\n    <h3>Heading 3</h3>\n    <h4>Heading 4</h4>\n    <h5>Heading 5</h5>\n    <h6>Heading 6</h6>\n</div>\n");
$templateCache.put("home.html","<div class=\"pad-top\">\n    <h1>Welcome to KickEvent UI Demo</h1>\n</div>\n");
$templateCache.put("menus.html","<div class=\"pad-top\">\n    <h1>Menus</h1>\n    <p>KickEvent UI provides two mixins to define your custom menus : <em>.inline-menu(@color, @border-color, @line-height)</em> and <em>.vertical-right-menu(@color, @border-color)</em>.</p>\n\n    <h2 class=\"pad-top\">Horizontal menu</h2>\n    <nav class=\"menu-horizontal-default\">\n        <ul>\n            <li><a href=\"\">link 1</a></li>\n            <li class=\"active\"><a href=\"\">link 2</a></li>\n            <li><a href=\"\">link 3</a></li>\n            <li><a href=\"\">link 4</a></li>\n        </ul>\n    </nav>\n\n    <h2 class=\"pad-top\">Vertical menu</h2>\n    <nav class=\"menu-vertical-default\" style=\"width: 200px;\">\n        <ul>\n            <li><a href=\"\">link 1</a></li>\n            <li class=\"active\"><a href=\"\">link 2</a></li>\n            <li><a href=\"\">link 3</a></li>\n            <li><a href=\"\">link 4</a></li>\n        </ul>\n    </nav>\n</div>\n");}]);