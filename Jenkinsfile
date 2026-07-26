pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    tools {
        nodejs 'NodeJS-20'
    }

    environment {
        NODE_ENV = 'production'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            agent{
                docker{
            steps {
                sh 'npm run build'
            }
                }
                
            }
        }
        

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }

    }

    post {
        success {
            echo 'Production build completed successfully.'
        }

        failure {
            echo 'Build failed.'
        }

        always {
            cleanWs()
        }
    }
}