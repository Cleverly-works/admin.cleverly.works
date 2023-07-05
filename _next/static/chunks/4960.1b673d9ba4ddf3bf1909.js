"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4960],{94960:function(e,n,r){r.r(n);var o=r(87462),a=r(67294),l=r(24248),i=r(38485),t=function(e){return a.createElement(i.Z,(0,o.Z)({},e,{mainSize:20}),a.createElement("path",{d:"M8.92976 16.6537L7.34134 16.1927C7.17469 16.1458 7.08095 15.9713 7.12782 15.8047L10.6822 3.55894C10.7291 3.39226 10.9036 3.2985 11.0702 3.34538L12.6586 3.80635C12.8253 3.85323 12.919 4.02772 12.8722 4.1944L9.31775 16.4401C9.26828 16.6068 9.09641 16.7032 8.92976 16.6537ZM5.96124 13.7316L7.09397 12.5232C7.21375 12.3955 7.20594 12.1924 7.07314 12.0752L4.71394 9.99953L7.07314 7.92385C7.20594 7.80665 7.21635 7.60351 7.09397 7.4759L5.96124 6.26748C5.84406 6.14247 5.64616 6.13465 5.51857 6.25445L1.76626 9.77034C1.63346 9.89275 1.63346 10.1037 1.76626 10.2261L5.51857 13.7446C5.64616 13.8644 5.84406 13.8592 5.96124 13.7316ZM14.4814 13.7472L18.2337 10.2287C18.3665 10.1063 18.3665 9.89535 18.2337 9.77295L14.4814 6.25185C14.3564 6.13465 14.1585 6.13986 14.0387 6.26487L12.906 7.4733C12.7862 7.60091 12.794 7.80405 12.9268 7.92125L15.286 9.99953L12.9268 12.0752C12.794 12.1924 12.7836 12.3955 12.906 12.5232L14.0387 13.7316C14.1559 13.8592 14.3538 13.8644 14.4814 13.7472Z"}))};t.displayName="CodeBlockIcon",t.propTypes=l.Z,n.default=t},24248:function(e,n,r){var o=r(45697),a={colour:o.string,disabled:o.bool,disabledColour:o.string,fixColour:o.string,hoverColour:(0,o.oneOfType)([o.bool,o.string]),onClick:o.func,size:(0,o.oneOfType)([o.number,o.string])};n.Z=a},38485:function(e,n,r){var o,a,l,i,t=r(30168),s=r(87462),c=r(45987),u=r(67294),C=r(24237),d=["children","colour","disabled","disabledColour","hoverColour","onClick","size","translate"],b=function(e){var n=e.children,r=e.colour,o=e.disabled,a=e.disabledColour,l=e.hoverColour,i=e.onClick,t=e.size,C=e.translate,b=(0,c.Z)(e,d),f=b.mainSize;if("string"===typeof t){var v=22;switch(t){case"xxxs":v=8;break;case"xxs":v=12;break;case"xs":v=16;break;case"sm":v=20;break;case"md":v=24;break;case"lg":v=32;break;case"xl":v=36;break;case"xxl":v=40;break;case"xxxl":v=48;break;default:v=22}t=v}else t=t||22;var h=1;return f&&t!==f&&(h=Number(t/f)),u.createElement(p,(0,s.Z)({colour:r,disabled:o,disabledColour:a,hoverColour:l,onClick:i,scale:h,size:t,translate:C,xmlns:"http://www.w3.org/2000/svg"},b),n)};b.displayName="IconWrapper";var f="default",v="hover",h=function(e,n){var r=n.colour,o=n.context,a=n.disabled,l=n.disabledColour,i=n.hoverColour,t=n.theme,s=t.ICONS,c=t.THEME_COLOUR,u=o?c.context:r||s.defaultIconColour;return e===f?a&&l?l:a?s.disabledIconColour:u:e===v&&i?(!0===i&&(i=s.hoverIconColour),a&&l?l:a?s.disabledIconColour:i||s.hoverIconColour||u):a?l||s.disabledIconColour:u},p=C.ZP.svg(o||(o=(0,t.Z)(["\n  ","\n\n  path {\n    transition: fill 0.2s ease;\n\n    fill: ",";\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"])),(function(e){var n=e.size;if("number"===typeof n)return(0,C.iv)(a||(a=(0,t.Z)(["\n        height: ","px;\n        width: ","px;\n      "])),n,n)}),(function(e){return h(f,e)}),(function(e){var n=e.scale,r=e.translate;return n&&(0,C.iv)(l||(l=(0,t.Z)(["\n          transform: scale(",") ",";\n        "])),n,r||"")}),(function(e){return h(v,e)}),(function(e){var n=e.onClick,r=e.disabled;return n&&!r&&(0,C.iv)(i||(i=(0,t.Z)(["\n      cursor: pointer;\n    "])))}));n.Z=b}}]);