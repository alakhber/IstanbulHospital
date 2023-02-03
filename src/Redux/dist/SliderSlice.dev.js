"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GetAllSliders = exports.addSliders = exports.fetchSlider = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Api = _interopRequireDefault(require("../Api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchSlider = (0, _toolkit.createAsyncThunk)('sliderSlice/fetchSlider', function _callee() {
  var sliderApi, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sliderApi = "/api/home/slider";
          _context.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(sliderApi)));

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
exports.fetchSlider = fetchSlider;
var initialState = {
  fetchSlider: {}
};
var sliderSlice = (0, _toolkit.createSlice)({
  name: "sliderSlice",
  initialState: initialState,
  reducers: {
    addSliders: function addSliders(state, _ref) {
      var payload = _ref.payload;
      state.data = payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchSlider.pending, function (state, actions) {
      state.loading = true;
      state.error = ""; // console.log("pending slider")
    });
    builder.addCase(fetchSlider.fulfilled, function (state, action) {
      state.data = action.payload;
      state.error = ""; // console.log("silder fulfilled")
    });
    builder.addCase(fetchSlider.rejected, function (state, action) {
      state.loading = true;
      state.error = "";
      console.log(" slicer silece rejected");
    });
  }
});
var addSliders = sliderSlice.actions.addSliders; // export const getAllSliderSlice = (state) => state.data;

exports.addSliders = addSliders;

var GetAllSliders = function GetAllSliders(state) {
  return state.data.fetchSlider;
};

exports.GetAllSliders = GetAllSliders;
var _default = sliderSlice.reducer;
exports["default"] = _default;