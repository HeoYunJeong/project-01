const flightInfo = {
    init: function () {
        $.ajax({
            url: 'http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList?ServiceKey=oR5hfjZtMqXnaQZBnlW%2Bg8hXMG3VI9t%2Fq4%2BpvndTLBqK1xd6CBOIlt2PcWJOIobw%2BmS6u92DucFUDTKQo2v2iQ%3D%3D&numOfRows=50&pageNo=5',
            type: 'GET',
            dataType: 'xml',
        }).done(function (response) {
            console.log(response);
            xmlParsing(response);
        }).fail(function (error) {
            console.log(error);
        });
    }
}


function xmlParsing(data) {

    var realtime = ``;
    $(data).find('item').each(function (index, item) {

        realtime += `
            <li class="data-list row">
                <p class="col">${$(this).find('std').text()}</p>
                <p class="col">${$(this).find('etd').text()}</p>
                <p class="col">${$(this).find('boardingKor').text()}</p>
                <p class="col">${$(this).find('arrivedKor').text()}</p>
                <p class="col">${$(this).find('airlineKorean').text()}</p>
                <p class="col">${$(this).find('airFln').text()}</p>
            </li>
        `;
    });
    $('#data_form').append(realtime);

}



flightInfo.init();