const st = document.getElementById('stage'), tip = document.getElementById('tip'), src = st.innerHTML;

st.addEventListener('mousemove', e => {
    const i = e.target.closest('.item');
    if (i) {
        tip.textContent = i.dataset.name+' - '+i.dataset.kind;
        tip.style.display = 'block';
        tip.style.left = e.clientX+14+'px';
        tip.style.top = e.clientY+14+'px'
    } else tip.style.display = 'none'
});

document.getElementById('replay').onclick = () => {
    st.innerHTML = '';
    requestAnimationFrame(() => st.innerHTML = src)
};