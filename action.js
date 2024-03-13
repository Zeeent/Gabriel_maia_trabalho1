// Seu código Javascript vem aqui

addEventListener("DOMContentLoaded", () => {
    //Criação das variáveis
    var lowercase = 'abcdefghijklmnopqrstuvwxyz'; //26 caracteres
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //26 caracteres
    var numbers = '1234567890'; //10 caracteres
    var symbols = '!@#$%^&*()_+{}[]|;:,.<>?'; //24 caracteres
    var caracteres = [];
    var generateBtn = document.getElementById("generate");
    var copyBtn = document.getElementById("copy");
    
    //console.log(generateBtn);

    //Botao GERAR SENHA

    generateBtn.addEventListener("click", () => {
        //Pegar o elemento do tamanho da senha
        var tamanho_senha = document.getElementById("length").value;
        caracteres = [];
        //Verificar quais checkboxes estão marcados, copiar o array respectivo para o array caracteres
        var chMin = document.getElementById("lowercase");
        if (chMin.checked) {
            caracteres += lowercase;
        }
        var chMai = document.getElementById("uppercase");
        if (chMai.checked) {
            caracteres += uppercase;
        }
        var chNum = document.getElementById("numbers");
        if (chNum.checked) {
            caracteres += numbers;
        }
        var chSimb = document.getElementById("symbols");
        if (chSimb.checked) {
            caracteres += symbols;
        }
        //console.log(caracteres);

        var senha = '';

        //fazer um for que repita do tamanho da senha
        //cada interação do for sorteio um elemento do array caracteres e adiciono na minha string

        if (!chMin.checked && !chMai.checked && !chNum.checked && !chSimb.checked) {
             alert("Pelo menos uma das 4 opções deve ser selecionada!");
             document.getElementById("output").innerHTML = senha;
             document.getElementById("output_forca").innerHTML = "Senha fraca";
        }else if (4 <= tamanho_senha && tamanho_senha <= 30){
            for (var i = 0; i < tamanho_senha; i++) {
                senha += caracteres[Math.floor(Math.random() * caracteres.length)];            
            }
        } else{
            alert("O tamanho da senha deve ser entre 4 e 30 caracteres");
            document.getElementById("output").innerHTML = senha;
            document.getElementById("output_forca").innerHTML = '';
        }
        

        //If para a força da senha.
        //Até 10 caracteres é fraca.
        //Entre 11 e 20 caracteres é forte.
        //Entre 21 e 30 é muito forte.

        if (4 <= senha.length && senha.length <= 10) {
            document.getElementById("output_forca").innerHTML = "Senha fraca";
        } else if (10 < senha.length && senha.length <= 20) {
            document.getElementById("output_forca").innerHTML = "Senha forte";
        } else if (20 < senha.length && senha.length <= 30){
            document.getElementById("output_forca").innerHTML = "Senha muito forte";
        }

        document.getElementById("output").innerHTML = senha;
    })

    //Botao COPY

    copyBtn.addEventListener("click", () => {

        //Verificar quais checkboxes estão marcados
        
        var chMin = document.getElementById("lowercase");
        var chMai = document.getElementById("uppercase");
        var chNum = document.getElementById("numbers");
        var chSimb = document.getElementById("symbols");
        
        if (!chMin.checked && !chMai.checked && !chNum.checked && !chSimb.checked){
         alert("Pelo menos uma das 4 opções deve ser selecionada!");
        }else{
            var copySenha = document.getElementById("output").innerText;

            navigator.clipboard.writeText(copySenha);

            // Alert com o valor da senha copiada
            alert("Senha copiada para área de transferência: " + copySenha);
        }        
        
    })


})

