import './App.css';

const LogoutClick = () => {
    window.location.href='/';
}

// Create, Edit, Review don't have any function after clicking for now
// Log Out will return to start page, for now it stay at beside those three button but the button will set at top right corner in the future.

function AdminPage() {
    return (
      <div class="buttons is-centered">
       <button class="button"> Create Question Sets </button>
       <button class="button"> Edit Question Sets </button>
       <button class="button"> Review Scores </button>

       <button class="button" onClick={LogoutClick}> Log Out </button>
      </div>
    );
}

export default AdminPage;