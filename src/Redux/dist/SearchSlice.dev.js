"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getALLSearch = exports.addSearch = exports.fetchSearchSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Api = _interopRequireDefault(require("../Api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchSearchSlice = (0, _toolkit.createAsyncThunk)('searchSLice', function _callee(search) {
  var searchApi, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          searchApi = "/api/search";
          _context.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(searchApi, "/").concat(search)));

        case 3:
          response = _context.sent;
          console.log("searchfetch", response);
          return _context.abrupt("return", response.data.data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchSearchSlice = fetchSearchSlice;
var initialState = {
  fetchSearchSlice: fetchSearchSlice,
  bSearch: ''
};
var searchSlice = (0, _toolkit.createSlice)({
  name: "searchSlice",
  initialState: initialState,
  reducers: {
    addSearch: function addSearch(state, action) {
      state.data = action.payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchSearchSlice.pending, function (state, action) {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchSearchSlice.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = true;
    });
    builder.addCase(fetchSearchSlice, function (state, action) {
      state.loading = true;
      state.error = '';
      console.log("search Slice");
    });
  }
});
var addSearch = searchSlice.actions.addSearch;
exports.addSearch = addSearch;

var getALLSearch = function getALLSearch(state) {
  return state.fetchSearchSlice;
};

exports.getALLSearch = getALLSearch;
var _default = searchSlice.reducer;
exports["default"] = _default;