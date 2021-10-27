const xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  'https://run.mocky.io/v3/29c428cf-096c-477d-bab6-e2e5877ec489',
  true
);

xhr.onload = function() {
  if (xhr.readyState != 4) {
    return
  }

  if (xhr.status === 200) {
    let dataForm = JSON.parse(xhr.responseText);
    console.log(dataForm);
    getForm(dataForm);
  } else {
    console.log('err', xhr.responseText)
  }
}

xhr.onerror = function() {
    console.error(xhr.statusText);
}

xhr.send();

function getForm(data) {
    let wrapper = document.createElement('div');
    wrapper.className = `${data.wrapper.class}`;
    wrapper.innerHTML = `
    <h2>${data.wrapper.title}</h2>
    `
    document.body.prepend(wrapper);
    
    let form = document.createElement('form');
    form.className = `${data.wrapper.form.class}`
    wrapper.appendChild(form);

    data.wrapper.form.item.forEach( el => {
        form.innerHTML += `
        <label class="form__label">
            ${el.name}
            <input type=${el.attribute.type} placeholder=${el.attribute.placeholder}>
        </label>
        `;        
    })

    let elems  = document.getElementsByTagName('input');
    elems[4].classList.add('form__label--button');

    let input = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7(999) 999-99-99');
    im.mask(input);

} 
