var vm = new Vue({
    el: '#bqContent',
    data: {
        selectAll: true,
        isShowTips: false,
        isShowError: true,
        contentList: [
            {
                selectTrue: true,
                bdNo: '投保人（即被保人）',
                bdContent: '张三',
                cardStyle: '身份证',
                cardNo: '340826********6207',
                enterTime: '至2029-01-01'
            }, {
                selectTrue: true,
                bdNo: '投保人（即被保人）',
                bdContent: '张三',
                cardStyle: '身份证',
                cardNo: '340826********6207',
                enterTime: '至2029-01-01'
            }, {
                selectTrue: true,
                bdNo: '投保人（即被保人）',
                bdContent: '张三',
                cardStyle: '身份证',
                cardNo: '340826********6207',
                enterTime: '至2029-01-01',
                btnStyle: 'btnStyle'
            }
        ],
        tipsContent: '对不起，请选择保单做变更投资分配比例'
    },
    methods: {
        bgFn(index) {
            console.log(this.contentList[index])
            window.location.href = './endbxPageTwo.html'
        },
        showTipsFn() {
            this.isShowTips = true;
            setTimeout(() => {
                this.isShowTips = false
            }, 3000)
        },
    }
})