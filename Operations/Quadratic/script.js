const submit = document.getElementById("submit");
const result = document.getElementById("result")

submit.addEventListener("click",()=>{
    submit.addEventListener("click", () => {
        const Ain = document.getElementsByClassName("entrada")[0];
        const Bin = document.getElementsByClassName("entrada")[1];
        const Cin = document.getElementsByClassName("entrada")[2];
    
        const Aval = Ain.value;
        const Bval = Bin.value;
        const Cval = Cin.value;
        let delta;
        let X1, X2;
        delta = (Bval**2)-4*Aval*Cval;
        alert(delta)
        if(delta<0){
            alert(`Delta Negativo, não há soluções reais. valor = ${delta}`)
        }
        
        
    });
})