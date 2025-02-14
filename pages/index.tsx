import Head from "next/head";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // On component mount, load saved responses from localStorage
    let allResponses: any[] = [];
    const storedResponses = localStorage.getItem("allResponses");
    if (storedResponses) {
      allResponses = JSON.parse(storedResponses);
    }

    // Handle form submission
    const form = document.getElementById("questionnaireForm") as HTMLFormElement;
    form?.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page reload

      // Create a dictionary with the form values
      const responseData = {
        genre: (document.getElementById("genre") as HTMLSelectElement).value,
        age: (document.getElementById("age") as HTMLInputElement).value,
        annee: (document.getElementById("annee") as HTMLInputElement).value,
        acces: (document.getElementById("acces") as HTMLSelectElement).value,
        utilisation: (document.getElementById("utilisation") as HTMLTextAreaElement).value,
        impact: (document.getElementById("impact") as HTMLTextAreaElement).value,
        strategies: (document.getElementById("strategies") as HTMLTextAreaElement).value,
      };

      // Add the new response to the array
      allResponses.push(responseData);

      // Save updated responses to localStorage
      localStorage.setItem("allResponses", JSON.stringify(allResponses));

      // Log and alert
      console.log("Current Submission:", responseData);
      console.log("All Submissions:", allResponses);
      alert("Vos réponses ont été enregistrées dans un dictionnaire (voir la console).");

      // Optionally reset the form
      form.reset();
    });

    // Handle displaying all responses after authentication
    const showResponsesButton = document.getElementById("showResponsesButton");
    showResponsesButton?.addEventListener("click", () => {
      const username = prompt("Entrez le nom d'utilisateur :");
      const password = prompt("Entrez le mot de passe :");

      // Replace these with your actual credentials
      if (username === "admin" && password === "adminpass") {
        // Load the stored responses from localStorage
        const stored = localStorage.getItem("allResponses");
        const responses = stored ? JSON.parse(stored) : [];
        // Display the stored responses
        const responsesDiv = document.getElementById("responsesDisplay") as HTMLDivElement;
        responsesDiv.style.display = "block";
        responsesDiv.innerHTML =
          "<h3>Contenu du dictionnaire :</h3><pre>" +
          JSON.stringify(responses, null, 2) +
          "</pre>";
      } else {
        alert("Identifiants incorrects !");
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Questionnaire - Cyberaddiction et TIC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Import Roboto font from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h2>Questionnaire - Cyberaddiction et TIC</h2>
        <p>
          Nous sommes GHARBI Meriem et HMAISSI Tasnim, étudiantes en 3ème année sciences infirmières.
          Nous menons notre Projet de Fin d'étude auprès des étudiants de la faculté « UPSAT-Tunis »
          pour évaluer le degré de cyberaddiction et le recours aux TIC comme moyen pédagogique d'apprentissage
          théorique et pratique. Vos réponses resteront anonymes et confidentielles.
        </p>

        <form id="questionnaireForm">
          {/* Section 1: Informations démographiques */}
          <div className="section">
            <h3>Section 1 : Informations démographiques</h3>
            <label htmlFor="genre">Genre :</label>
            <select id="genre" name="genre">
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
              <option value="Autre">Autre</option>
            </select>

            <label htmlFor="age">Âge :</label>
            <input type="number" id="age" name="age" placeholder="Entrez votre âge" min="0" />

            <label htmlFor="annee">Année d'étude :</label>
            <input type="text" id="annee" name="annee" placeholder="Entrez votre année d'étude" />

            <label htmlFor="acces">Avez-vous accès à un ordinateur et à internet à domicile ?</label>
            <select id="acces" name="acces">
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>

          {/* Section 2: Utilisation des outils numériques dans la formation académique */}
          <div className="section">
            <h3>Section 2 : Utilisation des outils numériques dans la formation académique</h3>
            <textarea
              id="utilisation"
              name="utilisation"
              rows={4}
              placeholder="Décrivez votre utilisation des outils numériques dans votre formation académique."
            ></textarea>
          </div>

          {/* Section 3: Impact des outils numériques sur la santé mentale et la gestion du temps */}
          <div className="section">
            <h3>Section 3 : Impact des outils numériques sur la santé mentale et la gestion du temps</h3>
            <textarea
              id="impact"
              name="impact"
              rows={4}
              placeholder="Décrivez l'impact des outils numériques sur votre santé mentale et votre gestion du temps."
            ></textarea>
          </div>

          {/* Section 4: Réflexion et perception des étudiants */}
          <div className="section">
            <h3>Section 4 : Réflexion et perception des étudiants</h3>
            <label htmlFor="strategies">Si oui, quelles sont ces stratégies ?</label>
            <textarea
              id="strategies"
              name="strategies"
              rows={4}
              placeholder="Décrivez vos stratégies."
            ></textarea>
          </div>

          <button type="submit">Soumettre</button>
        </form>

        {/* Button to display all stored responses */}
        <button id="showResponsesButton" style={{ marginTop: "20px" }}>
          Afficher les réponses
        </button>

        {/* Container to display responses */}
        <div id="responsesDisplay" style={{ display: "none" }}></div>
      </main>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family: "Roboto", sans-serif;
          background-color: #fff0f6; /* Light pink background */
        }
        body {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h2 {
          text-align: center;
          color: #d81b60; /* Deep pink for heading */
          margin-bottom: 1rem;
        }
        .section {
          margin-bottom: 30px;
          padding: 20px;
          background-color: #ffeef8; /* Soft pink for sections */
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(216, 27, 96, 0.2);
        }
        .section h3 {
          margin-top: 0;
          margin-bottom: 0.75rem;
          color: #c2185b; /* Medium pink for subheadings */
        }
        label {
          display: block;
          margin-top: 10px;
          font-weight: bold;
          color: #ad1457; /* Dark pink for labels */
        }
        input[type="text"],
        input[type="number"],
        select,
        textarea {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          box-sizing: border-box;
          border: 1px solid #f48fb1; /* Light pink border */
          border-radius: 4px;
          font-size: 16px;
          font-family: inherit;
        }
        textarea {
          resize: vertical;
        }
        button {
          background-color: #e91e63; /* Bright pink button */
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
          margin-bottom: 20px;
        }
        button:hover {
          background-color: #d81b60; /* Darker pink on hover */
        }
        #responsesDisplay {
          margin-top: 20px;
          border: 1px solid #f48fb1;
          padding: 10px;
          background-color: #ffeef8;
          border-radius: 4px;
          white-space: pre-wrap;
          font-family: monospace;
        }
      `}</style>
    </>
  );
}
