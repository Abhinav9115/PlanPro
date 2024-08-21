document.addEventListener("DOMContentLoaded", function () {
    // Chart.js for Weekly Focus Chart
    const ctx = document.getElementById('weeklyFocusChart').getContext('2d');
    const weeklyFocusChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Math', 'Science', 'History', 'Language Arts'],
            datasets: [{
                label: 'Study Hours',
                data: [12, 9, 7, 6],  // Example data
                backgroundColor: [
                    '#4CAF50',
                    '#FFCE56',
                    '#36A2EB',
                    '#FF6384'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Chart.js for Study Hours Chart
    const studyHoursCtx = document.getElementById('studyHoursChart').getContext('2d');
    const studyHoursChart = new Chart(studyHoursCtx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Study Hours',
                data: [2, 3, 4, 5, 3, 2, 4],  // Example data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart.js for Completed Tasks Chart
    const completedTasksCtx = document.getElementById('completedTasksChart').getContext('2d');
    const completedTasksChart = new Chart(completedTasksCtx, {
        type: 'bar',
        data: {
            labels: ['Math', 'Science', 'History', 'Language Arts'],
            datasets: [{
                label: 'Tasks Completed',
                data: [4, 3, 5, 2],  // Example data
                backgroundColor: [
                    '#4CAF50',
                    '#FFCE56',
                    '#36A2EB',
                    '#FF6384'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart.js for Productivity Analysis Chart
    const productivityCtx = document.getElementById('productivityChart').getContext('2d');
    const productivityChart = new Chart(productivityCtx, {
        type: 'radar',
        data: {
            labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
            datasets: [{
                label: 'Focus Level',
                data: [4, 9, 6, 5, 3, 2],  // Example data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                },
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Switch between login and signup forms
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');

    if (showSignupLink) {
        showSignupLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'signup.html';
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }

    // Handle form submissions (Placeholder functionality)
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Login functionality is currently under development.');
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Signup functionality is currently under development.');
        });
    }
});
