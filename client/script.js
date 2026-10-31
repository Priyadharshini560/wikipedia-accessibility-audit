
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f6f9;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #17365d;
    color: white;
    text-align: center;
    padding: 30px 15px;
}

header h1 {
    margin-bottom: 10px;
}

main {
    width: 90%;
    max-width: 900px;
    margin: 30px auto;
}

section {
    background-color: white;
    padding: 25px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

h2 {
    color: #17365d;
    margin-bottom: 15px;
}

p, li {
    margin-bottom: 10px;
}

ul {
    padding-left: 25px;
}

a {
    color: #0645ad;
    text-decoration: underline;
}

a:focus, a:hover {
    outline: 2px solid #17365d;
    outline-offset: 3px;
}

footer {
    background-color: #17365d;
    color: white;
    text-align: center;
    padding: 15px;
}

@media (max-width: 600px) {
    header h1 {
        font-size: 24px;
    }

    main {
        width: 95%;
    }

    section {
        padding: 18px;
    }
}
