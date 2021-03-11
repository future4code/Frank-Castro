// const apertouBotao = () => {
//     let valorInput = document.getElementById("texto")
//     let localImpresso = document.getElementById("container")
//     localImpresso.innerHTML += `<P>${valorInput.value}</p>`
//     valorInput.value = ""
// }

// const apertouEnter = (event) => {
//     if(event.key === "Enter") {
//         apertouBotao()
//     }
// }

const apertouBotao = () => {
    let valorInputPost = document.getElementById("titulo-post")
    let localImpressoPost = document.getElementById("container-de-posts")
    localImpressoPost.innerHTML += `<P>${valorInputPost.value}</p>`
    valorInputPost.value = ""

    let valorInputPostAuto = document.getElementById("autor-post")
    let localImpressoPostAuto = document.getElementById("container-de-posts")
    localImpressoPostAuto.innerHTML += `<P>${valorInputPostAuto.value}</p>`
    valorInputPostAuto.value = ""

    let valorInputPostCont = document.getElementById("conteudo-post")
    let localImpressoPostCont = document.getElementById("container-de-posts")
    localImpressoPostCont.innerHTML += `<P>${valorInputPostCont.value}</p>`
    valorInputPostCont.value = ""
}

const apertouEnter = (event) => {
    if(event.key === "Enter") {
        apertouBotao()
    }
}