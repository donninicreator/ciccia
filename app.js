
const flavors = ['Scarlet Click', 'Tropical Click', 'Polar Click', 'Icy Click', 'Beryl Click', 'Amber Click', 'Artic Click'];

const grid = document.getElementById('grid');
let counts = JSON.parse(localStorage.getItem('veo_counts') || 'null');
if(!counts) counts = Object.fromEntries(flavors.map(f => [f,0]));

function save() {
    localStorage.setItem('veo_counts', JSON.stringify(counts));
    render();
}

function render() {
    grid.innerHTML = '';
    flavors.forEach(f => {
        const card = document.createElement('div'); card.className='card';
        const img = document.createElement('img');
        img.src = 'icons/' + f.replace(/\s+/g,'_') + '.png';
        img.style.width = '100%';
        img.style.borderRadius = '8px';
        const title = document.createElement('div'); title.textContent = f;
        const btn = document.createElement('button'); btn.className='btn'; btn.textContent='Aggiungi 1';
        btn.onclick = ()=>{ counts[f]++; save(); };
        const minus = document.createElement('button'); minus.className='btn small'; minus.textContent='-1';
        minus.onclick = ()=>{ if(counts[f]>0) counts[f]--; save(); };
        const cnt = document.createElement('div'); cnt.className='count'; cnt.id='c-'+f.replace(/\s+/g,'_'); cnt.textContent=counts[f];
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(cnt);
        card.appendChild(btn);
        card.appendChild(minus);
        grid.appendChild(card);
    });
}

render();
