"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllDoctorId = exports.getAllDoctors = exports.addDoctors = exports.fetchReservation = exports.fetchdoctorDetail = exports.fetchDoctors = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _Api = _interopRequireDefault(require("../Api/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchDoctors = (0, _toolkit.createAsyncThunk)('data/fetchDoctors', function _callee() {
  var doctors, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          doctors = '/api/doctor/doctors';
          _context.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(doctors)));

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
exports.fetchDoctors = fetchDoctors;
var fetchdoctorDetail = (0, _toolkit.createAsyncThunk)('data/fetchdoctorDetail/', function _callee2(id) {
  var doctorDetails, response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          doctorDetails = '/api/doctor/detail';
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(doctorDetails, "/").concat(id)));

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
exports.fetchdoctorDetail = fetchdoctorDetail;
var fetchReservation = (0, _toolkit.createAsyncThunk)('data/fetchReservation/', function _callee3() {
  var doctorReservation, response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          doctorReservation = '/api/reservation/doctors';
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Api["default"].get("".concat(doctorReservation)));

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
exports.fetchReservation = fetchReservation;
var initialState = {
  data: {},
  fetchdoctorDetail: {},
  fetchReservation: {}
};
var doctorsSlice = (0, _toolkit.createSlice)({
  name: "data",
  initialState: initialState,
  reducers: {
    addDoctors: function addDoctors(state, _ref) {
      var payload = _ref.payload;
      state.data = payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchDoctors.pending, function (state, action) {
      state.loading = true;
      state.error = ""; // console.log("Pending")
    });
    builder.addCase(fetchDoctors.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = true;
    });
    builder.addCase(fetchDoctors.rejected, function (state, action) {
      state.loading = false;
      state.error = "Error fetching todos data";
      console.log("Rejected");
    });
    builder.addCase(fetchdoctorDetail.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchReservation.fulfilled, function (state, action) {
      state.data = action.payload;
      state.loading = false;
    });
  }
});
var addDoctors = doctorsSlice.actions.addDoctors;
exports.addDoctors = addDoctors;

var getAllDoctors = function getAllDoctors(state) {
  return state.data;
};

exports.getAllDoctors = getAllDoctors;

var getAllDoctorId = function getAllDoctorId(state) {
  return state.data.fetchdoctorDetail;
};

exports.getAllDoctorId = getAllDoctorId;
var _default = doctorsSlice.reducer;
exports["default"] = _default;