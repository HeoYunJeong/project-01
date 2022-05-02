const yunjeong = {
    init: function () {
        $.ajax({
            url: 'http://openapi.airport.co.kr/service/rest/AirportParking/airportparkingRT?serviceKey=oR5hfjZtMqXnaQZBnlW%2Bg8hXMG3VI9t%2Fq4%2BpvndTLBqK1xd6CBOIlt2PcWJOIobw%2BmS6u92DucFUDTKQo2v2iQ%3D%3D',
            type: 'GET',
            dataType: 'xml',
        }).done(function (response) {
            console.log(response);
            xmlParsing(response);
        }).fail(function (error) {
            console.log("바부ㅋㅋ");
        });
    }
}


function xmlParsing(data) {
    var parking = ``;
    $(data).find('item').each(function (index, item) {
        //console.log(item);
        parking += `
                <div class="each-status">
                    <h3>${$(this).find('parkingAirportCodeName').text()}</h3>
                    <p>전체 주차면 수 <span>${$(this).find('parkingFullSpace').text()}</span>대</p>
                    <p>현재 주차 가능면 수 <span>${($(this).find('parkingFullSpace').text() - $(this).find('parkingIstay').text())}</span>대</p>
                </div>
        `;
        $('#parkingStatus').empty().append(parking);
    });

}

yunjeong.init();