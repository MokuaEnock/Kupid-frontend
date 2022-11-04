import Aside from "../User/aside";

export default function Form() {
  return (
    <section id="userForm">
      <Aside />
      
      <form>
        <div className="formInfo"></div>
        <div className="formInfo"></div>
        <div className="formInfo"></div>
        <div className="formInfo"></div>
        <div className="formInfo"></div>
      </form>

      <div>
        <span>
          <strong>1</strong>
          &nbsp; &nbsp;
          <p>Personal Information</p>
        </span>

        <span>
          <strong>2</strong>
          &nbsp; &nbsp;
          <p>Education History</p>
        </span>

        <span>
          <strong>3</strong>
          &nbsp; &nbsp;
          <p>Food Restriction</p>
        </span>

        <span>
          <strong>4</strong>
          &nbsp; &nbsp;
          <p>Interests</p>
        </span>

        <span>
          <strong>5</strong>
          &nbsp; &nbsp;
          <p>About you</p>
        </span>

        <button>Submit</button>
        {/* ['age', 'status', 'sex', 'orientation', 'body_type', 'diet', 'drinks',
       'drugs', 'education', 'ethnicity', 'height', 'income', 'job',
       'last_online', 'location', 'offspring', 'pets', 'religion', 'sign',
       'smokes', 'speaks', 'essay0', 'essay1', 'essay2', 'essay3', 'essay4',
       'essay5', 'essay6', 'essay7', 'essay8', 'essay9'] */}
      </div>
    </section>
  );
}
