
define("ace/theme/tmr_night", ["require", "exports", "module"], function(require, exports, module) {

    var dom = require("pilot/dom");

    var cssText = "\
.ace-tomorrow-night-eighties .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-tomorrow-night-eighties .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-tomorrow-night-eighties .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-tomorrow-night-eighties .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-tomorrow-night-eighties .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-tomorrow-night-eighties .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-tomorrow-night-eighties .ace_scroller {\
  background-color: #2D2D2D;\
}\
\
.ace-tomorrow-night-eighties .ace_text-layer {\
  cursor: text;\
  color: #CCCCCC;\
}\
\
.ace-tomorrow-night-eighties .ace_cursor {\
  border-left: 2px solid #CCCCCC;\
}\
\
.ace-tomorrow-night-eighties .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #CCCCCC;\
}\
 \
.ace-tomorrow-night-eighties .ace_marker-layer .ace_selection {\
  background: #515151;\
}\
\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #6A6A6A;\
}\
\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_active_line {\
  background: #393939;\
}\
\
       \
.ace-tomorrow-night-eighties .ace_invisible {\
  color: #6A6A6A;\
}\
\
.ace-tomorrow-night-eighties .ace_keyword {\
  color:#CC99CC;\
}\
\
.ace-tomorrow-night-eighties .ace_keyword.ace_operator {\
  color:#66CCCC;\
}\
\
.ace-tomorrow-night-eighties .ace_constant {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_constant.ace_language {\
  color:#F99157;\
}\
\
.ace-tomorrow-night-eighties .ace_constant.ace_library {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_constant.ace_numeric {\
  color:#F99157;\
}\
\
.ace-tomorrow-night-eighties .ace_invalid {\
  color:#CDCDCD;\
background-color:#F2777A;\
}\
\
.ace-tomorrow-night-eighties .ace_invalid.ace_illegal {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_invalid.ace_deprecated {\
  color:#CDCDCD;\
background-color:#CC99CC;\
}\
\
.ace-tomorrow-night-eighties .ace_support {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_support.ace_function {\
  color:#6699CC;\
}\
\
.ace-tomorrow-night-eighties .ace_function.ace_buildin {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_string {\
  color:#99CC99;\
}\
\
.ace-tomorrow-night-eighties .ace_string.ace_regexp {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_comment {\
  color:#999999;\
}\
\
.ace-tomorrow-night-eighties .ace_comment.ace_doc {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_variable {\
  color:#F2777A;\
}\
\
.ace-tomorrow-night-eighties .ace_variable.ace_language {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_xml_pe {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_meta {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_meta.ace_tag {\
  color:#F2777A;\
}\
\
.ace-tomorrow-night-eighties .ace_meta.ace_tag.ace_input {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_entity.ace_other.ace_attribute-name {\
  color:#F2777A;\
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_underline {\
    text-decoration:underline;\
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_heading {\
  color:#99CC99;\
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_heading.ace_1 {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_heading.ace_2 {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_heading.ace_3 {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_heading.ace_4 {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_heading.ace_5 {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_heading.ace_6 {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_markup.ace_list {\
  \
}\
\
.ace-tomorrow-night-eighties .ace_collab.ace_user1 {\
     \
}\
";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-tomorrow-night-eighties";
});
