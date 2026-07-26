pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        skipDefaultCheckout(true)
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install and Test') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.61.0-noble'
                    reuseNode true
                }
            }

            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'npm ci'
                sh 'npm test'
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**,test-results/**',
                allowEmptyArchive: true
            )

            cleanWs()
        }

        success {
            echo 'Playwright tests completed successfully.'
        }

        failure {
            echo 'Playwright tests failed.'
        }
    }
}