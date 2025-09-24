const barTop = document.querySelector('.bar-top');
const barBottom = document.querySelector('.bar-bottom');

const memeGifs = [
    "https://media.giphy.com/media/xT0GqssRweIhlz209i/giphy.gif",
    "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
    "https://media.giphy.com/media/f9kQDHV2hSdHqys9iB/giphy.gif",
    "https://media.giphy.com/media/l378rkAiPzzRXi0tS/giphy.gif",
    "https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif",
    "https://media.giphy.com/media/xUOwG0GRijQG9U3RNe/giphy.gif",
    "https://media.giphy.com/media/26ufl4wNHVOSZBHTW/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/WLZzJMwGEHT32/giphy.gif",
    "https://media.giphy.com/media/3o6Zt7x6nUHPSUMkgQ/giphy.gif"
    "https://media.giphy.com/media/xT0GqssRweIhlz209i/giphy.gif",
    "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
    "https://media.giphy.com/media/f9kQDHV2hSdHqys9iB/giphy.gif",
    "https://media.giphy.com/media/l378rkAiPzzRXi0tS/giphy.gif",
    "https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif",
    "https://media.giphy.com/media/xUOwG0GRijQG9U3RNe/giphy.gif",
    "https://media.giphy.com/media/26ufl4wNHVOSZBHTW/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/WLZzJMwGEHT32/giphy.gif",
    "https://media.giphy.com/media/3o6Zt7x6nUHPSUMkgQ/giphy.gif",
    "https://media.giphy.com/media/l0MYGz4cgKXs0txKk/giphy.gif",
    "https://media.giphy.com/media/26xBwdIuRJiAiSwNe/giphy.gif",
    "https://media.giphy.com/media/3ohc20ByDNHAb8GwoY/giphy.gif",
    "https://media.giphy.com/media/l2Sqc3POpzkjTDOYI/giphy.gif",
    "https://media.giphy.com/media/3o6ZtmtiCRdbbeBNwI/giphy.gif",
    "https://media.giphy.com/media/l2JhLFGVjonxWxm24/giphy.gif",
    "https://media.giphy.com/media/3ohhwH2o675r7on8li/giphy.gif",
    "https://media.giphy.com/media/l46Ccjl5C4U3IX8LK/giphy.gif",
    "https://media.giphy.com/media/3ohhwMcn8E7kyHXkdk/giphy.gif",
    "https://media.giphy.com/media/l0ExfRx8TA1k76zDW/giphy.gif",
    "https://media.giphy.com/media/l0MYDCHjz0UbTzUxi/giphy.gif",
    "https://media.giphy.com/media/l3vR7lwk13k7pR7tO/giphy.gif",
    "https://media.giphy.com/media/3o7aD8XtWAfRcGmgWk/giphy.gif",
    "https://media.giphy.com/media/l4Ki2obCyAQS5WhFe/giphy.gif",
    "https://media.giphy.com/media/xUOrw4zpwHaXkxVoUo/giphy.gif",
    "https://media.giphy.com/media/3o7aD7F1tm91xTAxPU/giphy.gif",
    "https://media.giphy.com/media/l378rxLVo1KU7eHKI/giphy.gif",
    "https://media.giphy.com/media/xUNd9J2rtpVHoT7NYg/giphy.gif",
    "https://media.giphy.com/media/3o7ZeTMvuDlT530VxW/giphy.gif",
    "https://media.giphy.com/media/l1J9ChhfXTyJUf69S/giphy.gif",
    "https://media.giphy.com/media/l1J9DeUw4KaR2MWAO/giphy.gif",
    "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
    "https://media.giphy.com/media/l0MYt6GyO3E2vkDso/giphy.gif",
    "https://media.giphy.com/media/l2SsPLzP0fNZytyyE/giphy.gif",
    "https://media.giphy.com/media/3o7GWugxdnmUqAOz2k/giphy.gif",
    "https://media.giphy.com/media/l1J9CigbQog7myvmI/giphy.gif",
    "https://media.giphy.com/media/xT9IgwqbJeR6LPoaE8/giphy.gif",
    "https://media.giphy.com/media/l1J3sQr8F0BOVrR2w/giphy.gif",
    "https://media.giphy.com/media/l3V0J3ytFyGHqiV7W/giphy.gif",
    "https://media.giphy.com/media/xT0GqeSuP25lhIDyko/giphy.gif",
    "https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif",
    "https://media.giphy.com/media/xUOwG0OViULTu18FF2/giphy.gif",
    "https://media.giphy.com/media/l0ExfRx8TA1k76zDW/giphy.gif",
    "https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif",
    "https://media.giphy.com/media/l3vRfNA1p0rvhMSv2/giphy.gif",
    "https://media.giphy.com/media/l2JhIIWspGjdZkkGg/giphy.gif",
    "https://media.giphy.com/media/xT5LMBV6doJI5FLpbq/giphy.gif",
    "https://media.giphy.com/media/3o7burlssk84v1zmak/giphy.gif",
    "https://media.giphy.com/media/3o6nVSNIzj2sTz9guA/giphy.gif",
    "https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif"
];

