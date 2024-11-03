var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});

function cambiarIdioma(idioma) {
    if (idioma == 'Español') {
        Español();
    }
    if (idioma == 'Inglés') {
        Ingles();
    }
    if (idioma == 'Portugués') {
        Portugues();
    }
    if (idioma == 'Francés') {
        Frances();
    }

}


function Español() {
    document.getElementById("Español").textContent = 'Español';
    document.getElementById("Inglés").textContent = 'Inglés';
    document.getElementById("Portugués").textContent = 'Portugués';
    document.getElementById("Francés").textContent = 'Francés';

    document.getElementById("txt1").textContent = 'Descubre tu mejor versión. Conviértete en una versión más fuerte, saludable y feliz de ti mismo/a.';
    document.getElementById("txt2").textContent = '¡Únete a nuestra familia y comienza tu viaje hacia la salud y el bienestar hoy!';


    document.getElementById("Bene").textContent = 'BENEFICIOS';
    document.getElementById("t1.1").textContent = 'Mejora de la salud física:';
    document.getElementById("t1.2").textContent = 'El ejercicio regular es fundamental para mantener una buena salud física. Te brindamos acceso a una amplia variedad de equipos y clases de fitness que pueden ayudarte a desarrollar fuerza, resistencia, flexibilidad y equilibrio.';
    document.getElementById("t2.1").textContent = 'Bienestar mental:';
    document.getElementById("t2.2").textContent = 'El ejercicio también es beneficioso para la salud mental, ya que puede ayudar a reducir el estrés, la ansiedad y la depresión. Nuestro gimnasio puede ser un excelente lugar para conocer nuevas personas y hacer amigos que comparten tus intereses.';
    document.getElementById("t3.1").textContent = 'Comodidad y flexibilidad:';
    document.getElementById("t3.2").textContent = 'Inscribirte a nuestro gimnasio te brinda la flexibilidad de poder hacer ejercicio en cualquier momento del día, independientemente del clima o de tu horario de trabajo. Además, de que contarás con diferentes tipos de equipos y entrenamientos para que puedas elegir la actividad que mejor se adapte a tus necesidades y objetivos.';

    document.getElementById("Contact").textContent = 'Contacta con Nosotros';
    let hola = document.getElementById("1");
    hola.placeholder = "Nombre"
    let hola2 = document.getElementById("2");
    hola2.placeholder = "Apellido(s)"
    let hola3 = document.getElementById("3");
    hola3.placeholder = "Teléfono"
    let hola4 = document.getElementById("4");
    hola4.placeholder = "Correo"
    let hola5 = document.getElementById("5");
    hola5.placeholder = "Describa sus objetivos"
    let boton = document.getElementById("boton");
    boton.value = "Enviar";

    document.getElementById("recomen").textContent = 'RECOMENDACIONES';
    document.getElementById("laid").textContent = 'David Laid';
    document.getElementById("r1").textContent = 'Power Gym me ha brindado una experiencia excepcional. Su equipo amable y profesional me ha guiado en cada paso hacia mis objetivos de acondicionamiento físico. ¡Definitivamente el mejor gimnasio para alcanzar tus metas!';
    document.getElementById("cbum").textContent = 'Chris Bumstead';
    document.getElementById("r2").textContent = 'Desde mi primer día en Power Gym, me sentí bienvenido y motivado. Los instructores comprometidos y las instalaciones bien equipadas hacen que entrenar sea un placer.He logrado perder peso y tonificar mi cuerpo gracias a sus programas personalizados. ¡Una experiencia de ejercicio enriquecedora que recomendaría a todos!';
    document.getElementById("dino").textContent = 'Ramón Dino';
    document.getElementById("r3").textContent = 'Power Gym ha sido un salvavidas para mi ajetreada vida. Con horarios flexibles y entrenadores atentos, puedo mantenerme en forma sin problemas.Me siento más fuerte y saludable, ¡Y lo debo todo a este gimnasio!';

}


