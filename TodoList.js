let List = {
    arr: JSON.parse(localStorage.getItem('List1')) || [],
    arr2: JSON.parse(localStorage.getItem('List2')) || []
};

function Store() {
    let s = document.querySelector('input').value;
    if (s.trim() === '') return; // Prevent empty entries
    List.arr.push(s);
    document.querySelector('input').value = '';
    Store2();
}

document.querySelector('.date').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') Store();
});

document.querySelector('.Add').addEventListener('click', () => {
    Store();
});

function Store2() {
    let s = document.querySelector('.date').value;
    if (!s) return; // Prevent empty date values
    List.arr2.push(s);
    document.querySelector('.date').value = '';
    display();
}

function display() {
    let list = '';
    for (let i = 0; i < List.arr.length; i++) {
        let element = List.arr[i];
        let element2 = List.arr2[i];

        let h = `<div>${element}</div>
        <div>${element2}</div>
        <button class="Delete" data-index="${i}">Delete</button>`;
        list += h;
    }
    document.querySelector('.disp').innerHTML = list;

    document.querySelectorAll('.Delete').forEach((del) => {
        del.addEventListener('click', (event) => {
            let index = event.target.getAttribute('data-index');
            List.arr.splice(index, 1);
            List.arr2.splice(index, 1);
            updateStorage();
            display();
        });
    });

    updateStorage();
}

function updateStorage() {
    localStorage.setItem('List1', JSON.stringify(List.arr));
    localStorage.setItem('List2', JSON.stringify(List.arr2));
}

// Call display() when the page loads to show stored tasks
display();
