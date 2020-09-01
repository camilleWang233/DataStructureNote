
    const person_div = document.querySelector(".person_div");
    const person_img = document.querySelector(".person_img");
    const z_div = document.querySelector(".z_div");
    let img = document.createElement("img");
    let img_1 = document.querySelector(".img_1");
    let xz = document.getElementById("xzRange")
    let i = 0;
    function dressme() {
        if (i == 0) {
            console.log("1", i);

            img.setAttribute("src", "../../../assets/imgs/02.png");
            img.setAttribute("onclick", "chooseme()");
            img.setAttribute("class", "img_1");
            person_img.appendChild(img);
            i = 1;
            console.log("2", i);
            img.style.opacity = "1";

        } else {


            img.style.opacity = "0";
            i = 0;
            console.log("2333", i);
        }

    }
    function chooseme() {

        z_div.style.opacity = "1";

        let test = xz.value;

        console.log(test);
        // img_1.transform= rotate(xz);

        // transform:rotate(9deg);

    };
    function xFunction() {
        let x = document.getElementById("xRange").value;
        img.style.left = x + "px";
    }
    function yFunction() {
        let y = document.getElementById("yRange").value;
        img.style.top = y + "px";
    }
    function zFunction() {
        let z = document.getElementById("zRange").value;
        img.style.zIndex = z ;
    }
    function xzFunction() {
        let xz = document.getElementById("xzRange").value;
        console.log("444", xz);
        img.style.transform = `rotate(${xz}deg)`;

    }
    function change() {
        var value = document.getElementById('range').value;
        document.getElementById('value').innerHTML = value;
    }

