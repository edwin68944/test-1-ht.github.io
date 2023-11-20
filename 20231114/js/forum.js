

// 用于提交新帖子的表单处理

var form = document.querySelector('#new-post-form form');

form.addEventListener('submit', function (event) {

    event.preventDefault();



    var titleInput = document.getElementById('post-title');

    var contentInput = document.getElementById('post-content');



    // 在此处可以将帖子数据发送到服务器，并进行处理



    // 清空表单输入

    titleInput.value = '';

    contentInput.value = '';

});