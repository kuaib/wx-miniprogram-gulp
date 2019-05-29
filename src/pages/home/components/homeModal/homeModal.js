Component({
    data: {
        showWelModal: true,     // 显示欢迎页面
        showGuidModal: false,   // 显示引导页面
        guidItem: ['热门资讯', '二手车', '新能源', '论坛精选', '车模', '原创内容', '精彩直播', '活动呢预告']
    },

    ready() {
        // 进入页面首先获取地理位置信息
        wx.getSetting({
            success: function (res) {
                if (!res.authSetting['scope.userLocation']) {
                    wx.getLocation({
                        success: function () {
                            console.log('成功');
                        },
                        fail: function (error) {    // 用户取消授权
                            console.log(error);
                            wx.showModal({
                                content: '请授权地理位置信息',
                                success(res) {
                                    if(res.confirm) {
                                        wx.openSetting({
                                            success(res) {
                                                console.log(res);
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    });
                } else {
                    console.log('已获取地理位置');
                }
            }
        });


        let welModal = wx.getStorageSync('showWelModal');
        let guidModal = wx.getStorageSync('showGuidModal');
        if(typeof welModal === 'boolean') {
            this.setData({
                showWelModal: welModal
            });
        }
        if(typeof guidModal === 'boolean') {
            this.setData({
                showGuidModal: guidModal
            });
        }
    },

    methods: {
        hideWel() {
            this.setData({
                showWelModal: false
            }, () => {
                wx.setStorageSync('showWelModal', false);
                this.setData({
                    showGuidModal: true
                });
            });
        },

        hideGuid() {
            this.setData({
                showGuidModal: false
            }, () => {
                wx.setStorageSync('showGuidModal', false);
            });
        }
    }
});
