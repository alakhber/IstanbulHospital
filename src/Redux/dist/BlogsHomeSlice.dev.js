"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllBlogInfo = exports.getAllBlogs = exports.addBlogsHome = exports.fetchBlogSlice = exports.fetchBlogsHomeSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Api = _interopRequireDefault(require("../Api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchBlogsHomeSlice = (0, _toolkit.createAsyncThunk)('blogsSlice/fetchBlogsHomeSlice', function _callee() {
  var BlogApi, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          BlogApi = "/api/blog/blogs";
          _context.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(BlogApi)));

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
exports.fetchBlogsHomeSlice = fetchBlogsHomeSlice;
var fetchBlogSlice = (0, _toolkit.createAsyncThunk)('blogsSlice/fetchblogSlice', function _callee2(id) {
  var bloqAPI, response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          bloqAPI = "/api/blog/detail";
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(bloqAPI, "/").concat(id)));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data.data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.fetchBlogSlice = fetchBlogSlice;
var initialState = {
  fetchBlogsHomeSlice: {},
  fetchBlogSlice: {}
};
var blogsHomeSlice = (0, _toolkit.createSlice)({
  name: "blogsSlice",
  initialState: initialState,
  reducers: {
    addBlogsHome: function addBlogsHome(state, _ref) {
      var payload = _ref.payload;
      state.data = payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchBlogsHomeSlice.pending, function (state, actions) {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchBlogsHomeSlice.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = "true blogs";
    });
    builder.addCase(fetchBlogsHomeSlice.rejected, function (state, action) {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchBlogSlice.fulfilled, function (state, action) {
      state.data = action.payload;
    });
  }
});
var addBlogsHome = blogsHomeSlice.actions.addBlogsHome;
exports.addBlogsHome = addBlogsHome;

var getAllBlogs = function getAllBlogs(state) {
  return state.fetchBlogsHomeSlice;
};

exports.getAllBlogs = getAllBlogs;

var getAllBlogInfo = function getAllBlogInfo(state) {
  return state.fetchBlogSlice;
};

exports.getAllBlogInfo = getAllBlogInfo;
var _default = blogsHomeSlice.reducer;
exports["default"] = _default;