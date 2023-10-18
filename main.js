

document.addEventListener('DOMContentLoaded', () => {
    const fetchUsersButton = document.getElementById('fetchUsersButton');
    const userList = document.getElementById('userList');

    fetchUsersButton.addEventListener('click', () => {
        fetchRandomUsers().then(users => {
            displayUsers(users);
        });
    });

    function fetchRandomUsers() {
      return fetch('https://randomuser.me/api/?results=5') // Fetch 5 random users
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        return response.json();
        })
        .then(data => data.results)
        .catch(error => {
            console.error('Error fetching random users:', error);
            return [];
        });
    }

    function displayUsers(users) {
      userList.innerHTML = ''; // Clear the existing content

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';

        const userImage = document.createElement('img');
        userImage.src = user.picture.large;
        userDiv.appendChild(userImage);

        const userName = document.createElement('p');
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userDiv.appendChild(userName);

        userList.appendChild(userDiv);
        });
    }
});

