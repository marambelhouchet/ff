import Head from "next/head";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Previous useEffect logic remains the same
    let allResponses: any[] = [];
    const storedResponses = localStorage.getItem("allResponses");
    if (storedResponses) {
      allResponses = JSON.parse(storedResponses);
    }

    const form = document.getElementById("questionnaireForm") as HTMLFormElement;
    form?.addEventListener("submit", (event) => {
      event.preventDefault();

      const responseData = {
        genre: (document.getElementById("genre") as HTMLSelectElement).value,
        age: (document.getElementById("age") as HTMLInputElement).value,
        annee: (document.getElementById("annee") as HTMLInputElement).value,
        acces: (document.getElementById("acces") as HTMLSelectElement).value,
        utilisation: (document.getElementById("utilisation") as HTMLTextAreaElement).value,
        impact: (document.getElementById("impact") as HTMLTextAreaElement).value,
        strategies: (document.getElementById("strategies") as HTMLTextAreaElement).value,
        preoccupation: (document.getElementById("preoccupation") as HTMLSelectElement).value,
        controle: (document.getElementById("controle") as HTMLSelectElement).value,
        relations: (document.getElementById("relations") as HTMLSelectElement).value,
      };

      allResponses.push(responseData);
      localStorage.setItem("allResponses", JSON.stringify(allResponses));
      console.log("Current Submission:", responseData);
      alert("Vos réponses ont été enregistrées !");
      form.reset();
    });

    const showResponsesButton = document.getElementById("showResponsesButton");
    showResponsesButton?.addEventListener("click", () => {
      const username = prompt("Entrez le nom d'utilisateur :");
      const password = prompt("Entrez le mot de passe :");

      if (username === "admin" && password === "adminpass") {
        const stored = localStorage.getItem("allResponses");
        const responses = stored ? JSON.parse(stored) : [];
        const responsesDiv = document.getElementById("responsesDisplay") as HTMLDivElement;
        responsesDiv.style.display = "block";
        responsesDiv.innerHTML =
          "<h3>Réponses enregistrées :</h3><pre>" +
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className="header">
          <h1>📱 Questionnaire - Cyberaddiction et TIC</h1>
          <div className="decorative-line"></div>
        </div>

        <div className="intro-card">
          <p className="intro-text">
            Nous sommes GHARBI Meriem et HMAISSI Tasnim, étudiantes en 3ème année sciences infirmières.
            Nous menons notre Projet de Fin d'étude auprès des étudiants de la faculté « UPSAT-Tunis »
            pour évaluer le degré de cyberaddiction et le recours aux TIC comme moyen pédagogique d'apprentissage
            théorique et pratique. <span className="highlight">Vos réponses resteront anonymes et confidentielles.</span>
          </p>
        </div>

        <form id="questionnaireForm">
          {/* Section 1: Informations démographiques */}
          <div className="section">
            <h3>📝 Informations démographiques</h3>
            
            <div className="form-group">
              <label htmlFor="genre">1. Genre :</label>
              <select id="genre" name="genre" required>
                <option value="">Sélectionnez votre genre</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="age">2. Âge :</label>
              <input 
                type="number" 
                id="age" 
                name="age" 
                placeholder="Entrez votre âge" 
                min="16" 
                max="50" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="annee">3. Année d'étude :</label>
              <input
                type="text"
                id="annee"
                name="annee"
                placeholder="Ex: 3ème année"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="acces">4. Avez-vous accès à un ordinateur et à internet à domicile ?</label>
              <select id="acces" name="acces" required>
                <option value="">Sélectionnez une option</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </div>
          </div>

          {/* Section 2: Utilisation des outils numériques */}
          <div className="section">
            <h3>💻 Utilisation des outils numériques</h3>
            
            <div className="form-group">
              <label htmlFor="utilisation">
                5. Décrivez votre utilisation des outils numériques dans votre formation académique :
              </label>
              <textarea
                id="utilisation"
                name="utilisation"
                placeholder="Ex: Plateformes utilisées, fréquence d'utilisation..."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="preoccupation">
                6. Pensez-vous constamment à l'utilisation des outils numériques même lorsque vous ne les utilisez pas ?
              </label>
              <select id="preoccupation" name="preoccupation" required>
                <option value="">Sélectionnez une option</option>
                <option value="Toujours">Toujours</option>
                <option value="Souvent">Souvent</option>
                <option value="Parfois">Parfois</option>
                <option value="Jamais">Jamais</option>
              </select>
            </div>
          </div>

          {/* Section 3: Impact et gestion */}
          <div className="section">
            <h3>⏱️ Impact et gestion</h3>
            
            <div className="form-group">
              <label htmlFor="impact">
                7. Quel impact les outils numériques ont-ils sur votre santé mentale et votre gestion du temps ?
              </label>
              <textarea
                id="impact"
                name="impact"
                placeholder="Décrivez les effets positifs et/ou négatifs..."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="controle">
                8. Avez-vous du mal à contrôler le temps passé sur les outils numériques ?
              </label>
              <select id="controle" name="controle" required>
                <option value="">Sélectionnez une option</option>
                <option value="Toujours">Toujours</option>
                <option value="Souvent">Souvent</option>
                <option value="Parfois">Parfois</option>
                <option value="Jamais">Jamais</option>
              </select>
            </div>
          </div>

          {/* Section 4: Stratégies et relations */}
          <div className="section">
            <h3>🤝 Relations et stratégies</h3>
            
            <div className="form-group">
              <label htmlFor="relations">
                9. L'utilisation des TIC a-t-elle affecté vos relations sociales ?
              </label>
              <select id="relations" name="relations" required>
                <option value="">Sélectionnez une option</option>
                <option value="Négativement">Négativement</option>
                <option value="Positivement">Positivement</option>
                <option value="Sans effet">Sans effet</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="strategies">
                10. Quelles stratégies utilisez-vous pour gérer votre temps d'écran ?
              </label>
              <textarea
                id="strategies"
                name="strategies"
                placeholder="Ex: Applications de suivi, planning..."
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" className="submit-button">
            <span>Soumettre les réponses</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/>
            </svg>
          </button>
        </form>

        <button id="showResponsesButton" className="admin-button">
          <span>Afficher les réponses</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 3c5.392 0 7.878 3.88 7.99 9.01L20 12H22c0-6.48-4.48-10-10-10C5.58 2 2 5.58 2 10c0 4.42 3.54 8 8 8v-2c-3.31 0-6-2.69-6-6 0-3.66 3.14-6 6-6zm10 9h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm8-4h-2v6h2v-6z"/>
          </svg>
        </button>

        <div id="responsesDisplay" className="response-container"></div>
      </main>

      <style jsx global>{`
        :root {
          --primary: #ec4899;
          --primary-hover: #db2777;
          --background: #fdf2f8;
          --card-bg: #fff;
          --text: #1f2937;
          --text-light: #6b7280;
        }

        html, body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background-color: var(--background);
          color: var(--text);
        }

        main {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        h1 {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1rem;
        }

        .decorative-line {
          height: 4px;
          background: linear-gradient(90deg, var(--primary) 0%, #f472b6 100%);
          width: 80%;
          margin: 0 auto;
          border-radius: 2px;
        }

        .intro-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          margin-bottom: 3rem;
          border: 1px solid #f3d9e8;
        }

        .intro-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-light);
          margin: 0;
        }

        .highlight {
          color: var(--primary);
          font-weight: 500;
        }

        .section {
          background: var(--card-bg);
          border-radius: 0.75rem;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          border: 1px solid #fce7f3;
        }

        .section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #fce7f3;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        input, select, textarea {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid #f3d9e8;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.2s ease;
          background: var(--card-bg);
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        .submit-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 1.5rem;
          width: 100%;
          justify-content: center;
        }

        .submit-button:hover {
          background: var(--primary-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px -2px rgba(236, 72, 153, 0.4);
        }

        .admin-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
          border-radius: 0.75rem;
          font-weight: 500;
          margin-top: 2rem;
          transition: all 0.2s ease;
          width: 100%;
          justify-content: center;
        }

        .admin-button:hover {
          background: rgba(236, 72, 153, 0.05);
          transform: translateY(-1px);
        }

        .response-container {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 0.75rem;
          margin-top: 2rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          display: none;
        }

        @media (max-width: 768px) {
          main {
            padding: 1.5rem 1rem;
          }
          
          h1 {
            font-size: 1.75rem;
          }
          
          .section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}