    window.onload = function () {
            var myLatlng = new google.maps.LatLng(4.809444, -74.1025);
            var opciones = {
                center: myLatlng,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };

            var mapaCota = new google.maps.Map(document.getElementById('map'), opciones);

            var cuevaZorros = new google.maps.Marker({
                position: new google.maps.LatLng(4.832823, -74.1047187),
                map: mapaCota,
                title: 'Cueva de los Zorros'

            });
            cuevaZorros.setMap(mapaCota);

            var contentCadena = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Cueva de los Zorros</h1>' +
                '<div id="bodyContent">' +
                '<p><b>Cueva de los Zorros</b>, tambien referida a <b>Ayers Rock</b>, el paridero ' +
                'sandstone rock formation in the southern part of the ' +
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
                'south west of the nearest large town, Alice Springs; 450&#160;km ' +
                '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
                'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
                'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
                'Aboriginal people of the area. It has many springs, waterholes, ' +
                'rock caves and ancient paintings. Uluru is listed as a World ' +
                'Heritage Site.</p>' +
                '<p>Attribution: Cueva de los Zorros, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
                '(last visited June 22, 2009).</p>' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
