"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllContactSlice = exports.AllContactSlice = exports.fecthContactSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Api = _interopRequireDefault(require("../Api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fecthContactSlice = (0, _toolkit.createAsyncThunk)('contactSlice/fecthContactSlice', function _callee() {
  var contactApi, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          contactApi = "/api/main/contact";
          _context.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(contactApi)));

        case 3:
          response = _context.sent;
          console.log('ConAPI', response.data);
          return _context.abrupt("return", response.data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fecthContactSlice = fecthContactSlice;
var initialState = {
  fecthContactSlice: {}
};
var contactSlice = (0, _toolkit.createSlice)({
  name: "contactSlice",
  initialState: initialState,
  reducers: {
    AllContactSlice: function AllContactSlice(state, _ref) {
      var payload = _ref.payload;
      state.data = payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fecthContactSlice.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = true;
    });
  }
});
var AllContactSlice = contactSlice.actions.AllContactSlice;
exports.AllContactSlice = AllContactSlice;

var getAllContactSlice = function getAllContactSlice(state) {
  return state.fecthContactSlice;
};

exports.getAllContactSlice = getAllContactSlice;
var _default = contactSlice.reducer;
exports["default"] = _default;