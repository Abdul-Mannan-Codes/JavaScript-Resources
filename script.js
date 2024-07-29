const manualPath = "https://msbte.engg-info.website/sites/default/files/CO%2C%20CM%2C%20CW_1/22519%20-%20Client%20Side%20Scripting%20Language-syllabus.pdf";
const header = document.querySelector('header');
function locateToManual(){
    window.location.href = manualPath;
}
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 500){
        header.style.position = 'fixed';
    }
    else{
        header.style.position = '';
    }
});
function display(button){
    let parent = button.parentElement;
    let vivaForm = parent.nextElementSibling;
    vivaForm.classList.toggle('d-none');
}