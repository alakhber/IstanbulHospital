"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllAboutSlice = exports.allAboutSlice = exports.fetchAboutSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Api = _interopRequireDefault(require("../Api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchAboutSlice = (0, _toolkit.createAsyncThunk)('aboutSlice/fetchAboutSlice', function _callee() {
  var aboutApi, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          aboutApi = "/api/about";
          _context.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(aboutApi)));

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
exports.fetchAboutSlice = fetchAboutSlice;
var initialState = {
  fetchAboutSlice: fetchAboutSlice
};
var aboutSlice = (0, _toolkit.createSlice)({
  name: "aboutSlice",
  initialState: initialState,
  redusers: {
    allAboutSlice: function allAboutSlice(state, _ref) {
      var payload = _ref.payload;
      state.data = payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchAboutSlice.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = true;
    });
  }
});
var allAboutSlice = aboutSlice.actions.allAboutSlice;
exports.allAboutSlice = allAboutSlice;

var getAllAboutSlice = function getAllAboutSlice(state) {
  return state.fetchAboutSlice;
};

exports.getAllAboutSlice = getAllAboutSlice;
var _default = aboutSlice.reducer;
exports["default"] = _default;