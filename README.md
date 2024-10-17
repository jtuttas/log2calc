# Einfacher Taschenrechner mit log2 Funktion

Einbau des Taschenrechners über folgendes JS:

```js
<div id="calculator-container"></div>
    <script>
            function loadCalculator() {
                const script = document.createElement('script');
                script.src = 'https://jtuttas.github.io/log2calc/calculator.js';
                document.body.appendChild(script);

                const style = document.createElement('link');
                style.rel = 'stylesheet';
                style.href = 'https://jtuttas.github.io/log2calc/calculator.css';
                document.head.appendChild(style);
            }
        // Taschenrechner wird in den Container mit der ID "calculator-container" integriert
        loadCalculator();
    </script>
```