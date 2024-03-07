node('nodejs') {
    stage('Checkout') {
        git branch: 'main',
            url: 'https://github.com/wjy455820983/do400-pipines-control'
    }
    stage('Backend Tests') {
        sh 'node ./backend/test.js'
    }
    stage('Frontend Tests') {
        sh 'node ./frontend/test.js'
    }
}