const memePics = [
    "https://i.imgur.com/9IoPiU3.gif",
    "https://i.imgur.com/uOZEOBl.gif",
    "https://i.imgur.com/NCxea8K.gif",
    "https://i.imgur.com/45nWU47.gif",
    "https://i.imgur.com/FjmXLxs.gif",
    "https://i.imgur.com/41vTtCS.gif",
    "https://i.imgur.com/UAk3GNN.gif",
    "https://i.imgur.com/djP4XAU.gif",
    "https://i.imgur.com/fd2Rro2.gif",
    "https://i.imgur.com/uTxFoMf.gif"
    "https://i.imgur.com/9IoPiU3.gif",
    "https://i.imgur.com/uOZEOBl.gif",
    "https://i.imgur.com/NCxea8K.gif",
    "https://i.imgur.com/45nWU47.gif",
    "https://i.imgur.com/FjmXLxs.gif",
    "https://i.imgur.com/41vTtCS.gif",
    "https://i.imgur.com/UAk3GNN.gif",
    "https://i.imgur.com/djP4XAU.gif",
    "https://i.imgur.com/fd2Rro2.gif",
    "https://i.imgur.com/uTxFoMf.gif",
    "https://i.imgur.com/45nWU47.gif",
    "https://i.imgur.com/FjmXLxs.gif",
    "https://i.imgur.com/41vTtCS.gif",
    "https://i.imgur.com/UAk3GNN.gif",
    "https://i.imgur.com/djP4XAU.gif",
    "https://i.imgur.com/fd2Rro2.gif",
    "https://i.imgur.com/uTxFoMf.gif",
    "https://i.imgur.com/nRVDm3D.gif",
    "https://i.imgur.com/xWNnkaL.png",
    "https://i.imgur.com/yQVLqGA.gif",
    "https://i.imgur.com/ppGqEeQ.gif",
    "https://i.imgur.com/As7JSy6.gif",
    "https://i.imgur.com/NWMBKbM.gif",
    "https://i.imgur.com/WhUifQW.gif",
    "https://i.imgur.com/jxfexIm.gif",
    "https://i.imgur.com/zPhXQ5M.gif",
    "https://i.imgur.com/MK14DRF.gif",
    "https://i.imgur.com/e6wOucO.gif",
    "https://i.imgur.com/VqHi0sj.gif",
    "https://i.imgur.com/2Kvjaf3.gif",
    "https://i.imgur.com/WPlB004.gif",
    "https://i.imgur.com/itkI0xj.gif",
    "https://i.imgur.com/anKucUN.gif",
    "https://i.imgur.com/dps1cH6.gif",
    "https://i.imgur.com/YrDGCbB.gif",
    "https://i.imgur.com/i2uyRik.gif",
    "https://i.imgur.com/E0JNWsb.gif",
    "https://i.imgur.com/ZKugSvO.gif",
    "https://i.imgur.com/d84eHR8.gif",
    "https://i.imgur.com/7cloFTO.gif",
    "https://i.imgur.com/D3ZPsfn.gif",
    "https://i.imgur.com/a3DhXzx.gif",
    "https://i.imgur.com/4Qz8ai5.gif",
    "https://i.imgur.com/iNBc43P.gif",
    "https://i.imgur.com/cTOoZfo.gif",
    "https://i.imgur.com/XKDqmqA.gif",
    "https://i.imgur.com/TNJNXpY.gif",
    "https://i.imgur.com/xY74IQ2.gif",
    "https://i.imgur.com/AnuFAEW.gif"
];

 function createMeme(bar, urls) {
  const meme = document.createElement('div');
  meme.classList.add('meme');
  const url = urls[Math.floor(Math.random()*urls.length)];
  meme.style.backgroundImage = `url(${url})`;
  const size = Math.floor(Math.random()*80)+40;
  meme.style.width = `${size}px`;
  meme.style.height = `${size}px`;
  meme.style.top = Math.floor(Math.random()*(bar.clientHeight-size)) + 'px';
  meme.style.left = bar===barTop ? `-${size}px` : `${window.innerWidth}px`;
  bar.appendChild(meme);
  const duration = Math.floor(Math.random()*13000) + 7000;
  let start = null;
  function animate(ts){
    if (!start) start = ts;
    const elapsed = ts - start;
    const prog = elapsed/duration;
    if(bar===barTop){
      meme.style.transform = `translateX(${window.innerWidth + size*2 * prog}px)`;
    } else {
      meme.style.transform = `translateX(-${window.innerWidth + size*2 * prog}px)`;
    }
    if(prog < 0.1) meme.style.opacity = (prog/0.1*0.8).toString();
    else if(prog > 0.9) meme.style.opacity = ((1-prog)/0.1*0.8).toString();
    else meme.style.opacity = '0.8';
    if(elapsed < duration) requestAnimationFrame(animate);
    else meme.remove();
  }
  requestAnimationFrame(animate);
}

setInterval(()=>{
  if(document.querySelectorAll('.meme').length<50){
    const bar = Math.random()<0.5 ? barTop : barBottom;
    const sources = Math.random()<0.5 ? memeGifs : memePics;
    createMeme(bar, sources);
  }
}, 150);

