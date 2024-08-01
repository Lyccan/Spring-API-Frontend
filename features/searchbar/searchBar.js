let searchBar = document.getElementById("searchBar")
const btnSearch = document.getElementById("btnSearch")
const courseDiv = document.getElementById("courses-container")

btnSearch.addEventListener('click', () => {
    search()
})

searchBar.addEventListener("input", async () => {
    if (searchBar.value !== "" && searchBar.value.length > 0) {
        setTimeout(async () => {
            search()
        }, 1000)
    }
    else {
        getCourses()
    }
})

async function search() {
    const text = searchBar.value
    const searchJSON = await fetch(`http://localhost:8080/searchusers/${text}`)
    const search = await searchJSON.json()
    fillScreen(search)
}

function fillScreen(courses) {
    courseDiv.innerHTML = ''

    courses.forEach(course => {
        let random = []
        let date = new Date(course.creationDate)

        let formattedDate = `${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`
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
            <p style = "background-color: ${random[2]}; border-radius: 3px;" >Creation Date:${formattedDate}</p>
            <button class="btnDelete" id="btnDelete" onclick="deleteCourse('${course._id}')">
                <p class="pDelete">Delete Course <i class="bi bi-file-earmark-minus-fill"></i></p>
            </button>
        </div>`

        courseDiv.innerHTML += cursosHTML
    })
}