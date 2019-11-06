function changeImage() {
    document.getElementById("WelkomFoto").src = "Images/Home_foto.jpeg" ;
    document.getElementById("Inhoud").innerHTML = "Dit is mijn portfolio website. Hierin staat alles over mij, tot mijn hobby’s tot mijn vaardigheden en de projecten waar ik in deelgenomen heb. Neem gerust uw tijd en bekijk mijn website." ;
    document.getElementById("Titel").innerHTML = "Welkom" ;
}

function changeImage2() {
    document.getElementById("WelkomFoto").src = "Images/Japan_Hobby.jpeg" ;
    document.getElementById("Inhoud").innerHTML = "Ik ben een internationale student geweest in Japan, Hierdoor houd ik van alles wat met Japan te maken heeft en kan ik ook JLPT niveau 4 Japans. De foto hierboven is van mij en mijn gastbroertje Yuuto." ;
    document.getElementById("Titel").innerHTML = "Japan" ;
}

function changeImage3() {
    document.getElementById("WelkomFoto").src = "Images/Magic_Hobby.jpeg" ;
    document.getElementById("Inhoud").innerHTML = "Een van mijn favourite hobby's is Magic The Gathering, een Kaartspel waar je speelt als een tovernaar en krachte spreuken gebruikt om je tegenstander te verslaan." ;
    document.getElementById("Titel").innerHTML = "Magic The Gathering" ;
}

window.onload = setInterval(clock,1000);
    function clock()
    {
        var d = new Date();
        var date = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth();
        var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
        month = monthArr[month];
        document.getElementById("date").innerHTML=date+" "+month+", "+year;
    }

function Like(){
    document.getElementById("KleurLike").style.backgroundColor = "green" ;
}

function DisLike(){
    document.getElementById("KleurLike").style.backgroundColor = "#8b0000" ;
}

function ProjectFoto1(){
    document.getElementById("ProjectFoto").src = "Images/Project_Foto2.png" ;
}

function ProjectFoto2(){
    document.getElementById("ProjectFoto").src = "Images/Project_Foto.png" ;
}