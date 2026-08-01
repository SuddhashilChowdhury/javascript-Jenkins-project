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
                sh '''
                 ls -la
                 node --version
                 npm --version
                 npm ci
                 npm test
                test -f 'playwright-report/index.html'
                 '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                npm install netlify-cli
                netlify --version
            }
        }
    }

    post {
        always {

          junit(
                    testResults: 'test-results/junit-results.xml',
                    allowEmptyResults: true
                )
            
                publishHTML(
                    [allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    icon: '', 
                    keepAll: false, 
                    reportDir: 'playwright-report', 
                    reportFiles: 'index.html', 
                    reportName: 'Playwright HTML Report',
                     reportTitles: '', 
                     useWrapperFileDirectly: true]
                     )
            
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