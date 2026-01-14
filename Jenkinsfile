pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo '📥 Récupération du code depuis GitHub'
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                echo '📦 Installation des dépendances Node.js'
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                echo '🧹 Vérification du code avec ESLint (optionnel)'
                // si tu n'as pas eslint configuré, commente la ligne suivante
               // sh 'npx eslint . || echo "Lint skipped (no ESLint configured)"'
            }
        }

        stage('Run tests') {
            steps {
                echo '🧪 Exécution des tests unitaires'
                // npm test doit exister dans package.json
                sh 'npm test || exit 1'
            }
        }

        stage('Sanity check') {
            steps {
                echo '🔍 Vérification de l’environnement Node/NPM'
                sh 'node -v'
                sh 'npm -v'
            }
        }

    }

    post {
        success {
            echo '✅ Pipeline CI réussi ! Tout est OK'
        }
        failure {
            echo '🚨 Pipeline CI échoué ! Vérifie les logs'
        }
    }
}

