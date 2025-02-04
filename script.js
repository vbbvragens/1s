// script.js

const answers = {
    1: 'B',
    2: 'B',
    3: 'D',
    4: 'B',
    5: 'A',
    6: 'B',
    7: 'B',
    8: 'D',
    9: 'C',
    10: 'B',
    11: 'C',
    12: 'B',
    13: 'B',
    14: 'C',
    15: 'A',
    16: 'B',
    17: 'D',
    18: 'C',
    19: 'B',
    20: 'C',
    21: 'B',
    22: 'B',
    23: 'A',
    24: 'A',
    25: 'B',
    26: 'D',
    27: 'C',
    28: 'C',
    29: 'B',
    30: 'B'
};

let correctCount = 0; // Aantal juiste antwoorden
let incorrectCount = 0; // Aantal foute antwoorden
const questionCount = Object.keys(answers).length; // Totaal aantal vragen

function getExplanation(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "Het eerste particuliere beveiligingsbedrijf in Nederland werd in 1902 opgericht. Dit jaar markeerde het begin van de ontwikkeling van beveiligingsdiensten.";
        case 2:
            return "Beveiligers hebben als belangrijkste taak om preventieve maatregelen te nemen en potentiële beveiligingsrisico's te verminderen.";
        case 3:
            return "Private ruimtes omvatten doorgaans gebouwen en ondernemingen.";
        case 4:
            return "De veiligheid in publieke ruimtes valt onder de verantwoordelijkheid van de overheid.";
        case 5:
            return "Manbeveiliging verwijst naar beveiligingsdiensten die door een team van mensen worden uitgevoerd.";
        case 6:
            return "Particuliere alarmcentrales zijn bedrijven die beveiligingsdiensten aanbieden.";
        case 7:
            return "Beveiligers houden toezicht op situaties om potentiële veiligheidsrisico's te identificeren.";
        case 8:
            return "Repressief handelen houdt in dat beveiligers ingrijpen bij schendingen van de veiligheid door betrokkenen aan te pakken.";
        case 9:
            return "Alarmeren houdt in dat hulpdiensten worden gewaarschuwd in geval van een noodsituatie.";
        case 10:
            return "Als beveiliger betekent integer zijn dat je eerlijk en transparant handelt en je tegen corruptie beschermt.";
        case 11:
            return "Beveiligers moeten goed kunnen communiceren om veiligheidsrisico's te voorkomen en hulp te kunnen bieden.";
        case 12:
            return "Instructies in de beveiligingsbranche zijn richtlijnen en procedures die beveiligers helpen om de veiligheid te waarborgen.";
        case 13:
            return "Algemene instructies geven beveiligers een breed overzicht van hun taken en verantwoordelijkheden.";
        case 14:
            return "Tijdelijke instructies zijn specifiek voor situaties of gebeurtenissen die van tijdelijke aard zijn.";
        case 15:
            return "Diensten verlenen houdt in dat beveiligers de behoeften van klanten begrijpen en actie ondernemen om beveiligingsrisico's te beheersen.";
        case 16:
            return "Directe diensten zijn de acties die voortkomen uit beveiligingstaken en die direct betrekking hebben op de veiligheid.";
        case 17:
            return "Bij beveiligingstaken gaat de veiligheid eigenlijk altijd voorop ten opzichte van de dienstverlening.";
        case 18:
            return "Een dienstverlenende taak zoals het helpen van iemand in nood kan voorrang hebben boven beveiligingstaken.";
        case 19:
            return "Klantgericht handelen betekent dat je de behoeften van de klant centraal stelt.";
        case 20:
            return "Bij goed communiceren is het belangrijk om duidelijke en begrijpelijke boodschappen over te brengen.";
        case 21:
            return "Als je niet zeker weet hoe je moet handelen, is het verstandig om over te leggen met collega's of een leidinggevende.";
        case 22:
            return "Wanneer je direct moet optreden zonder instructies, is het belangrijk om je gezond verstand en ervaring te gebruiken.";
        case 23:
            return "Publieke ruimtes zijn plaatsen die voor iedereen toegankelijk zijn.";
        case 24:
            return "Technische beveiliging is geen onderdeel van manbeveiliging, dat verwijst naar beveiligingsrisico's die door mensen worden beheerd.";
        case 25:
            return "Een belangrijk aspect van beroepsethiek is het handelen met eerlijkheid en aandacht voor wat juist en verkeerd is.";
        case 26:
            return "Waarden in de beveiligingscontext zijn idealen en ideeën over wat van belang is in de uitvoering van beveiligingstaken.";
        case 27:
            return "Technische beveiliging omvat de installatie van camera's en alarmsystemen ter beveiliging.";
        case 28:
            return "Een van de belangrijkste doelen van instructies is om verwarring en onduidelijkheid te voorkomen.";
        case 29:
            return "Particuliere beveiligingsbedrijven zijn organisaties die beveiligingsdiensten uitvoeren voor klanten.";
        case 30:
            return "De rol van de beveiliger bij evenementen is om de mensen en het terrein te bewaken en ervoor te zorgen dat alles veilig verloopt.";
        default:
            return "";
    }
}

