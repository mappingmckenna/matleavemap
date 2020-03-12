var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZWwtcyIsImEiOiJjazdteGc3MDYwaWx2M2RxbTI4M2x5ZDRlIn0.BjC1UivJk2t0b-8ivJafNQ',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'A matleave map',
    //subtitle: 'A matleave map',
    byline: 'Warning, baby spam to follow',
    footer: '',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Born at Sutherland Hospital',
            image: 'https://lh3.googleusercontent.com/e_TUD7Zr_0SmqBgLZEdu8II_D01RirC2DMWgnRAKSTPvXuQIthH3O7ADMjdG7FjZUvU8qkglNqjVeoCb6ayG9-iBljVxd7X_fio83fY5BY2aewAUDwJTzINuvfB5IbMWujiUaem6_w=w2400',
            description: 'In April 19, after 17 hours of labour... and thats all i will say about that',
            location: {
                center: { lon: 151.11490, lat: -34.03661 },
                zoom: 14.11,
                pitch: 54.50,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Still in shellshock',
            image: 'https://lh3.googleusercontent.com/TCUFgtj8jr04JAA8D4dpgKHTYABosHqfnf0mNGVcM-wfu5DTLNEfrPBOROJKuYbyS3U2GVWicNc8YzsQdmVEXn-wZZCgWQOtRmKyBhMXygeG-RwogBNo5Dy4GT3xRTmT4v6NUBnE5A=w2400',
            description: 'But getting into nature helped. This is his first bushwalk, in the RNP',
            location: {
              center: { lon: 151.06152, lat: -34.06264 },
              zoom: 11.32,
              pitch: 45.00,
              bearing: 3.25
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'But we spent alot of time at home',
            https: '//lh3.googleusercontent.com/ayLWzd8PLyAKA6kCtXv4kixFlzYHNKUJl5s-3G5TNjvWNN8L5OUP7F99RgwQ4svH9tdjqqdWbL2mDJ9BtR7wumzXN8BaqQxObtAqKDQV0kUK3YtaCv8XPI6HKV9AT1dT1F2e2MluHQ=w2400',
            description: 'Not pictured: sleepless nights, tears, feeding problems, sleep problems, ',
            location: {
              center: { lon: 151.08067, lat: -34.00225 },
                zoom: 9.43,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
