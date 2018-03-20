'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RETRIEVE_FORMLIST_REQUEST = exports.RETRIEVE_FORMLIST_REQUEST = 'RETRIEVE_FORMLIST_REQUEST';
var RETRIEVE_FORMLIST_SUCCESS = exports.RETRIEVE_FORMLIST_SUCCESS = 'RETRIEVE_FORMLIST_SUCCESS';
var RETRIEVE_FORMLIST_ERROR = exports.RETRIEVE_FORMLIST_ERROR = 'RETRIEVE_FORMLIST_ERROR';

var LOAD_FORM_REQUEST = exports.LOAD_FORM_REQUEST = 'LOAD_FORM_REQUEST';
var LOAD_FORM_SUCCESS = exports.LOAD_FORM_SUCCESS = 'LOAD_FORM_SUCCESS';
var LOAD_FORM_ERROR = exports.LOAD_FORM_ERROR = 'LOAD_FORM_ERROR';
var CREATE_FORM_REQUEST = exports.CREATE_FORM_REQUEST = 'CREATE_FORM_REQUEST';
var GOTO_PAGE_SUCCESS = exports.GOTO_PAGE_SUCCESS = 'GOTO_PAGE_SUCCESS';
var EDIT_FORM_TITLE_SUCCESS = exports.EDIT_FORM_TITLE_SUCCESS = 'EDIT_FORM_TITLE_SUCCESS';
var CREATE_FORM_SUCCESS = exports.CREATE_FORM_SUCCESS = 'CREATE_FORM_SUCCESS';
var CREATE_FORM_ERROR = exports.CREATE_FORM_ERROR = 'CREATE_FORM_ERROR';
var SAVE_FORM_SUCCESS = exports.SAVE_FORM_SUCCESS = 'SAVE_FORM_SUCCESS';
var UPDATE_FORM_REQUEST = exports.UPDATE_FORM_REQUEST = 'UPDATE_FORM_REQUEST';
var UPDATE_FORM_SUCCESS = exports.UPDATE_FORM_SUCCESS = 'UPDATE_FORM_SUCCESS';
var UPDATE_FORM_ERROR = exports.UPDATE_FORM_ERROR = 'UPDATE_FORM_ERROR';
var DELETE_FORM_REQUEST = exports.DELETE_FORM_REQUEST = 'DELETE_FORM_REQUEST';
var DELETE_FORM_SUCCESS = exports.DELETE_FORM_SUCCESS = 'DELETE_FORM_SUCCESS';
var DELETE_FORM_ERROR = exports.DELETE_FORM_ERROR = 'DELETE_FORM_ERROR';

var ADD_PAGE_REQUEST = exports.ADD_PAGE_REQUEST = 'ADD_PAGE_REQUEST';
var ADD_PAGE_SUCCESS = exports.ADD_PAGE_SUCCESS = 'ADD_PAGE_SUCCESS';
var ADD_PAGE_ERROR = exports.ADD_PAGE_ERROR = 'ADD_PAGE_ERROR';
var UPDATE_PAGE_REQUEST = exports.UPDATE_PAGE_REQUEST = 'UPDATE_PAGE_REQUEST';
var UPDATE_PAGE_SUCCESS = exports.UPDATE_PAGE_SUCCESS = 'UPDATE_PAGE_SUCCESS';
var UPDATE_PAGE_ERROR = exports.UPDATE_PAGE_ERROR = 'UPDATE_PAGE_ERROR';
var DELETE_PAGE_REQUEST = exports.DELETE_PAGE_REQUEST = 'DELETE_PAGE_REQUEST';
var DELETE_PAGE_SUCCESS = exports.DELETE_PAGE_SUCCESS = 'DELETE_PAGE_SUCCESS';
var DELETE_PAGE_ERROR = exports.DELETE_PAGE_ERROR = 'DELETE_PAGE_ERROR';
var ADD_QUESTION_SUCCESS = exports.ADD_QUESTION_SUCCESS = 'ADD_QUESTION_SUCCESS';

var ADD_QUESTION_SET_SUCCESS = exports.ADD_QUESTION_SET_SUCCESS = 'ADD_QUESTION_SET_SUCCESS';
var ADD_QUESTION_ERROR = exports.ADD_QUESTION_ERROR = 'ADD_QUESTION_ERROR';
var UPDATE_QUESTION_REQUEST = exports.UPDATE_QUESTION_REQUEST = 'UPDATE_QUESTION_REQUEST';
var UPDATE_QUESTION_SUCCESS = exports.UPDATE_QUESTION_SUCCESS = 'UPDATE_QUESTION_SUCCESS';
var UPDATE_QUESTION_ERROR = exports.UPDATE_QUESTION_ERROR = 'UPDATE_QUESTION_ERROR';
var DELETE_QUESTION_SUCCESS = exports.DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS';
var DELETE_QUESTION_ERROR = exports.DELETE_QUESTION_ERROR = 'DELETE_QUESTION_ERROR';

