var replacements = {
  "#AdapterRegistry": "\"dojo/AdapterRegistry\",",
  "#aspect": "\"dojo/aspect\",",
  "#back": "\"dojo/back\",",
  "#behavior": "\"dojo/behavior\",",
  "#cache": "\"dojo/cache\",",
  "#colors": "\"dojo/colors\",",
  "#cookie": "\"dojo/cookie\",",
  "#currency": "\"dojo/currency\",",
  "#date": "\"dojo/date\",",
  "#debounce": "\"dojo/debounce\",",
  "#Deferred": "\"dojo/Deferred\",",
  "#DeferredList": "\"dojo/DeferredList\",",
  "#dojo": "\"dojo/dojo\",",
  "#dojo.profile": "\"dojo/dojo.profile\",",
  "#domAttr": "\"dojo/dom-attr\",",
  "#domClass": "\"dojo/dom-class\",",
  "#domConstruct": "\"dojo/dom-construct\",",
  "#domForm": "\"dojo/dom-form\",",
  "#domGeometry": "\"dojo/dom-geometry\",",
  "#domProp": "\"dojo/dom-prop\",",
  "#domStyle": "\"dojo/dom-style\",",
  "#dom": "\"dojo/dom\",",
  "#domReady": "\"dojo/domReady\",",
  "#Evented": "\"dojo/Evented\",",
  "#fx": "\"dojo/fx\",",
  "#gears": "\"dojo/gears\",",
  "#has": "\"dojo/has\",",
  "#hash": "\"dojo/hash\",",
  "#hccss": "\"dojo/hccss\",",
  "#html": "\"dojo/html\",",
  "#i18n": "\"dojo/i18n\",",
  "#ioQuery": "\"dojo/io-query\",",
  "#json": "\"dojo/json\",",
  "#keys": "\"dojo/keys\",",
  "#loadInit": "\"dojo/loadInit\",",
  "#main": "\"dojo/main\",",
  "#mouse": "\"dojo/mouse\",",
  "#node": "\"dojo/node\",",
  "#NodeListData": "\"dojo/NodeList-data\",",
  "#NodeListDom": "\"dojo/NodeList-dom\",",
  "#NodeListFx": "\"dojo/NodeList-fx\",",
  "#NodeListHtml": "\"dojo/NodeList-html\",",
  "#NodeListManipulate": "\"dojo/NodeList-manipulate\",",
  "#NodeListTraverse": "\"dojo/NodeList-traverse\",",
  "#NodeList": "\"dojo/NodeList\",",
  "#number": "\"dojo/number\",",
  "#on": "\"dojo/on\",",
  "#OpenAjax": "\"dojo/OpenAjax\",",
  "#parser": "\"dojo/parser\",",
  "#query": "\"dojo/query\",",
  "#ready": "\"dojo/ready\",",
  "#regexp": "\"dojo/regexp\",",
  "#request": "\"dojo/request\",",
  "#require": "\"dojo/require\",",
  "#robot": "\"dojo/robot\",",
  "#robotx": "\"dojo/robotx\",",
  "#router": "\"dojo/router\",",
  "#sniff": "\"dojo/sniff\",",
  "#Stateful": "\"dojo/Stateful\",",
  "#string": "\"dojo/string\",",
  "#tests": "\"dojo/tests\",",
  "#text": "\"dojo/text\",",
  "#throttle": "\"dojo/throttle\",",
  "#topic": "\"dojo/topic\",",
  "#touch": "\"dojo/touch\",",
  "#uacss": "\"dojo/uacss\",",
  "#when": "\"dojo/when\",",
  "#window": "\"dojo/window\",",
  "#array": "\"dojo/_base/array\",",
  "#browser": "\"dojo/_base/browser\",",
  "#Color": "\"dojo/_base/Color\",",
  "#config": "\"dojo/_base/config\",",
  "#configFirefoxExtension": "\"dojo/_base/configFirefoxExtension\",",
  "#configNode": "\"dojo/_base/configNode\",",
  "#configRhino": "\"dojo/_base/configRhino\",",
  "#configSpidermonkey": "\"dojo/_base/configSpidermonkey\",",
  "#connect": "\"dojo/_base/connect\",",
  "#declare": "\"dojo/_base/declare\",",
  "#event": "\"dojo/_base/event\",",
  "#kernel": "\"dojo/_base/kernel\",",
  "#lang": "\"dojo/_base/lang\",",
  "#loader": "\"dojo/_base/loader\",",
  "#unload": "\"dojo/_base/unload\",",
  "#url": "\"dojo/_base/url\",",
  "#xhr": "\"dojo/_base/xhr\",",
  "#firebug": "\"dojo/_firebug/firebug\",",
  "#monetary": "\"dojo/cldr/monetary\",",
  "#supplemental": "\"dojo/cldr/supplemental\",",
  "#ItemFileReadStore": "\"dojo/data/ItemFileReadStore\",",
  "#ItemFileWriteStore": "\"dojo/data/ItemFileWriteStore\",",
  "#ObjectStore": "\"dojo/data/ObjectStore\",",
  "#Identity": "\"dojo/data/api/Identity\",",
  "#Item": "\"dojo/data/api/Item\",",
  "#Notification": "\"dojo/data/api/Notification\",",
  "#Read": "\"dojo/data/api/Read\",",
  "#Request": "\"dojo/data/api/Request\",",
  "#Write": "\"dojo/data/api/Write\",",
  "#filter": "\"dojo/data/util/filter\",",
  "#simpleFetch": "\"dojo/data/util/simpleFetch\",",
  "#sorter": "\"dojo/data/util/sorter\",",
  "#locale": "\"dojo/date/locale\",",
  "#stamp": "\"dojo/date/stamp\",",
  "#autoscroll": "\"dojo/dnd/autoscroll\",",
  "#AutoSource": "\"dojo/dnd/AutoSource\",",
  "#Avatar": "\"dojo/dnd/Avatar\",",
  "#common": "\"dojo/dnd/common\",",
  "#Container": "\"dojo/dnd/Container\",",
  "#Manager": "\"dojo/dnd/Manager\",",
  "#move": "\"dojo/dnd/move\",",
  "#Moveable": "\"dojo/dnd/Moveable\",",
  "#Mover": "\"dojo/dnd/Mover\",",
  "#Selector": "\"dojo/dnd/Selector\",",
  "#Source": "\"dojo/dnd/Source\",",
  "#Target": "\"dojo/dnd/Target\",",
  "#TimedMoveable": "\"dojo/dnd/TimedMoveable\",",
  "#CancelError": "\"dojo/errors/CancelError\",",
  "#create": "\"dojo/errors/create\",",
  "#RequestError": "\"dojo/errors/RequestError\",",
  "#RequestTimeoutError": "\"dojo/errors/RequestTimeoutError\",",
  "#easing": "\"dojo/fx/easing\",",
  "#Toggler": "\"dojo/fx/Toggler\",",
  "#iframe": "\"dojo/io/iframe\",",
  "#script": "\"dojo/io/script\",",
  "#asyncEventListener": "\"dojo/on/asyncEventListener\",",
  "#all": "\"dojo/promise/all\",",
  "#first": "\"dojo/promise/first\",",
  "#instrumentation": "\"dojo/promise/instrumentation\",",
  "#Promise": "\"dojo/promise/Promise\",",
  "#tracer": "\"dojo/promise/tracer\",",
  "#default": "\"dojo/request/default\",",
  "#handlers": "\"dojo/request/handlers\",",
  "#notify": "\"dojo/request/notify\",",
  "#registry": "\"dijit/registry\",",
  "#util": "\"dojo/request/util\",",
  "#watch": "\"dojo/request/watch\",",
  "#RouterBase": "\"dojo/router/RouterBase\",",
  "#JsonpService": "\"dojo/rpc/JsonpService\",",
  "#JsonService": "\"dojo/rpc/JsonService\",",
  "#RpcService": "\"dojo/rpc/RpcService\",",
  "#_loader": "\"dojo/selector/_loader\",",
  "#acme": "\"dojo/selector/acme\",",
  "#lite": "\"dojo/selector/lite\",",
  "#Cache": "\"dojo/store/Cache\",",
  "#DataStore": "\"dojo/store/DataStore\",",
  "#JsonRest": "\"dojo/store/JsonRest\",",
  "#Memory": "\"dojo/store/Memory\",",
  "#Observable": "\"dojo/store/Observable\",",
  "#Store": "\"dojo/store/api/Store\",",
  "#QueryResults": "\"dojo/store/util/QueryResults\",",
  "#SimpleQueryEngine": "\"dojo/store/util/SimpleQueryEngine\",",
  "#_AttachMixin": "\"dijit/_AttachMixin\",",
  "#_base": "\"dijit/_base\",",
  "#_BidiMixin": "\"dijit/_BidiMixin\",",
  "#_BidiSupport": "\"dijit/_BidiSupport\",",
  "#_Calendar": "\"dijit/_Calendar\",",
  "#_ConfirmDialogMixin": "\"dijit/_ConfirmDialogMixin\",",
  "#_Contained": "\"dijit/_Contained\",",
  "#_Container": "\"dijit/_Container\",",
  "#_CssStateMixin": "\"dijit/_CssStateMixin\",",
  "#_DialogMixin": "\"dijit/_DialogMixin\",",
  "#_FocusMixin": "\"dijit/_FocusMixin\",",
  "#_HasDropDown": "\"dijit/_HasDropDown\",",
  "#_KeyNavContainer": "\"dijit/_KeyNavContainer\",",
  "#_KeyNavMixin": "\"dijit/_KeyNavMixin\",",
  "#_MenuBase": "\"dijit/_MenuBase\",",
  "#_OnDijitClickMixin": "\"dijit/_OnDijitClickMixin\",",
  "#_PaletteMixin": "\"dijit/_PaletteMixin\",",
  "#_Templated": "\"dijit/_Templated\",",
  "#_TemplatedMixin": "\"dijit/_TemplatedMixin\",",
  "#_TimePicker": "\"dijit/_TimePicker\",",
  "#_Widget": "\"dijit/_Widget\",",
  "#_WidgetBase": "\"dijit/_WidgetBase\",",
  "#_WidgetsInTemplateMixin": "\"dijit/_WidgetsInTemplateMixin\",",
  "#a11y": "\"dijit/a11y\",",
  "#a11yclick": "\"dijit/a11yclick\",",
  "#BackgroundIframe": "\"dijit/BackgroundIframe\",",
  "#Calendar": "\"dijit/Calendar\",",
  "#CalendarLite": "\"dijit/CalendarLite\",",
  "#CheckedMenuItem": "\"dijit/CheckedMenuItem\",",
  "#ColorPalette": "\"dijit/ColorPalette\",",
  "#ConfirmDialog": "\"dijit/ConfirmDialog\",",
  "#ConfirmTooltipDialog": "\"dijit/ConfirmTooltipDialog\",",
  "#Declaration": "\"dijit/Declaration\",",
  "#Destroyable": "\"dijit/Destroyable\",",
  "#Dialog": "\"dijit/Dialog\",",
  "#DialogUnderlay": "\"dijit/DialogUnderlay\",",
  "#dijitAll": "\"dijit/dijit-all\",",
  "#dijit": "\"dijit/dijit\",",
  "#dijit.profile": "\"dijit/dijit.profile\",",
  "#DropDownMenu": "\"dijit/DropDownMenu\",",
  "#Editor": "\"dijit/Editor\",",
  "#Fieldset": "\"dijit/Fieldset\",",
  "#focus": "\"dijit/focus\",",
  "#InlineEditBox": "\"dijit/InlineEditBox\",",
  "#Menu": "\"dijit/Menu\",",
  "#MenuBar": "\"dijit/MenuBar\",",
  "#MenuBarItem": "\"dijit/MenuBarItem\",",
  "#MenuItem": "\"dijit/MenuItem\",",
  "#MenuSeparator": "\"dijit/MenuSeparator\",",
  "#place": "\"dijit/place\",",
  "#popup": "\"dijit/popup\",",
  "#PopupMenuBarItem": "\"dijit/PopupMenuBarItem\",",
  "#PopupMenuItem": "\"dijit/PopupMenuItem\",",
  "#ProgressBar": "\"dijit/ProgressBar\",",
  "#RadioMenuItem": "\"dijit/RadioMenuItem\",",
  "#selection": "\"dijit/selection\",",
  "#TitlePane": "\"dijit/TitlePane\",",
  "#Toolbar": "\"dijit/Toolbar\",",
  "#ToolbarSeparator": "\"dijit/ToolbarSeparator\",",
  "#Tooltip": "\"dijit/Tooltip\",",
  "#TooltipDialog": "\"dijit/TooltipDialog\",",
  "#Tree": "\"dijit/Tree\",",
  "#typematic": "\"dijit/typematic\",",
  "#Viewport": "\"dijit/Viewport\",",
  "#WidgetSet": "\"dijit/WidgetSet\",",
  "#manager": "\"dijit/_base/manager\",",
  "#scroll": "\"dijit/_base/scroll\",",
  "#wai": "\"dijit/_base/wai\",",
  "#_Plugin": "\"dijit/_editor/_Plugin\",",
  "#range": "\"dijit/_editor/range\",",
  "#RichText": "\"dijit/_editor/RichText\",",
  "#AlwaysShowToolbar": "\"dijit/_editor/plugins/AlwaysShowToolbar\",",
  "#EnterKeyHandling": "\"dijit/_editor/plugins/EnterKeyHandling\",",
  "#FontChoice": "\"dijit/_editor/plugins/FontChoice\",",
  "#FullScreen": "\"dijit/_editor/plugins/FullScreen\",",
  "#LinkDialog": "\"dijit/_editor/plugins/LinkDialog\",",
  "#NewPage": "\"dijit/_editor/plugins/NewPage\",",
  "#Print": "\"dijit/_editor/plugins/Print\",",
  "#TabIndent": "\"dijit/_editor/plugins/TabIndent\",",
  "#TextColor": "\"dijit/_editor/plugins/TextColor\",",
  "#ToggleDir": "\"dijit/_editor/plugins/ToggleDir\",",
  "#ViewSource": "\"dijit/_editor/plugins/ViewSource\",",
  "#dndSource": "\"dijit/_tree/dndSource\",",
  "#_AutoCompleterMixin": "\"dijit/form/_AutoCompleterMixin\",",
  "#_ButtonMixin": "\"dijit/form/_ButtonMixin\",",
  "#_CheckBoxMixin": "\"dijit/form/_CheckBoxMixin\",",
  "#_ComboBoxMenu": "\"dijit/form/_ComboBoxMenu\",",
  "#_ComboBoxMenuMixin": "\"dijit/form/_ComboBoxMenuMixin\",",
  "#_DateTimeTextBox": "\"dijit/form/_DateTimeTextBox\",",
  "#_ExpandingTextAreaMixin": "\"dijit/form/_ExpandingTextAreaMixin\",",
  "#_FormMixin": "\"dijit/form/_FormMixin\",",
  "#_FormSelectWidget": "\"dijit/form/_FormSelectWidget\",",
  "#_FormValueMixin": "\"dijit/form/_FormValueMixin\",",
  "#_FormValueWidget": "\"dijit/form/_FormValueWidget\",",
  "#_FormWidget": "\"dijit/form/_FormWidget\",",
  "#_FormWidgetMixin": "\"dijit/form/_FormWidgetMixin\",",
  "#_ListBase": "\"dijit/form/_ListBase\",",
  "#_ListMouseMixin": "\"dijit/form/_ListMouseMixin\",",
  "#_RadioButtonMixin": "\"dijit/form/_RadioButtonMixin\",",
  "#_SearchMixin": "\"dijit/form/_SearchMixin\",",
  "#_Spinner": "\"dijit/form/_Spinner\",",
  "#_TextBoxMixin": "\"dijit/form/_TextBoxMixin\",",
  "#_ToggleButtonMixin": "\"dijit/form/_ToggleButtonMixin\",",
  "#Button": "\"dijit/form/Button\",",
  "#CheckBox": "\"dijit/form/CheckBox\",",
  "#ComboBox": "\"dijit/form/ComboBox\",",
  "#ComboBoxMixin": "\"dijit/form/ComboBoxMixin\",",
  "#ComboButton": "\"dijit/form/ComboButton\",",
  "#CurrencyTextBox": "\"dijit/form/CurrencyTextBox\",",
  "#DataList": "\"dijit/form/DataList\",",
  "#DateTextBox": "\"dijit/form/DateTextBox\",",
  "#DropDownButton": "\"dijit/form/DropDownButton\",",
  "#FilteringSelect": "\"dijit/form/FilteringSelect\",",
  "#Form": "\"dijit/form/Form\",",
  "#HorizontalRule": "\"dijit/form/HorizontalRule\",",
  "#HorizontalRuleLabels": "\"dijit/form/HorizontalRuleLabels\",",
  "#HorizontalSlider": "\"dijit/form/HorizontalSlider\",",
  "#MappedTextBox": "\"dijit/form/MappedTextBox\",",
  "#MultiSelect": "\"dijit/form/MultiSelect\",",
  "#NumberSpinner": "\"dijit/form/NumberSpinner\",",
  "#NumberTextBox": "\"dijit/form/NumberTextBox\",",
  "#RadioButton": "\"dijit/form/RadioButton\",",
  "#RangeBoundTextBox": "\"dijit/form/RangeBoundTextBox\",",
  "#Select": "\"dijit/form/Select\",",
  "#SimpleTextarea": "\"dijit/form/SimpleTextarea\",",
  "#Slider": "\"dijit/form/Slider\",",
  "#Textarea": "\"dijit/form/Textarea\",",
  "#TextBox": "\"dijit/form/TextBox\",",
  "#TimeTextBox": "\"dijit/form/TimeTextBox\",",
  "#ToggleButton": "\"dijit/form/ToggleButton\",",
  "#ValidationTextBox": "\"dijit/form/ValidationTextBox\",",
  "#VerticalRule": "\"dijit/form/VerticalRule\",",
  "#VerticalRuleLabels": "\"dijit/form/VerticalRuleLabels\",",
  "#VerticalSlider": "\"dijit/form/VerticalSlider\",",
  "#_ContentPaneResizeMixin": "\"dijit/layout/_ContentPaneResizeMixin\",",
  "#_LayoutWidget": "\"dijit/layout/_LayoutWidget\",",
  "#_TabContainerBase": "\"dijit/layout/_TabContainerBase\",",
  "#AccordionContainer": "\"dijit/layout/AccordionContainer\",",
  "#AccordionPane": "\"dijit/layout/AccordionPane\",",
  "#BorderContainer": "\"dijit/layout/BorderContainer\",",
  "#ContentPane": "\"dijit/layout/ContentPane\",",
  "#LayoutContainer": "\"dijit/layout/LayoutContainer\",",
  "#LinkPane": "\"dijit/layout/LinkPane\",",
  "#ScrollingTabController": "\"dijit/layout/ScrollingTabController\",",
  "#SplitContainer": "\"dijit/layout/SplitContainer\",",
  "#StackContainer": "\"dijit/layout/StackContainer\",",
  "#StackController": "\"dijit/layout/StackController\",",
  "#TabContainer": "\"dijit/layout/TabContainer\",",
  "#TabController": "\"dijit/layout/TabController\",",
  "#utils": "\"dijit/layout/utils\",",
  "#compile": "\"dijit/themes/claro/compile\",",
  "#_dndContainer": "\"dijit/tree/_dndContainer\",",
  "#_dndSelector": "\"dijit/tree/_dndSelector\",",
  "#ForestStoreModel": "\"dijit/tree/ForestStoreModel\",",
  "#model": "\"dijit/tree/model\",",
  "#ObjectStoreModel": "\"dijit/tree/ObjectStoreModel\",",
  "#TreeStoreModel": "\"dijit/tree/TreeStoreModel\",",

  "#genDeclare" : "define([\n\t\"dojo/_base/declare\"\n], \nfunction(declare){\n\treturn declare([],{\n\t})\n});"
}

var isBreakingKey = function(keyCode){
  return keyCode === 9 || keyCode === 13 || keyCode === 32;
}

var lastToken = function(s){
  var tokens = s.split(/\s/);
  var last = tokens[tokens.length -1];
  return last;
}

var replaceToken = function(editor, token){
  var replaceWith = replacements[token];
  var pos = editor.getCursorBufferPosition();
  editor.setTextInBufferRange([[pos.row, pos.column - token.length],[pos.row,pos.column]], replaceWith);
}

var checkForKeyword = function(key){
  return replacements[key] || false;
}

var getToken = function(editor){
  var pos = editor.getCursorBufferPosition();
  var line = editor.getTextInBufferRange([[pos.row, 0],[pos.row,pos.column]])
  return lastToken(line);
}

module.exports = {
  activate: function() {
    console.log(atom.workspace);
    atom.workspace.observeTextEditors(function(editor){
        var editorView = atom.views.getView(editor);
        editorView.addEventListener("keydown",  function(event){
            if(isBreakingKey(event.keyCode)){
              var token = getToken(this);
              if(checkForKeyword(token)){
                replaceToken(this, token);
              }
            }
          }.bind(editorView.getModel()))
    });
  }
};
