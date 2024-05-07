let popup = Popup = (function(){
  class Popup {
      // 构造函数中定义公共要使用的div
      constructor() {
          // 定义所有弹窗都需要使用的遮罩
          this.mask = document.createElement('div')
          // 设置样式
          this.setStyle(this.mask, {
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, .2)',
              position: 'absolute',
              left: 0,
              top: 0
          })
          // 创建中间显示内容的水平并垂直居中的div
          this.content = document.createElement('div')
          // 设置样式
          this.setStyle(this.content, {
              width: '300px',
              height: '150px',
              backgroundColor: '#fff',
              boxShadow: '0 0 2px #999',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              borderRadius: '3px'
          })
          // 将这个小div放在遮罩中
          this.mask.appendChild(this.content)
      }
      // 中间有弹框的 - 适用于alert和confirm
      middleBox(param) {
          // 先清空中间小div的内容 - 防止调用多次，出现混乱
          this.content.innerHTML = ''
          // 定义标题和内容变量
          let title = '默认标题内容',content = '弹窗的默认提示信息！';
          // 检测参数类型
          if({}.toString.call(param) === '[object String]') {
              content = param
          } else if({}.toString.call(param) === '[object Object]') {
              title = param.title
              content = param.content
          }
          // 将遮罩放在body中显示
          document.body.appendChild(this.mask)
          // 给中间的小div设置默认的排版
          // 上面标题部分
          this.title = document.createElement('div')
          // 设置样式
          this.setStyle(this.title, {
              width: '100%',
              height: '50px',
              borderBottom: '1px solid #ccc',
              lineHeight: '50px',
              paddingLeft: '20px',
              boxSizing: 'border-box',
              color: '#666'
          })
          // 设置默认标题内容
          this.title.innerText = title
          // 将标题部分放在中间div中
          this.content.appendChild(this.title)
          // 关闭按钮
          this.closeBtn = document.createElement('a')
          // 设置内容
          this.closeBtn.innerText = '×'
          // 设置href属性
          this.closeBtn.setAttribute('href', 'javascript:;')
          // 设置样式
          this.setStyle(this.closeBtn, {
              textDecoration: 'none',
              color: '#666',
              position: 'absolute',
              right: '10px',
              top: '6px',
              fontSize: '25px'
          })
          // 将关闭按钮放在中间小div中
          this.content.appendChild(this.closeBtn)
          // 下面具体放内容的部分
          this.description = document.createElement('div')
          // 放入默认内容
          this.description.innerText = content
          // 将默认内容放在中间的小div中
          this.content.appendChild(this.description)
          // 设置样式
          this.setStyle(this.description, {
              color: '#666',
              paddingLeft: '20px',
              lineHeight: '50px'
          })
      }
      // 弹出提示框
      alert(param) {
          this.middleBox(param)
          // 右下角的确定按钮
          this.btn = document.createElement('button')
          // 添加内容
          this.btn.innerText = '确定'
          // 设置内容
          this.setStyle(this.btn, {
              backgroundColor: 'rgb(30, 159, 255)',
              position: 'absolute',
              right: '10px',
              bottom: '5px',
              outline: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '16px',
              borderRadius: '2px',
              padding: '0 10px',
              height: '30px',
              lineHeight: '30px'
          })
          // 将按钮放在div中
          this.content.appendChild(this.btn)
          // 关闭按钮和确定按钮的点击事件
          this.btn.onclick = this.closeBtn.onclick = () => this.close()
      }
      confirm(info, obj, cb1, cb2) {
          // 调用创建中间小div的函数
          this.middleBox(info)
          // 设置默认参数
          let defaultBtn = { // 默认按钮
              btn: ['确定', '取消']
          }
          // 设置默认的确定按钮和取消按钮点击后要执行的函数
          let affirm = function(){}
          let cancel = function(){}
          // 替换默认参数
          if(obj && {}.toString.call(obj) === '[object Object]') {
              for(let attr in obj) {
                  defaultBtn[attr] = obj[attr]
              }
          }
          if(cb1 && {}.toString.call(cb1) === '[object Function]') {
              affirm = cb1
          }
          if(cb2 && {}.toString.call(cb2) === '[object Function]') {
              cancel = cb2
          }
          // 创建确定按钮
          this.btn = document.createElement('button')
          // 添加内容
          this.btn.innerText = defaultBtn.btn[0]
          // 设置内容
          this.setStyle(this.btn, {
              backgroundColor: 'rgb(30, 159, 255)',
              position: 'absolute',
              right: '70px',
              bottom: '5px',
              outline: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '16px',
              borderRadius: '2px',
              padding: '0 10px',
              height: '30px',
              lineHeight: '30px'
          })
          // 将按钮放在div中
          this.content.appendChild(this.btn)
          // 创建取消按钮
          this.cancel = document.createElement('button')
          // 添加内容
          this.cancel.innerText = defaultBtn.btn[1]
          // 设置内容
          this.setStyle(this.cancel, {
              backgroundColor: 'transparent',
              position: 'absolute',
              right: '10px',
              bottom: '5px',
              outline: 'none',
              border: '1px solid #ccc',
              color: '#666',
              fontSize: '16px',
              borderRadius: '2px',
              padding: '0 10px',
              height: '30px',
              lineHeight: '30px'
          })
          // 将按钮放在div中
          this.content.appendChild(this.cancel)
          // 关闭按钮的点击事件
          this.closeBtn.onclick = () => this.close()
          // 确定按钮的点击事件
          this.btn.onclick = () => {
              affirm()
              this.close()
          }
          // 取消按钮的点击事件
          this.cancel.onclick = () => {
              cancel()
              this.close()
          }
      }
      msg(str, param) {
          // 清空中间的小div中的内容
          this.content.innerHTML = ''
          // 定义默认参数
          let content = '默认提示内容'
          let options = {
              time: 2000,
          }
          // 将参数覆盖掉默认值
          if(str && {}.toString.call(str) === '[object String]') {
              content = str
          }
          if(param && {}.toString.call(param) === '[object Object]') {
              for(let attr in param) {
                  options[attr] = param[attr]
              }
          }

          // 将遮罩放在body中显示
          document.body.appendChild(this.mask);

          if(options.clickMaskClose === true) {
            //点击关闭
            this.mask.onclick = (e) => {
              if(this.mask.parentElement) {
                document.body.removeChild(this.mask)
              }
            }
          }
          // 给遮罩中间的div设置样式
          this.setStyle(this.content, {
              width: 'auto',
              height: '80px',
              backgroundColor: 'rgb(255, 255, 255)',
              boxShadow: '0 0 2px #999',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              borderRadius: '3px',
              padding: '0 30px 0',
              lineHeight: '80px',
              color: '#666'
          })
          // 定义icon所用的标签
          let icon = document.createElement('span')
          // 判断icon
          if(options.icon === 1) {
              // 给icon设置内容和样式
              icon.innerText = '√'
              this.setStyle(icon, {
                  width: '30px',
                  height: '30px',
                  border: '3px solid rgb(56, 201, 177)',
                  borderRadius: '50%',
                  display: 'inline-block',
                  color: 'rgb(56, 201, 177)',
                  lineHeight: '30px',
                  textAlign: 'center',
                  margin: '0 10px',
                  fontSize: '20px',
                  fontWeight: 'bold'
              })
          } else if(options.icon === 0) {
              // 给icon设置内容和样式
              icon.innerText = '×'
              this.setStyle(icon, {
                  width: '30px',
                  height: '30px',
                  border: '3px solid rgb(233, 91, 76)',
                  borderRadius: '50%',
                  display: 'inline-block',
                  color: 'rgb(233, 91, 76)',
                  lineHeight: '30px',
                  textAlign: 'center',
                  margin: '0 10px',
                  fontSize: '20px',
                  fontWeight: 'bold'
              })
          } else {
              this.setStyle(this.content, {
                  width: 'auto',
                  height: '50px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  boxShadow: '0 0 2px #999',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '3px',
                  padding: '0 30px 0',
                  lineHeight: '50px',
                  color: '#fff'
              })
          }
          // 将icon放到小div中
          this.content.appendChild(icon)
          // 给中间小div放入内容
          this.content.innerHTML += content
          // 延迟一会自动消失
          setTimeout(() => {
              // 从body中将遮罩删除
              if(this.mask.parentElement) {
                  document.body.removeChild(this.mask)
              }
          }, options.time)
      }
      load() {
          // 将遮罩放到body中显示
          document.body.appendChild(this.mask)
          // 给中间的小div设置样式
          this.setStyle(this.content, {
              border: 'none',
              boxShadow: '0 0 0 transparent',
              backgroundColor: 'transparent'
          })
          // 创建旋转的div
          for(let i = 0; i < 8; i++) {
              let div = document.createElement('div')
              this.setStyle(div, {
                  width: '4px',
                  height: '12px',
                  backgroundColor: 'rgb(6, 43, 78)',
                  transformOrigin: '0 15px',
                  transform: 'rotate('+360/8*i+'deg) translate(-50%, -50%)',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  opacity: '0.5'
              })
              if(i === 0) {
                  div.style.opacity = 1
              }
              this.content.appendChild(div)
          }
          // 让div循环增加透明度
          let i = 0
          return setInterval(() => {
              i++
              if(i === this.content.children.length) {
                  i = 0
                  this.content.children[this.content.children.length-1].style.opacity = '0.5'
              }else{
                  this.content.children[i-1].style.opacity = '0.5'
              }

              this.content.children[i].style.opacity = 1
          }, 50)
      }
      close(timerId) {
          // 如果有定时器，就停止定时器
          if(timerId) clearInterval(timerId)
          // 将遮罩从body中删除
          document.body.removeChild(this.mask)
      }
      // 设置样式的函数
      setStyle(ele, styleObj) {
          for(let attr in styleObj){
              ele.style[attr] = styleObj[attr]
          }
      }
  }
  let popup = null;
  return (function() {
      if(!popup) {
          popup = new Popup()
      }
      return popup;
  })()
})()