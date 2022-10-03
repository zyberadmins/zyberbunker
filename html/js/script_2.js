const webpage = {
    title: "",
    body: "",
    styling: "",
    code: "",
}

const buttons = document.querySelectorAll(".toggleButton")

buttons.forEach(button => {
    button.addEventListener("click", function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active")
            switch (this.id) {
                case "htmlButton":
                    document.getElementById("htmlTextarea").classList.add("disabled")
                    break
                case "cssButton":
                    document.getElementById("cssTextarea").classList.add("disabled")
                    break
                case "jsButton":
                    document.getElementById("jsTextarea").classList.add("disabled")
                    break
                case "outputButton":
                    document.getElementById("output").classList.add("disabled")
                    break
            }
        } else {
            this.classList.add("active")
            switch (this.id) {
                case "htmlButton":
                    document.getElementById("htmlTextarea").classList.remove("disabled")
                    break
                case "cssButton":
                    document.getElementById("cssTextarea").classList.remove("disabled")
                    break
                case "jsButton":
                    document.getElementById("jsTextarea").classList.remove("disabled")
                    break
                case "outputButton":
                    document.getElementById("output").classList.remove("disabled")
                    break
            }
        }
    })
})

const html = document.getElementById("htmlTextarea")
html.addEventListener("keyup", () => {
    webpage.body = html.value
})

const css = document.getElementById("cssTextarea")
css.addEventListener("keyup", () => {
    webpage.css = css.value
})

const code = document.getElementById("jsTextarea")
code.addEventListener("keyup", () => {
    webpage.code = code.value
})


const output = document.getElementById("output") //.contentWindow.document
document.addEventListener("keyup", () => {
    let page = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sandbox</title>
        <style>
            ${webpage.css}
        </style>
    </head>
    <body>
        ${webpage.body}
        <script>${webpage.code}</script>
    </body>
    </html>
    `
    output.srcdoc = page
    // output.open()
    // output.write(webpage.body)
    // output.close
})

const font_input = document.getElementById("font");

const font_size = document.getElementById("font_size");

const settings = document.getElementById("settings");
const settingsPanel = document.querySelector(".settings-aside");
settings.addEventListener("click", (e) => {
    e.preventDefault();
    settingsPanel.classList.add("settings-on");
});

const leaveSettings = document.getElementById("leave_settings");
leaveSettings.addEventListener("click", (e) => {
    e.preventDefault();
    settingsPanel.classList.remove("settings-on");
});


const saveSettings = document.getElementById("apply_settings");
apply_settings.addEventListener("click", (e) => {
    e.preventDefault();
    
    html.style.fontFamily = font_input.value;
    css.style.fontFamily = font_input.value;
    code.style.fontFamily = font_input.value;

    html.style.fontSize = font_size.value + "px";
    css.style.fontSize = font_size.value + "px";
    code.style.fontSize = font_size.value + "px";
});