function Ingles() {
    document.getElementById("Español").textContent = 'Spanish';
    document.getElementById("Inglés").textContent = 'English';
    document.getElementById("Portugués").textContent = 'Portuguese';
    document.getElementById("Francés").textContent = 'French';

    document.getElementById("txt1").textContent = 'Discover your best version. Become a stronger, healthier and happier version of yourself.';
    document.getElementById("txt2").textContent = 'Join our family and begin your journey to health and wellness today!';


    document.getElementById("Bene").textContent = 'BENEFITS';
    document.getElementById("t1.1").textContent = 'Improved physical health:';
    document.getElementById("t1.2").textContent = 'Regular exercise is essential to maintaining good physical health. We provide you with access to a wide variety of fitness equipment and classes that can help you develop strength, endurance, flexibility and balance.';
    document.getElementById("t2.1").textContent = 'Mental Wellness:';
    document.getElementById("t2.2").textContent = 'Exercise is also beneficial for mental health, as it can help reduce stress, anxiety and depression. Our gym can be a great place to meet new people and make friends who share your interests.';
    document.getElementById("t3.1").textContent = 'Convenience and flexibility:';
    document.getElementById("t3.2").textContent = 'Joining our gym gives you the flexibility to work out at any time of the day, regardless of the weather or your work schedule. In addition, you will have different types of equipment and workouts so you can choose the activity that best suits your needs and goals.';

    document.getElementById("Contact").textContent = 'Contact Us';
    let hola = document.getElementById("1");
    hola.placeholder = "First Name"
    let hola2 = document.getElementById("2");
    hola2.placeholder = "Last Name"
    let hola3 = document.getElementById("3");
    hola3.placeholder = "Phone"
    let hola4 = document.getElementById("4");
    hola4.placeholder = "E-mail"
    let hola5 = document.getElementById("5");
    hola5.placeholder = "Describe your objectives"
    let boton = document.getElementById("boton");
    boton.value = "Send";

    document.getElementById("recomen").textContent = 'RECOMMENDATIONS';
    document.getElementById("laid").textContent = 'David Laid';
    document.getElementById("r1").textContent = 'Power Gym has provided me with an exceptional experience. Their friendly and professional staff has guided me every step of the way towards my fitness goals - definitely the best gym to reach your goals!';
    document.getElementById("cbum").textContent = 'Chris Bumstead';
    document.getElementById("r2").textContent = 'From my first day at Power Gym, I felt welcomed and motivated. The committed instructors and well-equipped facilities make working out a pleasure.I have been able to lose weight and tone my body thanks to their personalized programs.An enriching exercise experience that I would recommend to everyone!';
    document.getElementById("dino").textContent = 'Ramón Dino';
    document.getElementById("r3").textContent = 'Power Gym has been a lifesaver for my busy life. With flexible schedules and attentive trainers, I can stay in shape with no problems, I feel stronger and healthier, and I owe it all to this gym!';

}

function Portugues() {
    document.getElementById("Español").textContent = 'Espanhol';
    document.getElementById("Inglés").textContent = 'Inglês';
    document.getElementById("Portugués").textContent = 'Português';
    document.getElementById("Francés").textContent = 'Francês';

    document.getElementById("txt1").textContent = 'Descobrir a melhor versão de si próprio. Torne-se uma versão mais forte, mais saudável e mais feliz de si mesmo.';
    document.getElementById("txt2").textContent = 'Junte-se à nossa família e comece hoje mesmo a sua viagem para a saúde e o bem-estar!';


    document.getElementById("Bene").textContent = 'BENEFÍCIOS';
    document.getElementById("t1.1").textContent = 'Melhoria da saúde física:';
    document.getElementById("t1.2").textContent = 'O exercício regular é essencial para manter uma boa saúde física. Proporcionamos acesso a uma vasta gama de equipamento de fitness e a aulas que o podem ajudar a desenvolver a força, a resistência, a flexibilidade e o equilíbrio.';
    document.getElementById("t2.1").textContent = 'Bienestar mental:';
    document.getElementById("t2.2").textContent = 'O exercício também é benéfico para a saúde mental, uma vez que pode ajudar a reduzir o stress, a ansiedade e a depressão. O nosso ginásio pode ser um excelente local para conhecer novas pessoas e fazer amigos que partilham os seus interesses.';
    document.getElementById("t3.1").textContent = 'Comodidade e flexibilidade:';
    document.getElementById("t3.2").textContent = 'Ao aderir ao nosso ginásio, tem a flexibilidade de fazer exercício a qualquer hora do dia, independentemente do tempo ou do seu horário de trabalho. Além disso, terá à sua disposição diferentes tipos de equipamento e exercícios para que possa escolher a atividade que melhor se adapta às suas necessidades e objectivos.';

    document.getElementById("Contact").textContent = 'Contacto connosco';
    let hola = document.getElementById("1");
    hola.placeholder = "Nome"
    let hola2 = document.getElementById("2");
    hola2.placeholder = "Apelido"
    let hola3 = document.getElementById("3");
    hola3.placeholder = "Telefone"
    let hola4 = document.getElementById("4");
    hola4.placeholder = "Correio"
    let hola5 = document.getElementById("5");
    hola5.placeholder = "Descreva os seus objectivos"
    let boton = document.getElementById("boton");
    boton.value = "Enviar";

    document.getElementById("recomen").textContent = 'RECOMENDAÇÕES';
    document.getElementById("laid").textContent = 'David Laid';
    document.getElementById("r1").textContent = 'O Power Gym proporcionou-me uma experiência excecional. A sua equipa simpática e profissional orientou-me em todos os passos para atingir os meus objectivos de fitness - definitivamente o melhor ginásio para atingir os seus objectivos!';
    document.getElementById("cbum").textContent = 'Chris Bumstead';
    document.getElementById("r2").textContent = 'Desde o meu primeiro dia no Power Gym, senti-me bem recebido e motivado. Os instrutores empenhados e as instalações bem equipadas tornam o treino um prazer, consegui perder peso e tonificar o meu corpo graças aos seus programas personalizados - uma experiência de exercício enriquecedora que recomendo a todos!';
    document.getElementById("dino").textContent = 'Ramón Dino';
    document.getElementById("r3").textContent = 'O Power Gym tem sido um salva-vidas para a minha vida atarefada. Com horários flexíveis e treinadores atenciosos, consigo manter-me em forma sem qualquer problema, sinto-me mais forte e saudável, e devo tudo a este ginásio!';

}

