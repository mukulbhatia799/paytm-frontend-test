@Library("Shared") _
pipeline {
    agent {label "mukul"}

    stages {
        stage('Hello') {
            steps {
                script {
                    hello()
                }
            }
        }
        stage('Code') {
            steps {
                script {
                    clone("https://github.com/mukulbhatia799/paytm-frontend-test.git","main")
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    docker_build("mukulbhatia189", "paytm.app", "latest")
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Hello test'
            }
        }
        stage('Push to DockerHub') {
            steps {
                docker_push("paytm.app", "latest", "mukulbhatia189")
            }
        }
        stage('Deploy') {
            steps {
                // sh "docker run -d -p 5173:5173 paytm.app:latest"
                sh "docker compose up -d"
            }
        }
    }
}
