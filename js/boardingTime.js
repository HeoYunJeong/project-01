const boardingTime = {
    init: function () {
        const _this = this;

        _this.getBoardingTime();

    },

    getBoardingTime: function () {
        $.ajax({
            url: 'https://api.odcloud.kr/api/getAPRTWaitTime/v1/aprtWaitTime?page=1&perPage=10&returnType=JSON&serviceKey=oR5hfjZtMqXnaQZBnlW%2Bg8hXMG3VI9t%2Fq4%2BpvndTLBqK1xd6CBOIlt2PcWJOIobw%2BmS6u92DucFUDTKQo2v2iQ%3D%3D',
            type: 'GET',
            dataType: 'json',
        }).done(function (data) {
            console.log(data);
            // const alList = data.response.body.items.item;

            // for (let i = 0; i < alList.length; i++) {
            //     $('#airline_name').append(`<option value="">${alList[i].airlineNm}</option>`)
            // }

        }).fail(function (error) {
            console.log(error);
        });
    }







}

boardingTime.init();