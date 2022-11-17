import './style.css';
import Leaderboard from './Leaderboard.js';
import MakeApicall from './url.js';

const scorelist = document.querySelector('.scorelist');
const refresherbutton = document.querySelector('.refresh');
const addbutton = document.querySelector('.add');
const api = new MakeApicall();

const refresher = async () => {
  scorelist.innerHTML = '';
  const res = await api.getmethod();
  const Leaderboards = new Leaderboard(res);

  scorelist.innerHTML = `<li class="list"><span class="head_span">username</span> <span class="head_span">scores</span></li>`
  Leaderboards.username.forEach((usernames) => {
    scorelist.innerHTML += `
    ${
  usernames.user
    ? `<li class="li"><span>${usernames.user} :</span> <span> ${usernames.score}</span></li>`
    : 'No data yet'
} `;
  });
};

refresherbutton.addEventListener('click', () => {
  refresher();
});

addbutton.addEventListener('click', async () => {
  const username = document.querySelector('.name').value;
  const mark = document.querySelector('.score').value;
  await api.postmethod(username, mark);
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
  refresher();
});

document.addEventListener('DOMContentLoaded', refresher, false);
