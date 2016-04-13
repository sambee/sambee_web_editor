// 添加一个插件
CKEDITOR.plugins.add('code', {
  
// 插件初始化
init: function (editor) {
	editor.addCommand('code',{ exec:function(editor){
		alert('111111');
	}}),
    // 添加code按钮
    editor.ui.addButton('code', {
  
        // 鼠标移到按钮提示文字
        label: 'code',
  
        // 命令
        command: 'code',
  
        // 图标（相对于插件本身目录下）
       // icon: this.path + '/logo_ckeditor.png'
  
    });
}
  
  
});