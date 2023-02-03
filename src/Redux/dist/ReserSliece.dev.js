"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllReserAPI = exports.addReserDoctorAPi = exports.fetchReserDoctors = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Api = _interopRequireDefault(require("../Api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchReserDoctors = (0, _toolkit.createAsyncThunk)('reservation/fetchReservations', function _callee() {
  var reserAPI, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          reserAPI = "/api/reservation/doctors";
          _context.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(reserAPI)));

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
exports.fetchReserDoctors = fetchReserDoctors;
var initialState = {
  fetchReserDoctors: {}
};
var reserSliece = (0, _toolkit.createSlice)({
  name: "reservation",
  initialState: initialState,
  reducer: {
    addReserDoctorAPi: function addReserDoctorAPi(state, _ref) {
      var payload = _ref.payload;
      state.data = payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchReserDoctors.pending, function (state, action) {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchReserDoctors.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = true;
    });
    builder.addCase(fetchReserDoctors.rejected, function (state, action) {
      state.loading = false;
      state.error = "Error fetching reserData data";
      console.log("Rejected");
    });
  }
});
var addReserDoctorAPi = reserSliece.actions.addReserDoctorAPi;
exports.addReserDoctorAPi = addReserDoctorAPi;

var getAllReserAPI = function getAllReserAPI(state) {
  return state.fetchReserDoctors;
};

exports.getAllReserAPI = getAllReserAPI;
var _default = reserSliece.reducer;
exports["default"] = _default;