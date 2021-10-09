##  简介

- 武汉理工的同学们，你是不是在为结课的评教发愁？是不是在为重复点击那几个按钮感觉到无聊？

- 如果是，那么这个这几条js代码可能会帮助到你，以为它可以帮你快速评教

- 由于在下的水平有限，所以只想到了完成评教最简单的操作，那就是模拟人的点击，所以我就设置了几个点击按钮，估计只要学了js的人就能看懂
- **代码如下**

```javascript
const a = document.querySelectorAll('.unit')
for (let i = 0; i < 9; i++) {
  a[i].firstElementChild.click()
}
const b = document.querySelectorAll('.buttonActive')
b[3].lastElementChild.firstChild.click()
```

- 看了代码是不是感觉特别简单，所以相信你也能够做出其他的小东西，哈哈哈，如果某位同学有更好的解决办法，欢迎沟通交流

#  使用方法

1. 用浏览器打开评教系统的界面，选择自己要评教的老师，然后点进去
2. 按`f12`打开浏览器的调试面板，找到控制台，把这段代码输入即可

![image-20211009224247747](C:\Users\zhang\AppData\Roaming\Typora\typora-user-images\image-20211009224247747.png)

