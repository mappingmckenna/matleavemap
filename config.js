var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZWwtcyIsImEiOiJjazdteGc3MDYwaWx2M2RxbTI4M2x5ZDRlIn0.BjC1UivJk2t0b-8ivJafNQ',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Wils story',
    subtitle: 'A matleave map',
    byline: 'By Elise',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: 'https://lh3.googleusercontent.com/mNT4dsy3_sn00hNtLRNU9dZQ1qa2tN9ePhkpPfrfCGzlUDz0y4R0owCyvfVH5kh9MTeV3WfyOc8faR1byVJCCSbM6ht0ONG-4WI_sS-PqoS8rT84Ggyp4cZ41QJUGgf-zklgyifXuQ=w2400',
            description: 'Nature time',
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
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
