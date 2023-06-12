let errorParagraph = document.getElementById("error");
console.log(errorParagraph);

function purchase(){
    console.log("button is clicked.");
    errorParagraph.textContent = "Something went weong, please try again"

}