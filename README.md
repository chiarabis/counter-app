# Counter-app
## Counter app (JS basics project)
Questa app sviluppa un semplice counter e fa parte del progetto di Javascript Basics del master in Front-End development di Start2Impact.

![Screenshot (counter app)](https://github.com/chiarabis/counter-app/assets/124071052/59cc32e2-94ed-45b3-b63d-f19bd632bf96)
***
### Utilizzo
Come funziona un counter?
Un counter è appunto un contatore in cui l'utente attraverso i pulsanti ```+``` e ```-``` incrementa o decrementa la numerazione, appunto conta. Il conteggio è visualizzato sul display al centro. Se l'utente desidera può ricominciare da capo il conteggio, ripartendo da zero, usando il tasto ```reset```.

> **Nota:**
> Il counter sviluppato non supporta i numeri negativi! Nello scrivere il codice ho pensato proprio a un&apos;app con un&apos;impostazione reale, per cui quando si è a 0 anche premendo il tasto ```-``` il conteggio non varia.

L'app-counter consiste in:
- 2 pulsanti ```+``` e ```-```
- il display con la visualizzazione del numero
- il tasto ```reset``` per tornare a 0 e ricominciare il conteggio

Oltre al file HTML con la struttura del progetto, c'è il file CSS per lo stile e ovviamente il file Javascript per far funzionare il tutto.
Nel file Javascript in particolare ho elencato 4 opzioni diverse di codice per avere lo stesso risulato: è stato molto utile e divertente scrivere le istruzioni in diversi modi! Per provarle basta semplicemente togliere la notazione.

## File HTML
![Screenshot (html)](https://github.com/chiarabis/counter-app/assets/124071052/0a4d921c-c9ad-4ed8-bd2f-8b39de635a15)

## File CSS

![Screenshot (css)](https://github.com/chiarabis/counter-app/assets/124071052/9fda9217-6481-4dda-b2c3-44e10eb38209)

![Screenshot (css) - 2](https://github.com/chiarabis/counter-app/assets/124071052/406f0af6-6f30-4a72-9863-86d2bbac4bc2)

## File JS

#### 1. L'opzione più semplice. Ci sono 2 funzioni distinte per incremento e decremento, una funzione per il reset e viene utilizzato il metodo ```Number()``` per convertira il numero (che è una stringa) e permettere il conteggio. Nella funzione di decremento si usa un ```if``` per fare in modo che il conteggio una volta che il risultato è 0 non scenda al di sotto. Il risultato viene visualizzato tramite la proprietà ```innerText```:
```javascript
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const output = document.querySelector("#output");
const resetBtn = document.querySelector("#reset-btn");

plusBtn.addEventListener("click", function(){
    let result = Number(output.innerText) + 1;
    output.innerText = result;
});

minusBtn.addEventListener("click", function(){
    let result = Number(output.innerText) - 1;

    if (result < 0) {
        result = 0;
    }

    output.innerText = result;
});

resetBtn.addEventListener("click", function(){
    output.innerText = 0;
});
```

#### 2. La seconda opzione prevede sempre 2 funzioni distinte e una per il reset, ma vengono utilizzati gli operatori ```++``` e ```--```, e il conteggio è visualizzato tramite la proprietà ```innerHTML```. L'istruzione ```if``` è la stessa della prima opzione:
```javascript
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const output = document.querySelector("#output");
const resetBtn = document.querySelector("#reset-btn");

let result = 0;

plusBtn.addEventListener("click", function(){
    result++; //result += 1;
    output.innerHTML = result;
});

minusBtn.addEventListener("click", function(){
    result--; //result -= 1;

    if(result < 0){
        result = 0;
    }

    output.innerHTML = result;
});

resetBtn.addEventListener("click", reset);
function reset(){
    result = 0;
    output.innerHTML = result;
}
```

#### 3. Anche questa opzione prevede 2 funzioni distinte per incremento e decremento e una terza funzione per il reset. Anche qui si ha l'istruzione ```if``` nella funzione di decremento, modificata ma che porta allo stesso risultato:
```javascript
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const output = document.querySelector("#output");
const resetBtn = document.querySelector("#reset-btn");

let result = 0;

minusBtn.addEventListener("click", decrement);
plusBtn.addEventListener("click", increment);
resetBtn.addEventListener("click", reset);

function decrement(){
    if(result > 0){
        result--;
        output.innerHTML = result;
    }
};

function increment(){
    result++;
    output.innerHTML = result;
};

function reset(){
    result = 0;
    output.innerHTML = 0;
};
```

#### 4. L'ultima opzione a differenza delle precedenti utilizza un'unica funzione ```function counter()``` sia per l'incremento, il decremento e il reset:
```javascript
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const output = document.querySelector("#output");
const resetBtn = document.querySelector("#reset-btn");

let result = 0;

plusBtn.addEventListener("click", function(){
    counter("increment");
});
minusBtn.addEventListener("click", function(){
    counter("decrement");
});
resetBtn.addEventListener("click", function(){
    counter("reset");
});

function counter(action){
    if(action === "increment"){
        result++;
    }else if(action === "decrement"){
        if(result > 0){
            result--;
        }
    }else if(action === "reset"){
        result = 0;
    }else{
        alert("Azione non consentita")
    }

    output.textContent = result;
}
counter("increment");
counter("decrement");
counter("reset");
```

## Link al progetto
[https://chiarabis.github.io/counter-app/]
