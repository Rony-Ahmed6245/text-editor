


document.getElementById('boldButton').addEventListener('click',function(){
    const boldBtn = editorText('editor');
    boldBtn.style.fontWeight = 'bold';
})
document.getElementById('italicButton').addEventListener('click',function(){
    const boldBtn = editorText('editor');
    boldBtn.style.fontStyle  = 'italic';
})
document.getElementById('underlineButton').addEventListener('click',function(){
    const boldBtn = editorText('editor');
    boldBtn.style.textDecoration = 'underline';
})
document.getElementById('textSize').addEventListener('click',function(){
    const boldBtn = editorText('editor');
    boldBtn.style.fontSize = '20px';
})




function editorText(text){
    const textField = document.getElementById(text);
    return textField ;
 }