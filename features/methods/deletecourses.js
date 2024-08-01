async function deleteCourse(_id) {
    console.log(_id)
    const response = await fetch(`http://localhost:8080/delete/${_id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        window.location.href = "../index.html"
    }
    else {
        window.alert = "Ocorreu um erro ao salvar o curso, consulte o console para mais informações."
        console.error(response.statusText)
    }

}
