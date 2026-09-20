document.querySelector('.display-btn').addEventListener('click', function() {
    var btn = this;
    btn.classList.add('animate');

  // 动画结束后移除动画类
    btn.addEventListener('animationend', function() {
    btn.classList.remove('animate');
  }, { once: true }); // 使用once选项确保事件处理器只触发一次
});


document.getElementById('ConfirmBtn').addEventListener('click', function() {
    console.log('发送拍照指令...');
    fetch('http://192.168.0.180:5000/take_picture', {
        method: 'POST',
    })
    .then(response => {
        console.log('服务器响应:', response);
        return response.text();
    })
    .then(data => {
        console.log('响应数据:', data);
        alert('拍照指令已发送');
    })
    .catch(error => {
        console.error('请求错误:', error);
        alert('发送指令失败');
    });
});


