function displaySection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('d-none');
    });
    
    // Show the selected section with a fade-in effect
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('d-none');
    selectedSection.style.opacity = 0;
    setTimeout(() => {
        selectedSection.style.opacity = 1;
    }, 10);
}

function contactSupport(orgName) {
    alert(`You are now being connected with ${orgName}. Please check your email or phone for further instructions.`);
}

function sendAlert() {
    alert("Panic alert sent to your emergency contacts.");
    // Additional code to send an actual alert can be added here
}

// script.js

// Ensure the document is loaded before attaching events
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('questionForm');
    const responseContainer = document.getElementById('responseContainer');
    const responseElement = document.getElementById('response');

    // Handle form submission asynchronously
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from reloading the page

        const question = document.getElementById('user_question').value;

        // Check if the input is not empty
        if(question.trim() !== "") {
            fetch('/get_response', {
                method: 'POST',
                body: new URLSearchParams({
                    'user_question': question
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(response => response.text())
            .then(data => {
                // Show response on the page
                responseElement.innerHTML = data;
                responseContainer.style.display = "block";
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});


// Language data object to store translations for all sections
const languageData = {
    en: {
        homepageHead: "We are here for you... <span id='believe-text'>Believe in Us</span>",
        homepagePara: "You came here helpless, but you'll leave with a new life.",
        diveInButton: "Dive In",
        resourcesInfo: "Resources and Information",
        contactInfo: "Contact Lawyers and NGOs",
        solutionsHead: "Get the Solutions",
        chatbotText: "Chat with ChatBot",
        databaseSolutions: "Database solutions",
        resourcesTitle: "Resources & Information",
        resourcesInfoTitle: "Resources & Information",
        resourcesDescription: "Access important information and resources to help you navigate through difficult times.",
        understandingTitle: "Understanding Domestic Violence",
        understandingDesc: "Learn about the different forms of abuse, signs to look out for, and how to protect yourself.",
        legalRightsTitle: "Know Your Legal Rights",
        legalRightsDesc: "Understand the laws surrounding domestic violence and your rights in such situations.",
        safetyPlanningTitle: "Create a Safety Plan",
        safetyPlanningDesc: "A step-by-step guide to help you plan for your safety in case of an emergency.",
        questionFormLabel: "Enter your question:",
        buttonAsk: "Ask",
        buttonNext: "next",
        responseContainerText: "your question and get an immediate response.",
        contactTitle: "Contact Lawyers & NGOs",
        contactDescription: "We have partnered with trusted legal professionals and organizations to provide the support you need.",
        legalAidTitle: "Legal Aid Foundation",
        legalAidDesc: "Specialized in domestic violence cases.",
        emailLabel: "Email:",
        phoneLabel: "Phone:",
        womensShelterTitle: "Women’s Shelter Organization",
        womensShelterDesc: "Provides safe spaces and emergency housing.",
        safeHandsTitle: "SafeHands Law Firm",
        safeHandsDesc: "Experienced lawyers in family law and domestic abuse cases."
    },
    hi: {
        homepageHead: "हम आपके लिए यहाँ हैं... <span id='believe-text'>हम पर विश्वास करें</span>",
        homepagePara: "आप यहाँ निराश होकर आए हैं, लेकिन आप एक नई जिंदगी के साथ जाएंगे।",
        diveInButton: "आगे बढ़ें",
        resourcesInfo: "संसाधन और जानकारी",
        contactInfo: "वकीलों और एनजीओ से संपर्क करें",
        solutionsHead: "समाधान प्राप्त करें",
        chatbotText: "चैटबॉट से बात करें",
        databaseSolutions: "डेटाबेस समाधान",
        resourcesTitle: "संसाधन और जानकारी",
        resourcesInfoTitle: "संसाधन और जानकारी",
        resourcesDescription: "महत्वपूर्ण जानकारी और संसाधनों तक पहुँच प्राप्त करें, ताकि आप कठिन समय से गुजरते हुए मार्गदर्शन प्राप्त कर सकें।",
        understandingTitle: "घरेलू हिंसा को समझना",
        understandingDesc: "दुरुपयोग के विभिन्न रूपों के बारे में जानें, ध्यान रखने योग्य संकेत, और अपनी रक्षा कैसे करें।",
        legalRightsTitle: "अपने कानूनी अधिकारों को जानें",
        legalRightsDesc: "घरेलू हिंसा से संबंधित कानूनों और इस तरह की परिस्थितियों में आपके अधिकारों को समझें।",
        safetyPlanningTitle: "सुरक्षा योजना बनाएं",
        safetyPlanningDesc: "आपकी सुरक्षा के लिए आपातकालीन स्थिति में कदम उठाने के लिए एक कदम दर कदम मार्गदर्शिका।",
        questionFormLabel: "अपना सवाल दर्ज करें:",
        buttonAsk: "पूछें",
        buttonNext: "अगला",
        responseContainerText: "आपका सवाल और तत्काल प्रतिक्रिया प्राप्त करें।",
        contactTitle: "वकीलों और एनजीओ से संपर्क करें",
        contactDescription: "हमने आपके समर्थन के लिए विश्वसनीय कानूनी पेशेवरों और संगठनों के साथ साझेदारी की है।",
        legalAidTitle: "लीगल एड फाउंडेशन",
        legalAidDesc: "घरेलू हिंसा के मामलों में विशेषज्ञ।",
        emailLabel: "ईमेल:",
        phoneLabel: "फोन:",
        womensShelterTitle: "महिला आश्रय संगठन",
        womensShelterDesc: "सुरक्षित स्थान और आपातकालीन आवास प्रदान करते हैं।",
        safeHandsTitle: "सुरक्षित हाथ कानून फर्म",
        safeHandsDesc: "परिवार कानून और घरेलू हिंसा के मामलों में अनुभवी वकील।"
    },
    te: {
        homepageHead: "మేము మీ కోసం ఇక్కడ ఉన్నాము... <span id='believe-text'>మమ్మల్ని నమ్మండి</span>",
        homepagePara: "మీరు ఇక్కడ సహాయం లేకుండా వచ్చారు, కానీ మీరు ఒక కొత్త జీవితంతో వెళ్లిపోతారు.",
        diveInButton: "ముందు వెళ్లండి",
        resourcesInfo: "సంస్థలు మరియు సమాచారం",
        contactInfo: "న్యాయవాదులు మరియు NGO లతో సంప్రదించండి",
        solutionsHead: "పరిష్కారాలు పొందండి",
        chatbotText: "చాట్‌బాట్‌తో మాట్లాడండి",
        databaseSolutions: "డేటాబేస్ పరిష్కారాలు",
        resourcesTitle: "సంస్థలు మరియు సమాచారం",
        resourcesInfoTitle: "సంస్థలు మరియు సమాచారం",
        resourcesDescription: "కఠినమైన సమయాల్లో మీకు మార్గదర్శనం అందించే కీలకమైన సమాచారం మరియు వనరులు.",
        understandingTitle: "గృహ హింసను అర్థం చేసుకోండి",
        understandingDesc: "దుర్వినియోగం యొక్క వివిధ రూపాలు, గుర్తించాల్సిన సంకేతాలు మరియు మీ రక్షణ ఎలా చేయాలో తెలుసుకోండి.",
        legalRightsTitle: "మీ లెగల్ హక్కులను తెలుసుకోండి",
        legalRightsDesc: "గృహ హింసకు సంబంధించిన చట్టాలు మరియు ఇలాంటి పరిస్థితుల్లో మీ హక్కులను అర్థం చేసుకోండి.",
        safetyPlanningTitle: "భద్రతా ప్రణాళిక తయారుచేసుకోండి",
        safetyPlanningDesc: "ప్రమాదమైన సమయంలో మీ భద్రత కోసం మీకు అడుగు అడుగు మార్గదర్శకంగా సహాయపడే పథకం.",
        questionFormLabel: "మీ ప్రశ్నను నమోదు చేయండి:",
        buttonAsk: "చోటు",
        buttonNext: "తరువాత",
        responseContainerText: "మీ ప్రశ్న మరియు వెంటనే స్పందన.",
        contactTitle: "న్యాయవాదులు మరియు NGO లతో సంప్రదించండి",
        contactDescription: "మీకు అవసరమైన మద్దతు అందించడానికి నమ్మకమైన న్యాయవాదులు మరియు సంస్థలతో మేము భాగస్వామ్యాలుంటాము।",
        legalAidTitle: "లెగల్ ఎయిడ్ ఫౌండేషన్",
        legalAidDesc: "గృహ హింస కేసులలో నిపుణులు.",
        womensShelterTitle: "మహిళలShelter సంస్ధ",
        womensShelterDesc: "ఆపత్తు హౌసింగ్ మరియు భద్రతా ప్రదేశాలు అందిస్తాయి.",
        safeHandsTitle: "సేఫ్ హ్యాండ్స్ లా ఫర్మ్",
        safeHandsDesc: "కుటుంబ న్యాయం మరియు గృహ హింస కేసులలో అనుభవజ్ఞులైన న్యాయవాదులు."
    }
};

// Function to change the language dynamically
function changeLanguage() {
    let lang = document.getElementById("languageSelect").value;

    // Update text content based on selected language
    document.getElementById("homepage-head").innerHTML = languageData[lang].homepageHead;
    document.getElementById("homepage-para").innerHTML = languageData[lang].homepagePara;
    document.getElementById("homepage-btn").innerText = languageData[lang].diveInButton;
    document.getElementById("resources-info").innerText = languageData[lang].resourcesInfo;
    document.getElementById("contact-info").innerText = languageData[lang].contactInfo;
    document.getElementById("solutions-head").innerText = languageData[lang].solutionsHead;
    document.getElementById("chatbot-text").innerText = languageData[lang].chatbotText;
    document.getElementById("database-solutions").innerText = languageData[lang].databaseSolutions;
    document.getElementById("resources-title").innerText = languageData[lang].resourcesTitle;
    document.getElementById("resources-info-title").innerText = languageData[lang].resourcesInfoTitle;
    document.getElementById("resources-description").innerText = languageData[lang].resourcesDescription;
    document.getElementById("understanding-title").innerText = languageData[lang].understandingTitle;
    document.getElementById("understanding-desc").innerText = languageData[lang].understandingDesc;
    document.getElementById("legal-rights-title").innerText = languageData[lang].legalRightsTitle;
    document.getElementById("legal-rights-desc").innerText = languageData[lang].legalRightsDesc;
    document.getElementById("safety-planning-title").innerText = languageData[lang].safetyPlanningTitle;
    document.getElementById("safety-planning-desc").innerText = languageData[lang].safetyPlanningDesc;
    document.getElementById("questionForm").querySelector('label').innerText = languageData[lang].questionFormLabel;
    document.getElementById("next-chat-btn").innerText = languageData[lang].buttonAsk;
    document.getElementById("responseContainer").innerText = languageData[lang].responseContainerText;
    document.getElementById("contact-title").innerText = languageData[lang].contactTitle;
    document.getElementById("contact-description").innerText = languageData[lang].contactDescription;
    document.getElementById("legal-aid-title").innerText = languageData[lang].legalAidTitle;
    document.getElementById("legal-aid-desc").innerText = languageData[lang].legalAidDesc;
    document.getElementById("email-label").innerText = languageData[lang].emailLabel;
    document.getElementById("phone-label").innerText = languageData[lang].phoneLabel;
    document.getElementById("womens-shelter-title").innerText = languageData[lang].womensShelterTitle;
    document.getElementById("womens-shelter-desc").innerText = languageData[lang].womensShelterDesc;
    document.getElementById("safe-hands-title").innerText = languageData[lang].safeHandsTitle;
    document.getElementById("safe-hands-desc").innerText = languageData[lang].safeHandsDesc;

    const selectedLanguage = document.getElementById("languageSelect").value;

    // Find all elements with data attributes
    const elements = document.querySelectorAll("[data-en]");
    elements.forEach((element) => {
        // Set text based on selected language
        element.textContent = element.getAttribute(`data-${selectedLanguage}`);
    });

    // Update placeholders
    const placeholders = document.querySelectorAll("textarea, input");
    placeholders.forEach((input) => {
        if (input.hasAttribute(`data-${selectedLanguage}`)) {
            input.placeholder = input.getAttribute(`data-${selectedLanguage}`);
        }
    });
}


// Initialize language on page load
changeLanguage();
