angular
.module("loveOnTheLineApp")
.filter("formatAsLongDateTime", formatAsLongDateTime);

formatAsLongDateTime.$inject = ["$filter"];
function formatAsLongDateTime($filter) {

  function getOrdinal(dayPart) {
    var suffixes = ["th", "st", "nd", "rd"];
    var day = parseInt(dayPart, 10);
    var relevantDigits = (day < 30) ? day % 20 : day % 30;
    var ordinal = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
    return ordinal;
  }

  return function(input) {
    var dayPart = $filter("date")(input, "dd");
    var monthYearPart = $filter("date")(input, "MMM yyyy");
    var output = parseInt(dayPart, 10) + getOrdinal(dayPart) + " " + monthYearPart;
    return output;
  };
}
