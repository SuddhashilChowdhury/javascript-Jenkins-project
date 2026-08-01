pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        skipDefaultCheckout(true)
    }
    environment{
        NETLIFY_SITE_ID='f5989571-4f17-4e82-b043-8dcad965b6e2'
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
               agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.61.0-noble'
                    reuseNode true
                }
            }
            steps {
                sh '''
                npm install netlify-cli
                npx  netlify --version
                '''
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