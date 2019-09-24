/* 移动适配
 * @Author: LuoJW
 * @Date: 2018-01-06 10:02:14
 * @Last Modified by: LuoJW
 * @Last Modified time: 2018-01-06 12:02:24
 */

(function(win, lib) {
  var doc = win.document;
  // docEl取到了整个dom树，后期需要向html插入dpr和font-size就是用这个属性
  var docEl = doc.documentElement;
  var metaEl = doc.querySelector('meta[name="viewport"]');
  // metaEl取meta标签里面name＝viewport的元素
  var flexibleEl = doc.querySelector('meta[name="flexible"]');
  // flexibleEl取meta标签里面name＝flexible的元素
  var dpr = 0;
  var scale = 0;
  var tid;
  var flexible = lib.flexible || (lib.flexible = {});

  // 判断meta标签里面是不是设置了name=viewport属性
  if (metaEl) {
    var match = metaEl.getAttribute('content').match(/initial-scale=([\d.]+)/);
    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(1 / scale);
    }
  } else if (flexibleEl) {
    var content = flexibleEl.getAttribute('content');
    if (content) {
      var initialDpr = content.match(/initial-dpr=([\d.]+)/);
      var maximumDpr = content.match(/maximum-dpr=([\d.]+)/);
      if (initialDpr) {
        dpr = parseFloat(initialDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
    }
  }

  // 区分安卓设备和ios设备的dpr处理
  if (!dpr && !scale) {
    // var isAndroid = win.navigator.appVersion.match(/android/gi);
    var isIPhone = win.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = win.devicePixelRatio;
    if (isIPhone) {
      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1;
    }
    scale = 1 / dpr;
  }

  // 在html上设置了data-dpr自定义属性
  docEl.setAttribute('data-dpr', dpr);

  // 没有设置metaEl标签的话，那么需要手动创建meta标签
  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', toRouter-scalable=no');
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      var wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }

  // 设置rem的值
  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    // 540像素值是手机屏幕能到达的最大宽度,超出则认为是pc机、ipad等
    if (width / dpr > 540) {
      width = 540 * dpr;
    }
    var rem = width / 10;
    docEl.style.fontSize = rem + 'px';
    flexible.rem = win.rem = rem;
  }

  // 监听window的resize和pageshow方法来实现css样式的重绘
  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  // 设置fontSize的值
  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px';
  } else {
    doc.addEventListener('DOMContentLoaded', function() {
      doc.body.style.fontSize = 12 * dpr + 'px';
    }, false);
  }

  refreshRem();

  flexible.dpr = win.dpr = dpr;
  flexible.refreshRem = refreshRem;
  flexible.rem2px = function(d) {
    var val = parseFloat(d) * this.rem;
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px';
    }
    return val;
  };
  flexible.px2rem = function(d) {
    var val = parseFloat(d) / this.rem;
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem';
    }
    return val;
  };
})(window, window['lib'] || (window['lib'] = {}));
