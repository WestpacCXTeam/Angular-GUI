# gui-directives
Angularjs directives for Westpac GUI
http://thewestpacgroup-gel.io/

Add the module gui.directives to your angular app:

```
angular.module('myAppModule', ['gui.directives']);
```

## Alertbox

using:
http://thewestpacgroup-gel.io/GUI/WBC/alerts/

Examples:

```
<gui-alert-box close-button="false" type="danger">
	I'm a danger alert.
</gui-alert-box>
```

```
<gui-alert-box close-button="true" type="success">
	I'm a success alert and you can close me.
</gui-alert-box>
```

```
<gui-alert-box close-button="true" type="warning" is-closed="false">
	I'm a warning alert and I can be close by default
</gui-alert-box>
```

## Dropdown

## Modals

## Popovers

## Tabcordions

## Tooltips