// Cevabı kontrol etme fonksiyonu
function checkAnswer(questionNumber, selectedAnswer, clickedButton) {
    const resultDiv = document.getElementById(`result${questionNumber}`);
    const numberDiv = document.querySelector(`#numberContainer .number:nth-child(${questionNumber})`);

    const buttons = clickedButton.parentElement.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = true;
        button.classList.remove('selected');
        if (button !== clickedButton) {
            button.classList.add('fade');
        }
    });

    clickedButton.classList.add('selected');
    const correctAnswer = answers[questionNumber];

    // Arka plan rengi sınıflarını uygulayın
    if (selectedAnswer === correctAnswer) {
        resultDiv.innerHTML = `<div class="true-result">Correct! ${getExplanation(questionNumber)}</div>`;
        correctCount++;
        numberDiv.classList.add('correct-solved'); // Doğru cevap için sınıf
    } else {
        resultDiv.innerHTML = `<div class="false-result">Fout! Het juiste antwoord is ${correctAnswer}. <br> Verklaring: ${getExplanation(questionNumber)}</div>`;
        incorrectCount++;
        numberDiv.classList.add('incorrect-solved'); // Yanlış cevap için sınıf
    }

    // Çözülen sorunun stilini güncelleyin
    numberDiv.classList.add('solved');

    displayScore();
}

// Score gösterme fonksiyonu
function displayScore() {
    const scoreDiv = document.getElementById('score');
    const totalScore = (correctCount / questionCount) * 10;
    scoreDiv.innerHTML = `Je score is ${correctCount} van de ${questionCount} vragen. <br> Foute antwoorden: ${incorrectCount}. <br> Totale score: ${totalScore.toFixed(1)} /10 `;
    displayNumbers();
}

function navigateToQuestion(index) {
    console.log(`Navigating to question ${index}`); // Debugging için
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, i) => {
        question.style.display = (i === index) ? 'block' : 'none';
    });
    // Scroll naar de geselecteerde vraag
    questions[index].scrollIntoView({ behavior: "smooth" });
}

// Numara görüntüleme fonksiyonu
function displayNumbers() {
    const numberContainer = document.getElementById('numberContainer');
    numberContainer.innerHTML = '';

    for (let i = 1; i <= questionCount; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.innerText = i;

        // Numaraya tıklama olayını ekle
        numberDiv.addEventListener('click', (e) => {
            console.log(`Number ${i} clicked`);  // Tıklama olayını kontrol etmek için
            const questions = document.querySelectorAll('.question');
            questions.forEach((q, index) => {
                q.style.display = (index + 1 === i) ? 'block' : 'none';
            });
            // Soruya kaydırma
            const questionElement = document.querySelector(`.question:nth-child(${i})`);
            if (questionElement) questionElement.scrollIntoView({ behavior: "smooth" });
        });

        // Çözülen sorular için stil ekle
        if (document.getElementById(`result${i}`).innerHTML !== '') {
            numberDiv.classList.add('solved');
        }

        numberContainer.appendChild(numberDiv);
    }
}

// Sayfa yüklendikten sonra numaraları göster
document.addEventListener('DOMContentLoaded', () => {
    displayNumbers();
});

// Tüm soruları gösterme fonksiyonu
function showAllQuestions() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.display = 'block'; // Tüm soruları göstermek için stil ayarı
    });
}

// Yan paneli açıp kapayan fonksiyon
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show'); // 'show' sınıfını ekle veya kaldır
}

// Event listener ekleme
document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
document.getElementById('showAllQuestions').addEventListener('click', showAllQuestions);

// Dark mode toggle
document.getElementById('toggleButton').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Buton metnini güncelle
    const isDarkMode = body.classList.contains('dark-mode');
    document.getElementById('toggleButton').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Sayfa yüklendikten sonra numaraları göster
document.addEventListener('DOMContentLoaded', () => {
    displayNumbers();
    // Vragenlijst butonuna tıklama olayı ekleniyor
    document.querySelector('#vragenlijst').addEventListener('click', () => {
        console.log('Vragenlijst tuşuna tıklanmış'); // Konsol çıktısı
        showAllQuestions(); // Tüm soruları göster
    });
});