const airportParking = {
    init: function () {
        $.ajax({
            url: 'http://openapi.airport.co.kr/service/rest/AirportParking/airportparkingRT?serviceKey=oR5hfjZtMqXnaQZBnlW%2Bg8hXMG3VI9t%2Fq4%2BpvndTLBqK1xd6CBOIlt2PcWJOIobw%2BmS6u92DucFUDTKQo2v2iQ%3D%3D',
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

    var parking = ``;
    $(data).find('item').each(function (index, item) {
        //console.log(item);
        parking += `
            <option value="${data}">${$(this).find('aprKor').text()} ${$(this).find('parkingAirportCodeName').text()}</option>
        `;
    });
    $('#airport_name').append(parking);

}

airportParking.init();