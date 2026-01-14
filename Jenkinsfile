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

        stage('Basic test') {
            steps {
                echo '🧪 Test simple : vérification du lancement Node'
                sh 'node -e "console.log(\'Node fonctionne\')"'
            }
        }

        stage('Sanity check') {
            steps {
                echo '🔍 Vérification des versions'
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Failure demo (volontaire)') {
            steps {
                echo '❌ Échec volontaire pour comprendre un build rouge'
                sh 'exit 1'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline CI réussi'
        }
        failure {
            echo '🚨 Pipeline CI en échec (c’est volontaire ici)'
        }
    }
}

