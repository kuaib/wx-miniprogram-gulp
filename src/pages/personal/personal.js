Page({
    data: {
        urlState: '',
    },
    onLoad() {
        this.setData({
            urlState: this.route
        });
    }
});
