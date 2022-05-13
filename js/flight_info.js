const flightInfo = {
    init: function () {

        const _this = this;

        _this.getFlightStatusList();

        _this.getArprtList();
    },

    getFlightStatusList: function () {
        $.ajax({
            url: 'http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList?ServiceKey=oR5hfjZtMqXnaQZBnlW%2Bg8hXMG3VI9t%2Fq4%2BpvndTLBqK1xd6CBOIlt2PcWJOIobw%2BmS6u92DucFUDTKQo2v2iQ%3D%3D&numOfRows=50&pageNo=1',
            type: 'GET',
            dataType: 'xml',
        }).done(function (response) {
            xmlParsing(response);
        }).fail(function (error) {
            console.log(error);
        });


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

        $(document).ready(function () {


            const realtime = new Date();
            
            $('#tp1').timepicker('setTime', realtime);
            $('#tp2').timepicker('setTime', realtime);
            
            var stHours = realtime.getHours();
            var edHours = realtime.getHours()+2;
            
            if(stHours < 10){
                stHours = "0"+stHours;
            }
            
            if(edHours < 10){
                edHours = "0"+edHours;
            }
            
            var defaultStart = stHours+":00";
            var defaultEnd = edHours+":00";
        
            
            $("#tp1").val(defaultStart);
            $("#tp2").val(defaultEnd);


            $('#timebox .time').timepicker({
                'scrollDefault': 'now',
                'orientation': 'lb',
                'listWidth': 1,
                'step': 60
            })



        });

    },


    getArprtList: function () {
        $.ajax({
            url: 'http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getArprtList?serviceKey=oR5hfjZtMqXnaQZBnlW%2Bg8hXMG3VI9t%2Fq4%2BpvndTLBqK1xd6CBOIlt2PcWJOIobw%2BmS6u92DucFUDTKQo2v2iQ%3D%3D&_type=json',
            type: 'GET',
            dataType: 'json',
        }).done(function (data) {
            console.log(data);
            const time = data.response.body.items.item;

            time.each(function (i) {
                $('#airport_name').append(`
                    <option val="${time[i].airportId}">${time[0].airportNm}</option>
                `);
            })
        }).fail(function (error) {
            console.log(error);
        });
    }
}

flightInfo.init();