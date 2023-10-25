export default {
    chartData: {//차트에 넣어줄 데이터셋
        labels: ['???', '???', '???', '???', '???', '???', '???', '???', '???', '???'],
        datasets: [
            {
                label: '최근 랭크게임의 딜량',
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(247, 244, 0, 0.2)',
                    'rgba(173, 250, 202, 0.2)',
                    'rgba(183, 94, 255, 0.2)',
                    'rgba(42, 7, 255, 0.2)',
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(247, 244, 0, 0.2)',
                    'rgba(173, 250, 202, 0.2)',
                    'rgba(183, 94, 255, 0.2)',
                    'rgba(42, 7, 255, 0.2)'],
                data: [100, 300, 200, 250, 130, 100, 300, 200, 250, 150],
                borderColor: ['rgba(255, 0, 0, 1)', 'rgba(247, 244, 0, 1)', 'rgba(173, 250, 202, 1)', 'rgba(183, 94, 255, 1)', 'rgba(42, 7, 255, 1)', 'rgba(255, 0, 0, 1)', 'rgba(247, 244, 0, 1)', 'rgba(173, 250, 202, 1)', 'rgba(183, 94, 255, 1)', 'rgba(42, 7, 255, 1)'],
                borderWidth: 1,
            },
        ]
    },
    chartOptions: {//차트에 넣어줄 옵션
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend : {
                display: true,
                labels : {
                    color : 'white',
                },
            }
        },
        animation : {
            easing : 'easeOutBounce'
        }
    },
}