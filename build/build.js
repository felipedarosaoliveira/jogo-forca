!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const n=document.querySelector("#forca");document.querySelector("#btnNext"),document.querySelector("#btnPrevious");new class{constructor(e){this.el=e,this.imagens=["resources/imagens/forca01.png","resources/imagens/forca02.png","resources/imagens/forca03.png","resources/imagens/forca04.png","resources/imagens/forca05.png","resources/imagens/forca06.png","resources/imagens/forca07.png","resources/imagens/forca08.png"],this.atual=0}getImagem(){return this.imagens[this.atual]}next(e){this.atual<7&&this.atual++,this.update()}previous(e){this.atual>0&&this.atual--,this.update()}bind(e){this.elImage=this.el.querySelector("img"),this.btnNext=e.querySelector("#btnNext"),this.btnPrevious=e.querySelector("#btnPrevious"),this.btnNext.addEventListener("click",e=>this.next(e)),this.btnPrevious.addEventListener("click",e=>this.previous(e))}render(){const e=`\n      <div>\n        <img src="${this.getImagem()}">\n      </div>\n      <button id="btnPrevious">Anterior</button>\n      <button id="btnNext">Próximo</button>\n    `;this.el.innerHTML=e,this.bind(this.el)}update(){this.elImage.src=this.getImagem()}}(n).render()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZm9yY2EvZm9yY2EudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIltvYmplY3QgT2JqZWN0XSIsInRoaXMiLCJpbWFnZW5zIiwiYXR1YWwiLCJldmVudCIsInVwZGF0ZSIsImVsSW1hZ2UiLCJidG5OZXh0IiwiYnRuUHJldmlvdXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm5leHQiLCJwcmV2aW91cyIsInRlbXBsYXRlIiwiZ2V0SW1hZ2VtIiwiaW5uZXJIVE1MIiwic3JjIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxLQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLElBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsWUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsR0FBMENLLFlBQUEsRUFBQUMsSUFBQUwsS0FLMUNaLEVBQUFrQixFQUFBLFNBQUFoQixHQUNBLG9CQUFBaUIsZUFBQUMsYUFDQU4sT0FBQUMsZUFBQWIsRUFBQWlCLE9BQUFDLGFBQXdEQyxNQUFBLFdBRXhEUCxPQUFBQyxlQUFBYixFQUFBLGNBQWlEbUIsT0FBQSxLQVFqRHJCLEVBQUFzQixFQUFBLFNBQUFELEVBQUFFLEdBRUEsR0FEQSxFQUFBQSxJQUFBRixFQUFBckIsRUFBQXFCLElBQ0EsRUFBQUUsRUFBQSxPQUFBRixFQUNBLEtBQUFFLEdBQUEsaUJBQUFGLFFBQUFHLFdBQUEsT0FBQUgsRUFDQSxJQUFBSSxFQUFBWCxPQUFBWSxPQUFBLE1BR0EsR0FGQTFCLEVBQUFrQixFQUFBTyxHQUNBWCxPQUFBQyxlQUFBVSxFQUFBLFdBQXlDVCxZQUFBLEVBQUFLLFVBQ3pDLEVBQUFFLEdBQUEsaUJBQUFGLEVBQUEsUUFBQU0sS0FBQU4sRUFBQXJCLEVBQUFVLEVBQUFlLEVBQUFFLEVBQUEsU0FBQUEsR0FBZ0gsT0FBQU4sRUFBQU0sSUFBcUJDLEtBQUEsS0FBQUQsSUFDckksT0FBQUYsR0FJQXpCLEVBQUE2QixFQUFBLFNBQUExQixHQUNBLElBQUFTLEVBQUFULEtBQUFxQixXQUNBLFdBQTJCLE9BQUFyQixFQUFBLFNBQzNCLFdBQWlDLE9BQUFBLEdBRWpDLE9BREFILEVBQUFVLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVosRUFBQWEsRUFBQSxTQUFBaUIsRUFBQUMsR0FBc0QsT0FBQWpCLE9BQUFrQixVQUFBQyxlQUFBMUIsS0FBQXVCLEVBQUFDLElBR3REL0IsRUFBQWtDLEVBQUEsR0FJQWxDLElBQUFtQyxFQUFBLHlDQ2hGQSxNQUFNQyxFQUFhQyxTQUFTQyxjQUFjLFVBQ2RELFNBQVNDLGNBQWMsWUFDbkJELFNBQVNDLGNBQWMsZ0JBQ3pDLFVDTVpDLFlBQVlILEdBQ1ZJLEtBQUtKLEdBQUtBLEVBQ1ZJLEtBQUtDLFNBQ0gsZ0NBQ0EsZ0NBQ0EsZ0NBQ0EsZ0NBQ0EsZ0NBQ0EsZ0NBQ0EsZ0NBQ0EsaUNBRUZELEtBQUtFLE1BQVEsRUFHZkgsWUFDRSxPQUFPQyxLQUFLQyxRQUFRRCxLQUFLRSxPQUczQkgsS0FBS0ksR0FDQUgsS0FBS0UsTUFBUSxHQUNkRixLQUFLRSxRQUVQRixLQUFLSSxTQUdQTCxTQUFTSSxHQUNKSCxLQUFLRSxNQUFRLEdBQ2RGLEtBQUtFLFFBRVBGLEtBQUtJLFNBR0NMLEtBQUtILEdBQ1hJLEtBQUtLLFFBQVVMLEtBQUtKLEdBQUdFLGNBQWMsT0FDckNFLEtBQUtNLFFBQVVWLEVBQUdFLGNBQWMsWUFDaENFLEtBQUtPLFlBQWNYLEVBQUdFLGNBQWMsZ0JBQ3BDRSxLQUFLTSxRQUFRRSxpQkFBaUIsUUFBU0MsR0FBTVQsS0FBS1UsS0FBS0QsSUFDdkRULEtBQUtPLFlBQVlDLGlCQUFpQixRQUFTQyxHQUFJVCxLQUFLVyxTQUFTRixJQUcvRFYsU0FDRSxNQUFNYSxzQ0FFVVosS0FBS2EsbUlBS3JCYixLQUFLSixHQUFHa0IsVUFBWUYsRUFDcEJaLEtBQUtaLEtBQUtZLEtBQUtKLElBSWpCRyxTQUNFQyxLQUFLSyxRQUFRVSxJQUFNZixLQUFLYSxjRDdESmpCLEdBQ2xCb0IiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQge0ZvcmNhLEVsZW1lbnR9IGZyb20gJy4vZm9yY2EvZm9yY2EnO1xyXG5cclxuY29uc3QgZWw6RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JjYScpO1xyXG5jb25zdCBidG5OZXh0OkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5OZXh0XCIpO1xyXG5jb25zdCBidG5QcmV2aW91czpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuUHJldmlvdXNcIik7XHJcbmNvbnN0IGZvcmNhID0gbmV3IEZvcmNhKGVsKTtcclxuZm9yY2EucmVuZGVyKCk7IFxyXG4iLCJleHBvcnQgY2xhc3MgRm9yY2F7XHJcblxyXG4gIHByaXZhdGUgaW1hZ2VuczpzdHJpbmdbXTtcclxuICBwcml2YXRlIGF0dWFsOm51bWJlcjtcclxuICBwcml2YXRlIHBhbGF2cmE6c3RyaW5nO1xyXG4gIHByaXZhdGUgcGFscGl0ZXM6c3RyaW5nW107XHJcbiAgcHJpdmF0ZSBlbDpFbGVtZW50O1xyXG4gIHByaXZhdGUgZWxJbWFnZTpFbGVtZW50O1xyXG4gIHByaXZhdGUgYnRuTmV4dDpFbGVtZW50O1xyXG4gIHByaXZhdGUgYnRuUHJldmlvdXM6RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWw6RWxlbWVudCl7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgICB0aGlzLmltYWdlbnMgPSBbXHJcbiAgICAgIFwicmVzb3VyY2VzL2ltYWdlbnMvZm9yY2EwMS5wbmdcIixcclxuICAgICAgXCJyZXNvdXJjZXMvaW1hZ2Vucy9mb3JjYTAyLnBuZ1wiLFxyXG4gICAgICBcInJlc291cmNlcy9pbWFnZW5zL2ZvcmNhMDMucG5nXCIsXHJcbiAgICAgIFwicmVzb3VyY2VzL2ltYWdlbnMvZm9yY2EwNC5wbmdcIixcclxuICAgICAgXCJyZXNvdXJjZXMvaW1hZ2Vucy9mb3JjYTA1LnBuZ1wiLFxyXG4gICAgICBcInJlc291cmNlcy9pbWFnZW5zL2ZvcmNhMDYucG5nXCIsXHJcbiAgICAgIFwicmVzb3VyY2VzL2ltYWdlbnMvZm9yY2EwNy5wbmdcIixcclxuICAgICAgXCJyZXNvdXJjZXMvaW1hZ2Vucy9mb3JjYTA4LnBuZ1wiLFxyXG4gICAgXTtcclxuICAgIHRoaXMuYXR1YWwgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2VtKCk6c3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMuaW1hZ2Vuc1t0aGlzLmF0dWFsXTtcclxuICB9XHJcblxyXG4gIG5leHQoZXZlbnQ6RXZlbnQpOnZvaWR7XHJcbiAgICBpZih0aGlzLmF0dWFsIDwgNyl7XHJcbiAgICAgIHRoaXMuYXR1YWwrKztcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcmV2aW91cyhldmVudD86RXZlbnQpOnZvaWR7XHJcbiAgICBpZih0aGlzLmF0dWFsID4gMCl7XHJcbiAgICAgIHRoaXMuYXR1YWwtLTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmQoZWw6RWxlbWVudCl7XHJcbiAgICB0aGlzLmVsSW1hZ2UgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgdGhpcy5idG5OZXh0ID0gZWwucXVlcnlTZWxlY3RvcignI2J0bk5leHQnKTtcclxuICAgIHRoaXMuYnRuUHJldmlvdXMgPSBlbC5xdWVyeVNlbGVjdG9yKCcjYnRuUHJldmlvdXMnKTtcclxuICAgIHRoaXMuYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHRoaXMubmV4dChlKSk7XHJcbiAgICB0aGlzLmJ0blByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PnRoaXMucHJldmlvdXMoZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz1cIiR7dGhpcy5nZXRJbWFnZW0oKX1cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJidG5QcmV2aW91c1wiPkFudGVyaW9yPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJidG5OZXh0XCI+UHLDs3hpbW88L2J1dHRvbj5cclxuICAgIGA7XHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xyXG4gICAgdGhpcy5iaW5kKHRoaXMuZWwpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTp2b2lke1xyXG4gICAgdGhpcy5lbEltYWdlLnNyYyA9IHRoaXMuZ2V0SW1hZ2VtKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50e1xyXG4gIGlubmVySFRNTD86c3RyaW5nO1xyXG4gIGlubmVyVGV4dD86c3RyaW5nO1xyXG4gIHNyYz86c3RyaW5nO1xyXG4gIHF1ZXJ5U2VsZWN0b3IocXVlcnk6c3RyaW5nKTpFbGVtZW50O1xyXG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZTpzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=