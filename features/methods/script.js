const coursesContainer = document.getElementById("courses-container")
async function getCourses() {
    const coursesJson = await fetch("http://localhost:8080/users")
    const courses = await coursesJson.json()
    fillScreen(courses)
}






const colors = ["blue", "red", "yellow", "green", "oceanblue", "orange", "pink"];
function fillScreen(courses) {
    courses.forEach(course => {
        let random = []
        let date = new Date(course.creationDate)

        let formattedDate = `${date.getDate()} /0${date.getMonth() + 1}/${date.getFullYear()}`
        let color;
        for (i = 0; i < 3; i++) {

            do {
                color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            } while (color === '#000000' || color === '#FFFFFF');
            random.push(color)
        }

        const cursosHTML = `<div class="profile box">
            <h1>${course.course}</h1>
            <p style = "background-color: ${random[0]}; border-radius: 3px;" >Institution: ${course.institution}</p>
            <p style = "background-color: ${random[1]}; border-radius: 3px;" >Workload: ${course.workload}</p>
            <p style = "background-color: ${random[2]}; border-radius: 3px;" >Creation Date: ${formattedDate} </p>
            <button class="btnDelete" id="btnDelete" onclick="deleteCourse('${course._id}')">
                <p class="pDelete">Delete Course <i class="bi bi-file-earmark-minus-fill"></i></p>
            </button>
        </div>`

        coursesContainer.innerHTML += cursosHTML
    })
}


getCourses()

