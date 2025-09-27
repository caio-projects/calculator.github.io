var syntax = [];
var ans = 0;

// ===== Button press handler =====
function basic(func) {
    // Use previous answer if starting new calculation
    if (ans !== 0 && syntax.length === 0 && func !== "=") {
        syntax.push(ans.toString());
        ans = 0;
    }

    if (func === "=") {
        loadSyntax();
    } 
    else if (["/", "*", "+", "-"].includes(func)) {
        syntax.push(' ' + func + ' ');
    }
    else if (func === "%") {
        if (syntax.length > 0) {
            // Merge last consecutive digits into one number
            let num = '';
            while (syntax.length > 0 && /[0-9.]/.test(syntax[syntax.length - 1])) {
                num = syntax.pop() + num;
            }
            syntax.push(`(${num}/100)`);
        }
    }
    else if (func === "CE") {
        syntax = [];
        const resultEl = document.getElementById("result");
        if (resultEl) resultEl.textContent = '';
    } 
    else if (func === "DEL") {
        syntax.pop();
    } 
    else if (func === "√") {  
        syntax.push('√');
    }   
    else {
        // Merge consecutive digits for cleaner syntax
        if (/[0-9.]/.test(func) && syntax.length > 0 && /[0-9.]/.test(syntax[syntax.length - 1])) {
            syntax[syntax.length - 1] += func;
        } else {
            syntax.push(func);
        }
    }

    const calcEl = document.getElementById("calc");
    if (calcEl) calcEl.textContent = syntax.join("");
    console.log(syntax);
}

// ===== Evaluate expression =====
function loadSyntax() {
    try {
        let expr = syntax.join('').trim();

        // Handle postfix √ (number before √)
        expr = expr.replace(/(\d+)√/g, 'Math.sqrt($1)');

        // Handle prefix √ (√number)
        expr = expr.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');

        // Insert * if a number is before Math.sqrt
        expr = expr.replace(/(\d)(Math\.sqrt)/g, '$1*$2');

        // Insert * if a number comes after a closing parenthesis
        expr = expr.replace(/\)(\d)/g, ')*$1');

        // Insert * if a closing parenthesis is followed by an opening parenthesis
        expr = expr.replace(/\)\(/g, ')*(');

        var res = eval(expr);
        ans = res;

        const resultEl = document.getElementById("result");
        if (resultEl) resultEl.textContent = res;

        const calcEl = document.getElementById("calc");
        if (calcEl) calcEl.textContent = syntax.join("");

    } catch (e) {
        const resultEl = document.getElementById("result");
        if (resultEl) resultEl.textContent = "Error";
        console.log(e);
    }
    syntax = [];
}

// ===== Automated testing =====
function test(expr, expected) {
    syntax = [];
    for (let ch of expr) {
        if (ch !== ' ') basic(ch);
    }
    loadSyntax();
    let result = ans;
    console.assert(
        Math.abs(result - expected) < 1e-9,
        `Test failed: "${expr}" → got ${result}, expected ${expected}`
    );
}

// ===== Example tests =====
test('2+3', 5);
test('10-7', 3);
test('4*5', 20);
test('20/4', 5);

test('√25', 5);
test('25√', 5);
test('25√25', 125);
test('√16+√9', 7);

test('25%', 0.25);
test('50%+50%', 1);
test('(24/100)58', 13.92);

test('2(3+4)', 14);
test('(2+3)(4+1)', 25);
test('5√25', 25);
test('(2+3)√16', 20);

test('3.5+2.5', 6);
test('10.5%', 0.105);
test('√2.25', 1.5);

test('√(9+16)', 5);
test('(2+3)*(4+5)', 45);
test('((2+3)√16)', 20);

console.log("All tests executed.");
