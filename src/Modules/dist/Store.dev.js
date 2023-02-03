"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _AboutSlice = _interopRequireDefault(require("../Redux/AboutSlice"));

var _BlogsHomeSlice = _interopRequireDefault(require("../Redux/BlogsHomeSlice"));

var _CompaignSlice = _interopRequireDefault(require("../Redux/CompaignSlice"));

var _ContactSlice = _interopRequireDefault(require("../Redux/ContactSlice"));

var _DepartamentSlice = _interopRequireDefault(require("../Redux/DepartamentSlice"));

var _DoctorHomeSlice = _interopRequireDefault(require("../Redux/DoctorHomeSlice"));

var _DoctorsSliece = _interopRequireDefault(require("../Redux/DoctorsSliece"));

var _NavSlice = _interopRequireDefault(require("../Redux/NavSlice"));

var _ReserSliece = _interopRequireDefault(require("../Redux/ReserSliece"));

var _SearchSlice = _interopRequireDefault(require("../Redux/SearchSlice"));

var _SliderSlice = _interopRequireDefault(require("../Redux/SliderSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _toolkit.configureStore)({
  reducer: {
    data: _DoctorsSliece["default"],
    coruselSlice: _SliderSlice["default"],
    depart: _DepartamentSlice["default"],
    homeDocSlice: _DoctorHomeSlice["default"],
    BlogSlice: _BlogsHomeSlice["default"],
    compaignSlice: _CompaignSlice["default"],
    navSlices: _NavSlice["default"],
    aboutSlices: _AboutSlice["default"],
    contactSlice: _ContactSlice["default"],
    searchSlices: _SearchSlice["default"],
    reservSliece: _ReserSliece["default"]
  }
});

exports["default"] = _default;