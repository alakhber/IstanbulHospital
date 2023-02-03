"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllDeparInfo = exports.getAlletchthreeDeparSlice = exports.getAllDepartamnet = exports.addDepartament = exports.fetchDeparInfoSlice = exports.fetchthreeDeparSlice = exports.fetchDeparSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Api = _interopRequireDefault(require("../Api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchDeparSlice = (0, _toolkit.createAsyncThunk)('depSlice/fetchDeparSlice', function _callee() {
  var deparApi, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          deparApi = "/api/department/departments";
          _context.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(deparApi)));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchDeparSlice = fetchDeparSlice;
var fetchthreeDeparSlice = (0, _toolkit.createAsyncThunk)('depSlice/fetchDeparSlice', function _callee2() {
  var deparApi, response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          deparApi = "/api/home/departments";
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(deparApi)));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.fetchthreeDeparSlice = fetchthreeDeparSlice;
var fetchDeparInfoSlice = (0, _toolkit.createAsyncThunk)('depSLice/fetchDeparSlice/', function _callee3(id) {
  var deparInfoAPI, response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          deparInfoAPI = '/api/department/detail';
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(deparInfoAPI, "/").concat(id)));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data.data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.fetchDeparInfoSlice = fetchDeparInfoSlice;
var initialState = {
  fetchDeparSlice: {},
  fetchthreeDeparSlice: {},
  fetchDeparInfoSlice: {}
};
var departamentSlice = (0, _toolkit.createSlice)({
  name: "depSlice",
  initialState: initialState,
  reducers: {
    addDepartament: function addDepartament(state, _ref) {
      var payload = _ref.payload;
      state.data = payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchDeparSlice.pending, function (state, acton) {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeparSlice.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = true;
    });
    builder.addCase(fetchDeparSlice.rejected, function (state, action) {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDeparInfoSlice.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = true;
    });
  }
});
var addDepartament = departamentSlice.actions.addDepartament;
exports.addDepartament = addDepartament;

var getAllDepartamnet = function getAllDepartamnet(state) {
  return state.fetchDeparSlice;
};

exports.getAllDepartamnet = getAllDepartamnet;

var getAlletchthreeDeparSlice = function getAlletchthreeDeparSlice(state) {
  return state.fetchthreeDeparSlice;
};

exports.getAlletchthreeDeparSlice = getAlletchthreeDeparSlice;

var getAllDeparInfo = function getAllDeparInfo(state) {
  return state.fetchDeparInfoSlice;
};

exports.getAllDeparInfo = getAllDeparInfo;
var _default = departamentSlice.reducer;
exports["default"] = _default;