let language = document.querySelectorAll(".cont");
for(let i = 0; i < language.length; i++)
{
    language[i].addEventListener("click", mostrar);
}
function mostrar()
{
    this.classList.toggle("mostrar");
}