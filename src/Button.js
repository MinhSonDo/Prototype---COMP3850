
import './App.css';
import Menu from './Menu';

const Click = ()=>{
 
  if (window.confirm('Do you want to do a tutorial?'))
{
  window.location.href='/okPressed';
}
else
{
  window.location.href='/menu';
}
 
  
}
function Button() {
  return (
    <div class="buttons is-centered">
     <button class="button" onClick={Click}>Start </button>
     <button class="button">Admin </button>

    </div>
  );
}

export default Button;
