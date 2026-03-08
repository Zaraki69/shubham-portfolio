var typed = new Typed("#typing",{

strings:[
"DevOps Engineer",
"AWS Specialist",
"Kubernetes",
"CI/CD Automation Builder"
],

typeSpeed:60,
backSpeed:40,
loop:true

})


function openProject(project, event){

document.querySelectorAll(".tab-content")
.forEach(c => c.classList.remove("active"))

document.querySelectorAll(".tab")
.forEach(t => t.classList.remove("active"))

document.getElementById(project)
.classList.add("active")

event.target.classList.add("active")

}
