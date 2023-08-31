function copyToClickBoard(){
    const content = document.getElementById('button_email').innerHTML;

    navigator.clipboard.writeText(content)
       .then(() => {
        console.log("Text copied to clipboard...")
        alert("e-mail copiado!")
     })
        .catch(err => {
        console.log('Something went wrong', err);
     })
 
}