var UPDATE_PAGE_HEADER_SUCCESS = exports.UPDATE_PAGE_HEADER_SUCCESS = 'UPDATE_PAGE_HEADER_SUCCESS';
var UPDATE_PAGE_HEADER_ERROR = exports.UPDATE_PAGE_HEADER_ERROR = 'UPDATE_PAGE_HEADER_ERROR';
var UPDATE_PAGE_TEXT_SUCCESS = exports.UPDATE_PAGE_TEXT_SUCCESS = 'UPDATE_PAGE_TEXT_SUCCESS';
var UPDATE_PAGE_TEXT_ERROR = exports.UPDATE_PAGE_TEXT_ERROR = 'UPDATE_PAGE_TEXT_ERROR';

var CHANGE_EDITING_FIELD_SUCCESS = exports.CHANGE_EDITING_FIELD_SUCCESS = 'CHANGE_EDITING_FIELD_SUCCESS';
var EDIT_PAGE_HEADER_SUCCESS = exports.EDIT_PAGE_HEADER_SUCCESS = 'EDIT_PAGE_HEADER_SUCCESS';
var EDIT_PAGE_TEXT_SUCCESS = exports.EDIT_PAGE_TEXT_SUCCESS = 'EDIT_PAGE_TEXT_SUCCESS';
var EDIT_QUESTION_SET_HEADER_SUCCESS = exports.EDIT_QUESTION_SET_HEADER_SUCCESS = 'EDIT_QUESTION_SET_HEADER_SUCCESS';
var EDIT_QUESTION_SET_TEXT_SUCCESS = exports.EDIT_QUESTION_SET_TEXT_SUCCESS = 'EDIT_QUESTION_SET_TEXT_SUCCESS';
var EDIT_QUESTION_ID_SUCCESS = exports.EDIT_QUESTION_ID_SUCCESS = 'EDIT_QUESTION_ID_SUCCESS';
var EDIT_QUESTION_SUCCESS = exports.EDIT_QUESTION_SUCCESS = 'EDIT_QUESTION_SUCCESS';
var EDIT_QUESTION_TEXT_SUCCESS = exports.EDIT_QUESTION_TEXT_SUCCESS = 'EDIT_QUESTION_TEXT_SUCCESS';
var EDIT_QUESTION_POST_TEXT_SUCCESS = exports.EDIT_QUESTION_POST_TEXT_SUCCESS = 'EDIT_QUESTION_POST_TEXT_SUCCESS';

var CHANGE_QUESTION_TYPE_SUCCESS = exports.CHANGE_QUESTION_TYPE_SUCCESS = 'CHANGE_QUESTION_TYPE_SUCCESS';
var ADD_QUESTION_OPTION_SUCCESS = exports.ADD_QUESTION_OPTION_SUCCESS = 'ADD_QUESTION_OPTION_SUCCESS';
var EDIT_QUESTION_OPTION_TEXT_SUCCESS = exports.EDIT_QUESTION_OPTION_TEXT_SUCCESS = 'EDIT_QUESTION_OPTION_TEXT_SUCCESS';
var EDIT_QUESTION_OPTION_VALUE_SUCCESS = exports.EDIT_QUESTION_OPTION_VALUE_SUCCESS = 'EDIT_QUESTION_OPTION_VALUE_SUCCESS';
var DELETE_QUESTION_OPTION_SUCCESS = exports.DELETE_QUESTION_OPTION_SUCCESS = 'DELETE_QUESTION_OPTION_SUCCESS';

var UPLOAD_JSON_SUCCESS = exports.UPLOAD_JSON_SUCCESS = 'UPLOAD_JSON_SUCCESS';

var BOOTSTRAP_CLASSES = exports.BOOTSTRAP_CLASSES = {
  input: 'form-control',
  select: 'form-control',
  question: 'form-group',
  radioListItem: 'radio',
  radioList: 'clean-list',
  checkboxInput: 'checkbox',
  checkboxListItem: 'checkbox',
  checkboxList: 'clean-list',
  controlButton: 'btn btn-primary pull-right',
  backButton: 'btn btn-default pull-left',
  errorMessage: 'alert alert-danger',
  questionPostText: 'push-top',
  buttonBar: 'button-bar'
};

