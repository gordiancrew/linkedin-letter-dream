import axios from 'axios';
import React, { useState } from 'react';
import './input-bar.css';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
function InputBar() {
  const [radioValue, setRadioValue] = useState(1);
  const [currentValue, setCurrentValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [tittleValue, setTittleValue] = useState('');
  const [mailTextValue, setMailTextValue] = useState('');
  const [mailValue, setMailValue] = useState('');

  // const [answerField, setAnswerField] = useState(
  //   'input desident and your company input desident and your company input desident and your company input desident and your company input desident and your companyinput desident and your companyinput desident and your company input desident and your company input desident and your company input desident and your company input desident and your company input desident and your companyinput desident and your companyinput desident and your company input desident and your company input desident and your company input desident and your company input desident and your company input desident and your companyinput desident and your companyinput desident and your company input desident and your company input desident and your company input desident and your company input desident and your company input desident and your companyinput desident and your companyinput desident and your company input desident and your company input desident and your company input desident and your company input desident and your company input desident and your companyinput desident and your companyinput desident and your company input desident and your company input desident and your company input desident and your company input desident and your company input desident and your companyinput desident and your companyinput desident and your company input desident and your company input desident and your company input desident and your company input desident and your company input desident and your companyinput desident and your companyinput desident and your company  input desident and your company input desident and your company input desident and your company input desident and your company input desident and your companyinput desident and your companyinput desident and your company '
  // );
  const [answerField, setAnswerField] = useState('');
  function buttonHundler() {
    requestApi();
  }
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      requestApi();
      e.preventDefault();
    }
  }
  function handleKeyDownTextarea(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      requestApi();
      e.preventDefault();
    }
  }
  function chengeValue(val: number) {
    setRadioValue(val);
  }
  // function isValidHttpUrl(str: string) {
  //   const pattern = new RegExp(
  //     '^(https?:\\/\\/)?' + // protocol
  //       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  //       '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  //       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  //       '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  //       '(\\#[-a-z\\d_]*)?$', // fragment locator
  //     'i'
  //   );
  //   return pattern.test(str);
  // }

  async function requestApi() {
    //-------------------------------------------------------------
    setAnswerField('Loading...');
    setTittleValue('Loading...');
    setMailTextValue('Loading...');
    setMailValue('Loading...');

    const response = await fetch('https://linkedin-letter-production.up.railway.app/hello', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        link: currentValue,
        company: companyValue,
        button: radioValue,
      }), // body data type must match "Content-Type" header
    });

    if (response.ok) {
      const data = await response.json();
      setAnswerField(data.output_text);
      setTittleValue('The best letter');
      setMailTextValue('Hello, please read our letter for you.');
      setMailValue('example@gmail.com ');
    }

    //----------------------------------------------------------------------
    // axios
    //   .post('https://fastapi-happyai.onrender.com/hello', {
    //     link: currentValue,
    //     company: companyValue,
    //     button: radioValue,
    //   })
    //   .then((response) => response.data)
    //   .then((res) => setAnswerField(res.output_text));

    // https://www.linkedin.com/in/williamhgates/
  }
  return (
    <div className="field">
      <div className="search">
        <form className="form-field">
          <fieldset className="radio-fieldset">
            
          </fieldset>

          <textarea
            className="search-area"
            style={radioValue === 1 ? { height: '300px' } : {}}
            placeholder={
              radioValue === 0
                ? 'input company profile linkedin '
                : 'input description about company'
            }
            onChange={(e) => setCompanyValue(e.target.value)}
            onKeyDown={(e) => handleKeyDownTextarea(e)}
          />
          <input
            className="search-input"
            type="text"
            placeholder="input destination profile linkedin"
            onChange={(e) => setCurrentValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />

          <button onClick={buttonHundler} type="button">
            send
          </button>
        </form>
      </div>
      <div className="answerField-case">
        <span className="tittle-case">TITTLE: </span>
        {tittleValue}
      </div>
      <div className="answerField-case">
        <span className="tittle-case">MAIL: </span>
        {mailValue}
      </div>
      <div className="answerField-case">
        <span className="tittle-case">MAIL TEXT: </span>
        {mailTextValue}
      </div>

      <div className="answerField-case">
        <div className="tittle-case">LETTER: </div>
        {/* <React.Fragment>
          <br />
        </React.Fragment> */}
        {answerField}
      </div>
    </div>
  );
}
export default InputBar;

