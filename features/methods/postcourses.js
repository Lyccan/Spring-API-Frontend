const btnSubmit = document.getElementById("btnsubmit")
const formLogin = document.getElementById("formLogin")

function dados() {
    const courseName = document.getElementById("courseName").value
    const institution = document.getElementById("institution").value
    const workload = document.getElementById("workload").value

    const data = {
        course: courseName,
        institution: institution,
        workload: workload
    }
    return data
}

formLogin.addEventListener("submit", (event) => {
    event.preventDefault()
    saveCourse(dados())
})

const saveCourse = async (data) => {
    const response = await fetch("http://localhost:8080/createuser", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        window.location.href = "../index.html"
    }
    else {
        window.alert = "Ocorreu um erro ao salvar o curso, consulte o console para mais informações."
        console.error(response.statusText)
    }
}