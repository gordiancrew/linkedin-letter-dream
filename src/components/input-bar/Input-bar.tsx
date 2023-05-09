import axios from 'axios';
import React, { useState } from 'react';
import './input-bar.css';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
function InputBar() {
  const [radioValue, setRadioValue] = useState(1);
  const [currentValue, setCurrentValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');

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
    setAnswerField('Loading...');

    axios
      .post('https://fastapi-happyai.onrender.com/hello', {
        link: currentValue,
        company: companyValue,
        button: radioValue,
      })
      .then((response) => response.data)
      .then((res) => setAnswerField(res.output_text));

    // https://www.linkedin.com/in/williamhgates/
  }
  return (
    <div className="field">
      <div className="search">
        <form className="form-field">
          <fieldset className="radio-fieldset">
            <div className="radio-field-wrapper">
              <div className="radio-field">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    checked={radioValue === 1 ? true : false}
                    onChange={() => chengeValue(1)}
                  />
                  letter from profile linkedin
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    checked={radioValue === 0 ? true : false}
                    onChange={() => chengeValue(0)}
                  />
                  letter from description company
                </label>
              </div>
            </div>
          </fieldset>

          <textarea
            className="search-area"
            style={radioValue === 0 ? { height: '300px' } : {}}
            placeholder={
              radioValue === 1
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
      <div className="answerField">
        <p>{answerField}</p>
      </div>
    </div>
  );
}
export default InputBar;
