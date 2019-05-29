Page({
    data: {
        urlState: ''
    },
    onLoad() {
        console.log(this.route);
        this.setData({
            urlState: this.route
        });
    },
    onReady() {

    },


});
