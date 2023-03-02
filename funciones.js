
function MostrarPerfil(){
		document.getElementById("Perfil").style.display = "block";
		document.getElementById("Habilidades").style.display= "none";
		document.getElementById("Idiomas").style.display= "none";
		document.getElementById("Software").style.display= "none";
		document.getElementById("Experiencia").style.display= "none";
		document.getElementById("Formación").style.display= "none";
        document.getElementById("PNav").classList.add("borderColor");
        document.getElementById("HNav").classList.remove("borderColor");
        document.getElementById("INav").classList.remove("borderColor");
        document.getElementById("ENav").classList.remove("borderColor");
        document.getElementById("FNav").classList.remove("borderColor");
        document.getElementById("SNav").classList.remove("borderColor");
		};

function MostrarHabilidades(){
		document.getElementById("Perfil").style.display= "none";
		document.getElementById("Habilidades").style.display= "block";
		document.getElementById("Idiomas").style.display= "none";
		document.getElementById("Software").style.display= "none";
		document.getElementById("Experiencia").style.display= "none";
		document.getElementById("Formación").style.display= "none";
        document.getElementById("PNav").classList.remove("borderColor");
        document.getElementById("HNav").classList.add("borderColor");
        document.getElementById("INav").classList.remove("borderColor");
        document.getElementById("ENav").classList.remove("borderColor");
        document.getElementById("FNav").classList.remove("borderColor");
        document.getElementById("SNav").classList.remove("borderColor");
		};

function MostrarIdiomas(){
		document.getElementById("Perfil").style.display= "none";
		document.getElementById("Habilidades").style.display="none";
		document.getElementById("Idiomas").style.display="block";
		document.getElementById("Software").style.display="none";
		document.getElementById("Experiencia").style.display="none";
		document.getElementById("Formación").style.display="none";
        document.getElementById("PNav").classList.remove("borderColor");
        document.getElementById("HNav").classList.remove("borderColor");
        document.getElementById("INav").classList.add("borderColor");
        document.getElementById("ENav").classList.remove("borderColor");
        document.getElementById("FNav").classList.remove("borderColor");
        document.getElementById("SNav").classList.remove("borderColor");
		};
function MostrarSoftware(){
		document.getElementById("Perfil").style.display="none";
		document.getElementById("Habilidades").style.display="none";
		document.getElementById("Idiomas").style.display="none";
		document.getElementById("Software").style.display="block";
		document.getElementById("Experiencia").style.display="none";
		document.getElementById("Formación").style.display="none";
        document.getElementById("PNav").classList.remove("borderColor");
        document.getElementById("HNav").classList.remove("borderColor");
        document.getElementById("INav").classList.remove("borderColor");
        document.getElementById("ENav").classList.remove("borderColor");
        document.getElementById("FNav").classList.remove("borderColor");
        document.getElementById("SNav").classList.add("borderColor");
		};

function MostrarExperiencia(){
		document.getElementById("Perfil").style.display="none";
		document.getElementById("Habilidades").style.display="none";
		document.getElementById("Idiomas").style.display="none";
		document.getElementById("Software").style.display="none";
		document.getElementById("Experiencia").style.display="block";
		document.getElementById("Formación").style.display="none";
        document.getElementById("PNav").classList.remove("borderColor");
        document.getElementById("HNav").classList.remove("borderColor");
        document.getElementById("INav").classList.remove("borderColor");
        document.getElementById("ENav").classList.add("borderColor");
        document.getElementById("FNav").classList.remove("borderColor");
        document.getElementById("SNav").classList.remove("borderColor");
		};

function MostrarFormación(){
		document.getElementById("Perfil").style.display="none";
		document.getElementById("Habilidades").style.display="none";
		document.getElementById("Idiomas").style.display="none";
		document.getElementById("Software").style.display="none";
		document.getElementById("Experiencia").style.display="none";
		document.getElementById("Formación").style.display="block";
        document.getElementById("PNav").classList.remove("borderColor");
        document.getElementById("HNav").classList.remove("borderColor");
        document.getElementById("INav").classList.remove("borderColor");
        document.getElementById("ENav").classList.remove("borderColor");
        document.getElementById("FNav").classList.add("borderColor");
        document.getElementById("SNav").classList.remove("borderColor");
		};
