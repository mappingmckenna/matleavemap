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
            id: 'hosp',
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
            id: 'bungoona',
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
            id: 'home',
            title: 'But we spent alot of time at home',
            image: 'https://lh3.googleusercontent.com/p6nkmopmEYS0pMmOiXkz3hzZ_PHgBOGVcNm4Y88CmU61uox3jk9k8OiiUW8_N3O65O_QlPWDZLP1mzxMQQ_6Senyh35i5E-PXtLUiJvl_7IJVkqyE9RKEpwTsGzCll1gv5u0iIUPWA=w2400',
            description: 'Not pictured: sleepless nights, tears, feeding problems, sleep problems',
            location: {
                center: { lon: 151.08146, lat: -34.00251 },
                zoom: 14.11,
                pitch: 38.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
          },
        {
            id: 'thoughts',
            title: 'My original thoughts on mat leave',
            image: 'https://lh3.googleusercontent.com/E6wY4yehW2NH6gsP3kIHeCxyjHBLPdcPbyRcwN8zXGzTTPo8Du6rf0H4tRHlhBi4el49BqTYa_KQ3kLEOZCCn7f6EC1LavwhJ7Kw5SoH9RZZKiq1Raw56afFJcXu-OJJYPQXNo7O1g=w2400',
            description: 'I knew this already, but all you mums out there ARE SUPERHUMAN and deserve to be celebrated every day of the year',
            location: {
                center: { lon: 151.11490, lat: -34.03661 },
                zoom: 10.42,
                pitch: 54.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'blueys',
            title: 'We did manage to get away a few times',
            image: 'https://lh3.googleusercontent.com/018A7aaw6eCL93dhqp5T55UWW6NHsRikNJbHQjmJd96uYkQNiEb8hnJHrVMJYw00h93Z8vPltoSIfYKoh2yiV_XUppAix76O1NZL2o8FAxghESoRTM6u8jAs4BEJRma8xaCYkN8Utw=w2400',
            description: 'For a road trip up to Yamba, via blueys beach',
            location: {
                center: { lon: 152.53221, lat: -32.35166 },
                zoom: 8.57,
                pitch: 59.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'southwest',
            title: 'But we did manage to get away up the coast',
            image: 'https://lh3.googleusercontent.com/4tzq5JKHjIW-F_xFqIkSCvN0eV5SFr4yOGx21rnaHNyGNIyIm7v3NK0ckTkiMq5vA8iwnSUDL5wnubt3iFyMKSg2bA5Bmnois2aq8FgZFB5_JjL8yeqBhglvjRMX1hUG6PJXZS9VoA=w2400',
            description: 'via camping at South West Rocks, and via Bellingen. We left Yamba just before the fires hit up there in September',
            location: {
                center: { lon: 153.06848, lat: -30.88707 },
                zoom: 10.57,
                pitch: 59.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thredbo',
            title: 'And another roadtrip through through the Snowys',
            image: 'https://lh3.googleusercontent.com/lJtCJ-dSpdFS4cdwbVCpmcCmfDkm0YqmcS7jLmDGrAeqMzTZky_ngizJg94g_BLLK1-qm82EdNvYBhG6MPN2Pm6HfwLacdOvuz9VezmG4jYEhlHYitg4B_3sBHi8sP2LICLi0fuglg=w2400',
            description: 'Down to Thredo...',
            location: {
                center: { lon: 148.32443, lat: -36.42785 },
                zoom: 8.51,
                pitch: 60.00,
                bearing: 25.6
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'caves',
            title: 'And another roadtrip through through the Snowys',
            image: 'https://lh3.googleusercontent.com/l1gfVWY8ZMu8IsaoHuCFpKqpiwOQIRVBAfuiDMcBbTNnjPQDBK8yVNwP3usPlXDJ_DAQ_JFa1QVnG3Y0JIWtylGS_9QL8ZhyU21_t5o02dkJhbOZRO8PRSvxJSea-2T1fTa7dtBkFA=w2400',
            description: '..and up the alpine pass to Yarrongobilly and Tumut. Again, we were lucky to visit before the devestating fires hit out there in December',
            location: {
                center: { lon: 148.47689, lat: -35.79706 },
                zoom:  9.51,
                pitch: 0.00,
                bearing: 22.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'b2w',
            title: 'But now back to work',
            image: 'https://lh3.googleusercontent.com/vkp2WfNYpjGLD-MGTQLudjtqamgRqxsJnGX6BWv5OmC_ZTx-MZIIdsWKvZRd-8XkAHtvBNM05RtWDJrq7SU_3aGfVzE02u4-EvZijnimorK41s9YF-6DDgW15ac_7sdY_0CXSc73VQ=w2400',
            description: 'and looking forward to working with you all again. But i have another job now, and missing this face each and everyday. Thanks for staying with my story till the end!',
            location: {
                center: { lon: 151.20247, lat: -33.86987 },
                zoom: 12.55,
                pitch: 54.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
