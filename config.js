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
            description: 'On April 19, after 17 hours of labour... and thats all i will say about that',
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
            https: 'https://lh3.googleusercontent.com/p6nkmopmEYS0pMmOiXkz3hzZ_PHgBOGVcNm4Y88CmU61uox3jk9k8OiiUW8_N3O65O_QlPWDZLP1mzxMQQ_6Senyh35i5E-PXtLUiJvl_7IJVkqyE9RKEpwTsGzCll1gv5u0iIUPWA=w2400',
            description: 'Not pictured: sleepless nights, tears, feeding problems, sleep problems',
            location: {
              center: { lon: 151.08067, lat: -34.00225 },
                zoom: 9.43,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'My original thoughts on mat leave',
            https: 'https://lh3.googleusercontent.com/b4F88OBL9KR1micV3s3EI3UC1gF9Yg1CSYlBhb1AR05xEkQHcLbiH40LW_eLHJ_n5m1NscQ2qU6vVLOvbGgE_Xq756yoTi-VgV36-Qb9XK0H5ueEcUK5YGE0td-Htw7IFM5i02zOlQ=w2400',
            description: 'I knew this already, but all you mums out there ARE SUPERHUMAN and deserve to be celebrated every day of the year',
            location: {
              center: { lon: 150.96572, lat: -34.10155 },
              zoom: 7.65,
              pitch: 0.50,
              bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'We did manage to get away a few times',
            https: 'https://lh3.googleusercontent.com/018A7aaw6eCL93dhqp5T55UWW6NHsRikNJbHQjmJd96uYkQNiEb8hnJHrVMJYw00h93Z8vPltoSIfYKoh2yiV_XUppAix76O1NZL2o8FAxghESoRTM6u8jAs4BEJRma8xaCYkN8Utw=w2400',
            description: 'For a road trip up to Yamba, via blueys beach',
            location: {
              center: { lon: 152.49518, lat: -32.35828 },
              zoom: 7.65,
              pitch: 0.50,
              bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'But we did manage to get away up the coast',
            https: 'https://lh3.googleusercontent.com/4tzq5JKHjIW-F_xFqIkSCvN0eV5SFr4yOGx21rnaHNyGNIyIm7v3NK0ckTkiMq5vA8iwnSUDL5wnubt3iFyMKSg2bA5Bmnois2aq8FgZFB5_JjL8yeqBhglvjRMX1hUG6PJXZS9VoA=w2400',
            description: 'via camping at South West Rocks, and via Bellingen. We left Yamba just before the fires hit up there in September',
            location: {
              center: { lon: 153.02725, lat: -30.91969 },
              zoom: 7.65,
              pitch: 0.50,
              bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
