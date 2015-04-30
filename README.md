# dojo-complete for Atom

Can't remember full dojo module names? Don't worry about it! If you know the module you're looking for, I'll fill it in for you.

![preview](https://github.com/pcvera/dojo-complete/blob/master/preview/preview.gif)

Typing the module name, prefixed with a pound sign will automatically replace it with the qualified module name, wrapped in quotes and followed by a comma. For example, typing:
```
#ContentPane
```
Will expand to:
```
"dijit/layout/ContentPane",
```

Modules with names containing dashes have been converted camel case. For example, if you want to use the dojo/dom-construct module, you would use the notation:
```
#domConstruct
```

Currently this module supports the dojo and dijit libraries.
