Component({
    data: {
        navList: [
            {
                text: '首页',
                actImgUrl: '/images/footer/home-light.png',
                imgUrl: '/images/footer/home-grey.png',
                linkUrl: '/pages/home/home'
            },
            {
                text: '选车',
                actImgUrl: '/images/footer/car-light.png',
                imgUrl: '/images/footer/car-grey.png',
                linkUrl: '/pages/car/car'
            },
            {
                text: '论坛',
                actImgUrl: '/images/footer/forum-light.png',
                imgUrl: '/images/footer/forum-grey.png',
                linkUrl: '/pages/forum/forum'
            },
            {
                text: '我的',
                actImgUrl: '/images/footer/person-light.png',
                imgUrl: '/images/footer/person-grey.png',
                linkUrl: '/pages/personal/personal'
            },
        ]
    },
    properties: {
        urlState: {
            type: String,
            value: ''
        }
    },

    ready() {
        console.log(this.properties);
        console.log(this.properties.urlState.indexOf('home'));
    }
});
