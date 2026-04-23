const listbox = document.getElementById('userlist');
const placeholder = document.getElementById('placeholder');
const detailsBox = document.getElementById('userdetails');

document.addEventListener('DOMContentLoaded', () => {
     loadUsers();

     listbox.addEventListener('click', (e) => {
          if (e.target.tagName === 'LI') {

               document.querySelectorAll('.users-list li')
                    .forEach(li => li.classList.remove('active'));

               e.target.classList.add('active');

               const userId = e.target.dataset.id;
               const user = people.find(p => p.id == userId);

               if (user) {
                    displayUser(user);

                    // ✅ Hide placeholder, show details
                    placeholder.style.display = 'none';
                    detailsBox.style.display = 'block';
               }
          }
     });
});

function loadUsers() {
     people.forEach(item => {
          const li = document.createElement('li');
          li.dataset.id = item.id;
          li.textContent = item.name;
          listbox.appendChild(li);
     });
}

function displayUser(user) {
     document.getElementById('userId').textContent = user.id;
     document.getElementById('username').textContent = user.name;

     document.getElementById('address').textContent =
          `${user.street}, ${user.city}, ${user.state}, ${user.country}`;

     document.getElementById('telephone').textContent = user.telephone;
     document.getElementById('birthdate').textContent = user.birthday;
}