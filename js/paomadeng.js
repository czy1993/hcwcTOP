function advertisingDisplay(opation){
    let op = {
        wrapper:'#ad-wrapper-box',
        time:30
    }

    for(let key in opation){
        if(opation.hasOwnprotype(key)){
            op[key] = opation[key]
        }
    }

    // 创建dom
    this.wrapper = document.querySelector(op.wrapper);
    this.p = document.createElement('p');
    this.p.setAttribute('class','ad-text');
    this.p.innerHTML = this.wrapper.innerHTML;

    this.inner = document.createElement('div');
    this.inner.setAttribute('class','ad-inner');
    this.inner.appendChild(this.p);

    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(this.inner);

    this.pW = this.p.offsetWidth;
    this.wrapperW = this.wrapper.offsetWidth;
    // 创建css样式
    var styleDom = document.createElement('style');
    styleDom.setAttribute('type','text/css');
    styleDom.innerHTML = `
            *{ margin:0; padding:0;}
            body{font:12px/1 '微软雅黑';}
            #ad-wrapper-box{font-size:14px; color: #fff; padding-left: 5px; margin: 0; white-space: nowrap; overflow: hidden;width: 250px;height: 28px;}
            .ad-inner{ width:1000px;overflow:hidden;height: 28px;}
            .ad-inner .ad-text{ display:inline-block;height: 28px;}`;
    document.head.appendChild(styleDom)
    this.start(); // 启动
}
advertisingDisplay.prototype = {
    start(){
        if(this.wrapperW > this.pW){ return false;}
        this.inner.innerHTML+=this.inner.innerHTML;
        this.run()
    },
    run(){
        if(this.pW > this.wrapper.scrollLeft){
            let _this = this
            this.wrapper.scrollLeft++;
            setTimeout(function(){
                _this.run()
            },30);
        }else{
            this.wrapper.scrollLeft=0;
            this.run()
        }
    }
}
new advertisingDisplay()