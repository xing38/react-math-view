(this["webpackJsonpreact-math-view-example"]=this["webpackJsonpreact-math-view-example"]||[]).push([[0],{10:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);t(10);var o=t(0),a=t.n(o),r=t(4),c=t.n(r),l=t(1),u=(t(15),t(20),t(7)),i=t(8),s=t.n(i),d=["createHTML","customVirtualKeyboardLayers","customVirtualKeyboards","defaultMode","fontsDirectory","horizontalSpacingScale","ignoreSpacebarInMathMode","inlineShortcutTimeout","inlineShortcuts","keybindings","keypressSound","keypressVibration","letterShapeStyle","locale","macros","namespace","onBlur","onCommit","onContentDidChange","onContentWillChange","onError","onFocus","onKeystroke","onModeChange","onMoveOutOf","onReadAloudStatus","onSelectionDidChange","onSelectionWillChange","onTabOutOf","onUndoStateDidChange","onUndoStateWillChange","onVirtualKeyboardToggle","overrideDefaultInlineShortcuts","plonkSound","readAloudHook","readOnly","removeExtraneousParentheses","scriptDepth","smartFence","smartMode","smartSuperscript","speakHook","speechEngine","speechEngineRate","speechEngineVoice","strings","substituteTextArea","textToSpeechMarkup","textToSpeechRules","textToSpeechRulesOptions","virtualKeyboardLayout","virtualKeyboardMode","virtualKeyboardTheme","virtualKeyboardToggleGlyph","virtualKeyboards"],v={className:"class",htmlFor:"for",onMathFieldFocus:"onFocus",onMathFieldBlur:"onBlur"};var g=a.a.forwardRef((function(e,n){var t=Object(o.useRef)(null);Object(o.useImperativeHandle)(n,(function(){return t.current}),[t]);var r=Object(o.useMemo)((function(){return e.children?Object(u.renderToString)(e.children):e.value||""}),[e.children,e.value]),c=Object(o.useMemo)((function(){return function(e){var n={},t={};for(var o in e){var r=v[o]||o,c=e[o];d.indexOf(r)>-1?((a.a.isValidElement(c)||c instanceof Array&&c.every(a.a.isValidElement))&&(c=Object(u.renderToString)(c)),n[r]=c):t[r]=c}return[n,t]}(e)}),[e]),l=c[0],i=c[1];return function(e,n){var t=Object(o.useRef)(n);Object(o.useLayoutEffect)((function(){var o;s()(t.current,n)||(null===(o=e.current)||void 0===o||o.setOptions(n),t.current=n)}),[e,n,t])}(t,l),Object(o.useEffect)((function(){var e;null===(e=t.current)||void 0===e||e.setValue(r)}),[r]),a.a.createElement("math-field",Object.assign({},i,{onFocus:e.onFocus,onBlur:e.onBlur,onChange:void 0,ref:t}))})),h=a.a.forwardRef((function(e,n){var t=function(){var e=Object(o.useRef)(null),n=Object(o.useCallback)((function(n,t){var o=e.current;if(o){var a=Object.getOwnPropertyDescriptor(o,"value").set,r=Object.getPrototypeOf(o),c=Object.getOwnPropertyDescriptor(r,"value").set;a&&a!==c?c.call(o,t.value):a.call(o,t.value),o.dispatchEvent(new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:t}))}}),[e]);return[e,n]}(),r=t[0],l=t[1],u=Object(o.useCallback)((function(n){e.onContentDidChange&&e.onContentDidChange(n),l("change",{value:n.getValue(),mathfield:n})}),[e.onContentDidChange]);return a.a.createElement(a.a.Fragment,null,c.a.createPortal(a.a.createElement("input",{hidden:!0,ref:r,onChange:e.onChange}),function(e){var n=Object(o.useMemo)((function(){return document.createElement(e)}),[]);return Object(o.useLayoutEffect)((function(){return document.body.appendChild(n),function(){document.body.removeChild(n)}}),[n]),n}("span")),a.a.createElement(g,Object.assign({},e,{ref:n,onContentDidChange:u})))})),f=function(e){var n=Object(o.useRef)(null);return a.a.createElement(h,Object.assign({ref:n,onFocus:function(){var e;null===(e=n.current)||void 0===e||e.executeCommand("showVirtualKeyboard")},onBlur:function(){var e,t,o,a;console.log("caret",null===(e=n.current)||void 0===e?void 0:e.caretPoint),console.log("value",null===(t=n.current)||void 0===t?void 0:t.getValue("spoken"),null===(o=n.current)||void 0===o?void 0:o.getValue("latex")),null===(a=n.current)||void 0===a||a.executeCommand("hideVirtualKeyboard")},onChange:function(e){return console.log("onChange",e.nativeEvent)}},e))},m=function(e){var n=Object(o.useRef)(null);return a.a.createElement("div",{className:"inline"},a.a.createElement(h,Object.assign({onChange:function(e){return console.log("change",e.target)},className:"f1",ref:n,onBlur:function(){var e,t,o;console.log("caret",null===(e=n.current)||void 0===e?void 0:e.caretPoint),console.log("value",null===(t=n.current)||void 0===t?void 0:t.getValue("spoken"),null===(o=n.current)||void 0===o?void 0:o.getValue("latex"))}},e)),a.a.createElement("span",{onClick:function(){var e;return null===(e=n.current)||void 0===e?void 0:e.executeCommand("toggleVirtualKeyboard")},style:{width:"21px",marginTop:"4px"}},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},a.a.createElement("path",{d:"M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 336c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16V112c0-8.823 7.177-16 16-16h480c8.823 0 16 7.177 16 16v288zM168 268v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-336 80v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm384 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zM120 188v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-96 152v-8c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"}))))},b=function(e){var n=Object(o.useState)(e.value||"$$d=\\sqrt[]{x^2+y^2}$$"),t=Object(l.a)(n,2),r=t[0],c=t[1],u=Object(o.useCallback)((function(e){console.log("ControlledMathView onChange",e),c(e.nativeEvent.detail.value)}),[c]);return a.a.createElement(h,Object.assign({},e,{value:r,onChange:u}))},C=function(){var e=Object(o.useState)("\\beta"),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)("off"),u=Object(l.a)(c,2),i=u[0],s=u[1];return Object(o.useEffect)((function(){setTimeout((function(){r("a^2+b^2=c^2"),s("onfocus")}),1500)})),a.a.createElement("div",null,a.a.createElement(b,{virtualKeyboardMode:"onfocus",onKeystroke:function(e,n,t){return console.log("onKeystroke",{sender:e,key:n,event:t}),!0},onMoveOutOf:function(e,n){return console.log("onMoveOutOf",{sender:e,direction:n}),!0},onTabOutOf:function(e,n){return console.log("onTabOutOf",{sender:e,direction:n}),!1},onLoad:function(e){return console.log("onLoad",e)},onFocus:function(e){return console.log("onFocus",e)},onBlur:function(e){return console.log("onBlur",e)},onVirtualKeyboardToggle:function(e,n,t){return console.log("onVirtualKeyboardToggle",{sender:e,visible:n,keyboard:t})},onMathFieldFocus:function(e){return console.log("onMathFieldFocus",e)},onMathFieldBlur:function(e){return console.log("onMathFieldBlur",e)},onContentWillChange:function(e){return console.log("onContentWillChange",e)},onContentDidChange:function(e){return console.log("onContentDidChange",e)},onSelectionWillChange:function(e){return console.log("onSelectionWillChange",e)},onSelectionDidChange:function(e){return console.log("onSelectionDidChange",e)},onUndoStateWillChange:function(e,n){return console.log("onUndoStateWillChange",{target:e,action:n})},onUndoStateDidChange:function(e,n){return console.log("onUndoStateDidChange",{target:e,action:n})},onCommit:function(e){return console.log("onCommit",e)},onModeChange:function(e,n){return console.log("onModeChange",e,n)},onReadAloudStatus:function(e){return console.log("onReadAloudStatus",e)},onChange:function(e){return console.log("onChange",e.nativeEvent)}},"\\alpha"),a.a.createElement(f,{value:t}),a.a.createElement(h,{virtualKeyboardMode:i,className:"red"},t),a.a.createElement("p",null,a.a.createElement(f,{style:{backgroundColor:"blueviolet"},value:"\\gamma"}),a.a.createElement(f,{value:"\\delta"})),a.a.createElement(m,null,"x=\\frac{-b\\pm\\sqrt{b ^ 2 - 4ac}}{2a}"),a.a.createElement("div",{style:{margin:50}},a.a.createElement("div",null,"ControlledMathView with Callback"),a.a.createElement(b,{virtualKeyboardMode:"onfocus",onCommit:function(e){return console.log("onCommit",e)}}),a.a.createElement("div",null,"ControlledMathView ",a.a.createElement("strong",null,"without")," Callback"),a.a.createElement(b,{virtualKeyboardMode:"onfocus"}),a.a.createElement("strong",null,"check the console for logs")))};c.a.render(a.a.createElement(C,null),document.getElementById("root"))},9:function(e,n,t){e.exports=t(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.d57861a2.chunk.js.map