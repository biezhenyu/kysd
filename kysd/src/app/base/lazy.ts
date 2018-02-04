export class Zylazy {
  constructor(){}
  throttle(fn, delay, atleast) {
    let timeout = null,
      startTime:any = new Date();
    return function() {
      const curTime:any = new Date();
      clearTimeout(timeout);
      if ((curTime - startTime) >= atleast) {
        fn();
        startTime = curTime;
      } else {
        timeout = setTimeout(fn, delay);
      }
    };
  }

  lazyload() {
    const images = document.getElementsByTagName('img');
    const len    = images.length;
    let n      = 0;      //存储图片加载到的位置，避免每次都从第一张图片开始遍历
    return function() {
      const seeHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      for(let i = n; i < len; i++) {
        if (images[i].offsetTop < seeHeight + scrollTop) {
          if (images[i].getAttribute('src') === 'images/loading.gif') {
            images[i].src = images[i].getAttribute('data-src');
          }
          n = n + 1;
        }
      }
    };
  }
}
