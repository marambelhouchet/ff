import Head from "next/head";
import React, { useEffect } from "react";

export default function Home() {
  // Keep the existing useEffect logic the same

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
          {/* Form sections remain the same */}

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
          position: relative;
          display: inline-block;
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
        }

        label {
          display: block;
          font-weight: 500;
          margin: 1.5rem 0 0.75rem;
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