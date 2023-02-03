"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllNavDepartament = exports.addNavDepartament = exports.fetchNavDepartamentsSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Api = _interopRequireDefault(require("../Api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchNavDepartamentsSlice = (0, _toolkit.createAsyncThunk)('navSLice/fetchHomeDepartamentSlice', function _callee() {
  var homeDepApi, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          homeDepApi = "/api/main/navDepartaments";
          _context.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(homeDepApi)));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchNavDepartamentsSlice = fetchNavDepartamentsSlice;
var initialState = {
  fetchNavDepartamentsSlice: {}
};
var NavDepartSlice = (0, _toolkit.createSlice)({
  name: "navSlice",
  initialState: initialState,
  reducers: {
    addNavDepartament: function addNavDepartament(state, _ref) {
      var payload = _ref.payload;
      state.data = payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchNavDepartamentsSlice.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = true;
    });
  }
});
var addNavDepartament = NavDepartSlice.actions.addNavDepartament;
exports.addNavDepartament = addNavDepartament;

var getAllNavDepartament = function getAllNavDepartament(state) {
  return state.fetchNavDepartamentsSlice;
};

exports.getAllNavDepartament = getAllNavDepartament;
var _default = NavDepartSlice.reducer;
exports["default"] = _default;