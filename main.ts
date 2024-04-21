import { dataSeries } from "./dataSeries.js";
import { Serie } from "./serie.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const cardBody:HTMLElement = document.getElementById('card')!;

function renderSeriesInTable(series: Serie[]): void{
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.number}</td> <td> <button type="button" class="btn btn-link" id="${c.number}" value="${c.number}">${c.name}</button> </td> <td>${c.channel}</td> <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getSeasonsAVG(series:Serie[]):number{
    let seasonsTotal:number = 0;
    series.forEach((serie)=> seasonsTotal=seasonsTotal+serie.seasons);
    return seasonsTotal/series.length;
}

function setSerieCard(serie:Serie):void{
    cardBody.innerHTML = `<img src="${serie.image}" class="card-img-top" alt="Card image cap">
                          <div class="card body">
                            <h5 class="card-title text-center">${serie.name}</h5> 
                            <p class="card-text">${serie.synopsis}</p>
                            <a href=${serie.webPage} class="text-center" target="_blank">Pagina Web</a>
                          </div>`;
}

function setListeners():void{
    for(let i=1;i<=Serie.length;i++){
        document.getElementById(i.toString())!.addEventListener("click", function (event) {setSerieCard(dataSeries[i-1])});
    }
}


renderSeriesInTable(dataSeries);
setSerieCard(dataSeries[0]);
document.getElementById('avgSeasons')!.innerHTML = "Average Seasons: " + getSeasonsAVG(dataSeries).toString();
setListeners();
