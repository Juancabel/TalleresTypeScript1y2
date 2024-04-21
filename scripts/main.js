import { dataSeries } from "./dataSeries.js";
import { Serie } from "./serie.js";
var seriesTbody = document.getElementById('series');
var cardBody = document.getElementById('card');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.number, "</td> <td> <button type=\"button\" class=\"btn btn-link\" id=\"").concat(c.number, "\" value=\"").concat(c.number, "\">").concat(c.name, "</button> </td> <td>").concat(c.channel, "</td> <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAVG(series) {
    var seasonsTotal = 0;
    series.forEach(function (serie) { return seasonsTotal = seasonsTotal + serie.seasons; });
    return seasonsTotal / series.length;
}
function setSerieCard(serie) {
    cardBody.innerHTML = "<img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"Card image cap\">\n                          <div class=\"card body\">\n                            <h5 class=\"card-title text-center\">").concat(serie.name, "</h5> \n                            <p class=\"card-text\">").concat(serie.synopsis, "</p>\n                            <a href=").concat(serie.webPage, " class=\"text-center\" target=\"_blank\">Pagina Web</a>\n                          </div>");
}
function setListeners() {
    var _loop_1 = function (i) {
        document.getElementById(i.toString()).addEventListener("click", function (event) { setSerieCard(dataSeries[i - 1]); });
    };
    for (var i = 1; i <= Serie.length; i++) {
        _loop_1(i);
    }
}
renderSeriesInTable(dataSeries);
setSerieCard(dataSeries[0]);
document.getElementById('avgSeasons').innerHTML = "Average Seasons: " + getSeasonsAVG(dataSeries).toString();
setListeners();
