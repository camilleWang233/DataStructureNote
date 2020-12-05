## ip 地址：每组 8 个二进制数，分四组转成 10 进制数(0-255)

PAT 多对一映射：

- NAT：网络地址转换 ip 映射：实现多设备共用同一 ip
- portMapping：端口映射：同一 ip 精准传输数据

## <audio>实现自动播放，点击暂停

- audio : 通过 paused 判断是否暂停，然后调用 play()/pause()

## 闭包

- [原文链接](https://blog.csdn.net/weixin_43586120/article/details/89456183)
- 1.声明不同函数，指向同一方法，不调用指向同一地址吗:不同地址，例子错了
- 2.声明完调用呢？【例 2，3】

## (function(){}())与(function(){})()的区别(没区别，写法不同而已)

- [原文链接](https://blog.csdn.net/melour123/article/details/90636754)
- 立即执行函数 IIFE (Immediately Invoked Function Expression)在定义的地方直接执行，不用调用
  以下几种写法都行
  - 注意函数声明和函数表达式的区别

```js
(function foo() {
  /*...*/
})();

(function foo() {
  /*...*/
})();

!(function foo() {
  /*...*/
})();

+(function foo() {
  /*...*/
})();

-(function foo() {
  /*...*/
})();

~(function foo() {
  /*...*/
})();
```

## data-\*

- 自定义数据属性 custom data attributes
- 通过脚本在 HTML 与 DOM 表现之间进行专有数据的交换

## Image()

- equal with document.createElement('img')

## lazyLoading

- [原文地址](https://blog.csdn.net/w1418899532/article/details/90515969)
  > > - top-height:图片到浏览器顶端的距离
  > > - document.body.scrollTop:网页被卷去的高
  > > - document.body.clientHeight:网页可见区域高
  > > - 当 top-height <= scrollTop + clientHeight 说明图片将要进入可视区，准备进行加载

## 3.svg use 属性实现复用

## 2.cubic-bezier()速度曲线

- cubic-bezier()函数定义了一个贝塞尔曲线，由 4 个点
  p0(0,0) -默认
  p1(x1,y1) -动态取值
  p2(x2,y2) -动态取值
  p3(1,1) -默认

```css
/*x变化时间 y变化时间 cubic-bezier(x1,y1,x2,y2) */

test {
  transition: 2000ms 100ms cubic-bezier(0.14, -1.08, 0.74, 1.4);
}
```

## 1.input style=range 拖拽实时触发事件

#### 通过 input 的 oninput\onchage 属性

区别：<br>
oninput="change()" 一直监听<br>
onchange="change()"监听一次