var INPUT_TYPE_OPTIONS = exports.INPUT_TYPE_OPTIONS = [{
  text: 'text',
  value: 'textInput'
}, {
  text: 'select',
  value: 'selectInput'
}, {
  text: 'checkbox',
  value: 'checkboxOptionsInput'
}, {
  text: 'radio button',
  value: 'radioOptionsInput'
}];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RETRIEVE_FORMLIST_REQUEST, 'RETRIEVE_FORMLIST_REQUEST', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(RETRIEVE_FORMLIST_SUCCESS, 'RETRIEVE_FORMLIST_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(RETRIEVE_FORMLIST_ERROR, 'RETRIEVE_FORMLIST_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(LOAD_FORM_REQUEST, 'LOAD_FORM_REQUEST', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(LOAD_FORM_SUCCESS, 'LOAD_FORM_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(LOAD_FORM_ERROR, 'LOAD_FORM_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(CREATE_FORM_REQUEST, 'CREATE_FORM_REQUEST', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(GOTO_PAGE_SUCCESS, 'GOTO_PAGE_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_FORM_TITLE_SUCCESS, 'EDIT_FORM_TITLE_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(CREATE_FORM_SUCCESS, 'CREATE_FORM_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(CREATE_FORM_ERROR, 'CREATE_FORM_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(SAVE_FORM_SUCCESS, 'SAVE_FORM_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_FORM_REQUEST, 'UPDATE_FORM_REQUEST', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_FORM_SUCCESS, 'UPDATE_FORM_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_FORM_ERROR, 'UPDATE_FORM_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(DELETE_FORM_REQUEST, 'DELETE_FORM_REQUEST', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(DELETE_FORM_SUCCESS, 'DELETE_FORM_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(DELETE_FORM_ERROR, 'DELETE_FORM_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(ADD_PAGE_REQUEST, 'ADD_PAGE_REQUEST', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(ADD_PAGE_SUCCESS, 'ADD_PAGE_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(ADD_PAGE_ERROR, 'ADD_PAGE_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_PAGE_REQUEST, 'UPDATE_PAGE_REQUEST', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_PAGE_SUCCESS, 'UPDATE_PAGE_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_PAGE_ERROR, 'UPDATE_PAGE_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(DELETE_PAGE_REQUEST, 'DELETE_PAGE_REQUEST', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(DELETE_PAGE_SUCCESS, 'DELETE_PAGE_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(DELETE_PAGE_ERROR, 'DELETE_PAGE_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(ADD_QUESTION_SUCCESS, 'ADD_QUESTION_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(ADD_QUESTION_SET_SUCCESS, 'ADD_QUESTION_SET_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(ADD_QUESTION_ERROR, 'ADD_QUESTION_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_QUESTION_REQUEST, 'UPDATE_QUESTION_REQUEST', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_QUESTION_SUCCESS, 'UPDATE_QUESTION_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_QUESTION_ERROR, 'UPDATE_QUESTION_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(DELETE_QUESTION_SUCCESS, 'DELETE_QUESTION_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(DELETE_QUESTION_ERROR, 'DELETE_QUESTION_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_PAGE_HEADER_SUCCESS, 'UPDATE_PAGE_HEADER_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_PAGE_HEADER_ERROR, 'UPDATE_PAGE_HEADER_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_PAGE_TEXT_SUCCESS, 'UPDATE_PAGE_TEXT_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPDATE_PAGE_TEXT_ERROR, 'UPDATE_PAGE_TEXT_ERROR', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(CHANGE_EDITING_FIELD_SUCCESS, 'CHANGE_EDITING_FIELD_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_PAGE_HEADER_SUCCESS, 'EDIT_PAGE_HEADER_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_PAGE_TEXT_SUCCESS, 'EDIT_PAGE_TEXT_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_QUESTION_SET_HEADER_SUCCESS, 'EDIT_QUESTION_SET_HEADER_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_QUESTION_SET_TEXT_SUCCESS, 'EDIT_QUESTION_SET_TEXT_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_QUESTION_ID_SUCCESS, 'EDIT_QUESTION_ID_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_QUESTION_SUCCESS, 'EDIT_QUESTION_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_QUESTION_TEXT_SUCCESS, 'EDIT_QUESTION_TEXT_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_QUESTION_POST_TEXT_SUCCESS, 'EDIT_QUESTION_POST_TEXT_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(CHANGE_QUESTION_TYPE_SUCCESS, 'CHANGE_QUESTION_TYPE_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(ADD_QUESTION_OPTION_SUCCESS, 'ADD_QUESTION_OPTION_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_QUESTION_OPTION_TEXT_SUCCESS, 'EDIT_QUESTION_OPTION_TEXT_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(EDIT_QUESTION_OPTION_VALUE_SUCCESS, 'EDIT_QUESTION_OPTION_VALUE_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(DELETE_QUESTION_OPTION_SUCCESS, 'DELETE_QUESTION_OPTION_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(UPLOAD_JSON_SUCCESS, 'UPLOAD_JSON_SUCCESS', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(BOOTSTRAP_CLASSES, 'BOOTSTRAP_CLASSES', 'src/common/constants.js');

  __REACT_HOT_LOADER__.register(INPUT_TYPE_OPTIONS, 'INPUT_TYPE_OPTIONS', 'src/common/constants.js');
}();

;