function Frances() {
    document.getElementById("Español").textContent = 'Espagnol';
    document.getElementById("Inglés").textContent = 'Anglais';
    document.getElementById("Portugués").textContent = 'Portugais';
    document.getElementById("Francés").textContent = 'Français';

    document.getElementById("txt1").textContent = 'Découvrez la meilleure version de vous-même. Devenez une version plus forte, plus saine et plus heureuse de vous-même.';
    document.getElementById("txt2").textContent = "Rejoignez notre famille et commencez dès aujourd'hui votre voyage vers la santé et le bien-être !";


    document.getElementById("Bene").textContent = 'BÉNÉFICES';
    document.getElementById("t1.1").textContent = 'Amélioration de la santé physique:';
    document.getElementById("t1.2").textContent = "L'exercice régulier est essentiel au maintien d'une bonne santé physique. Nous offrons un accès à une large gamme d'équipements et de cours de fitness qui peuvent vous aider à développer votre force, votre endurance, votre flexibilité et votre équilibre.";
    document.getElementById("t2.1").textContent = 'Bien-être mental:';
    document.getElementById("t2.2").textContent = "L'exercice est également bénéfique pour la santé mentale, car il peut contribuer à réduire le stress, l'anxiété et la dépression. Notre salle de sport peut être un endroit idéal pour rencontrer de nouvelles personnes et se faire des amis qui partagent vos intérêts.";
    document.getElementById("t3.1").textContent = 'Confort et flexibilité:';
    document.getElementById("t3.2").textContent = "En rejoignant notre salle de sport, vous pourrez vous entraîner à tout moment de la journée, quels que soient le temps ou votre horaire de travail. De plus, vous disposerez de différents types d'équipements et de séances d'entraînement, ce qui vous permettra de choisir l'activité qui correspond le mieux à vos besoins et à vos objectifs.";

    document.getElementById("Contact").textContent = 'Nous contacter';
    let hola = document.getElementById("1");
    hola.placeholder = "Nom"
    let hola2 = document.getElementById("2");
    hola2.placeholder = "Nom de famille"
    let hola3 = document.getElementById("3");
    hola3.placeholder = "Téléphone"
    let hola4 = document.getElementById("4");
    hola4.placeholder = "Courriel"
    let hola5 = document.getElementById("5");
    hola5.placeholder = "Décrivez vos objectifs"
    let boton = document.getElementById("boton");
    boton.value = "Envoyer";

    document.getElementById("recomen").textContent = 'RECOMMANDATIONS';
    document.getElementById("laid").textContent = 'David Laid';
    document.getElementById("r1").textContent = "Power Gym m'a fait vivre une expérience exceptionnelle.Leur personnel amical et professionnel m'a guidé à chaque étape de la réalisation de mes objectifs de remise en forme - sans aucun doute la meilleure salle de sport pour atteindre vos objectifs!";
    document.getElementById("cbum").textContent = 'Chris Bumstead';
    document.getElementById("r2").textContent = "Dès mon premier jour à Power Gym, je me suis sentie accueillie et motivée. Les instructeurs engagés et les installations bien équipées font de l'entraînement un plaisir, j'ai pu perdre du poids et tonifier mon corps grâce à leurs programmes personnalisés - une expérience d'exercice enrichissante que je recommanderais à tout le monde!";
    document.getElementById("dino").textContent = 'Ramón Dino';
    document.getElementById("r3").textContent = "Power Gym m'a sauvé la vie dans ma vie trépidante. Avec des horaires flexibles et des entraîneurs attentifs, je peux rester en forme sans problème, je me sens plus forte et en meilleure santé, et je dois tout cela à cette salle de sport!";

}